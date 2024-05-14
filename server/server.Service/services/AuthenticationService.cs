using Google.Apis.Auth;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Newtonsoft.Json.Linq;
using NuGet.Common;
using server.Core.DTOs;
using server.Core.Models;
using server.Core.Repositories;
using server.Core.Services;
using server.Core.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security;
using System.Text;
using System.Threading.Tasks;
using static Google.Apis.Auth.GoogleJsonWebSignature;

namespace server.Service.services
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly ITokenService _tokenService;
        private readonly UserManager<UserApp> _userManager;
        private readonly IUnitOfWork _unitOfWork;
        private readonly IGenericRepository<UserRefreshToken> _userRefreshTokenService;
        private readonly IMailService _mailService;

        public AuthenticationService(ITokenService tokenService, UserManager<UserApp> userManager, IUnitOfWork unitOfWork, IGenericRepository<UserRefreshToken> userRefreshTokenService, IMailService mailService)
        {
            _tokenService = tokenService;
            _userManager = userManager;
            _unitOfWork = unitOfWork;
            _userRefreshTokenService = userRefreshTokenService;
            _mailService = mailService;
        }


        public async Task<Response<TokenDto>> CreateTokenAsync(LoginDto loginDto)
        {
            if (loginDto == null) throw new ArgumentNullException(nameof(loginDto));

            var user = await _userManager.FindByEmailAsync(loginDto.Email);

            if (user == null) return Response<TokenDto>.Fail("Email or Password is wrong", 400, true);

            if (!await _userManager.CheckPasswordAsync(user, loginDto.Password))
            {
                return Response<TokenDto>.Fail("Email or Password is wrong", 400, true);
            }
            if(user.EmailConfirmed==false)
            {
                return Response<TokenDto>.Fail("Email not verified", 400, true);
            }

            var token = _tokenService.CreateToken(user);

            var userRefreshToken = await _userRefreshTokenService.Where(x => x.UserId == user.Id).SingleOrDefaultAsync();

            if (userRefreshToken == null)
            {
                await _userRefreshTokenService.AddAsync(new UserRefreshToken { UserId = user.Id, Code = token.RefreshToken, Expiration = token.RefreshTokenExpiration });
            }
            else
            {
                userRefreshToken.Code = token.RefreshToken;
                userRefreshToken.Expiration = token.RefreshTokenExpiration;
            }

            await _unitOfWork.CommmitAsync();

            return Response<TokenDto>.Success(token, 200);
        }

        public async Task<Response<TokenDto>> CreateTokenByRefreshToken(string refreshToken)
        {
            var existRefreshToken = await _userRefreshTokenService.Where(x => x.Code == refreshToken).SingleOrDefaultAsync();

            if (existRefreshToken == null)
            {
                return Response<TokenDto>.Fail("Refresh token not found", 404, true);
            }

            var user = await _userManager.FindByIdAsync(existRefreshToken.UserId);

            if (user == null)
            {
                return Response<TokenDto>.Fail("User Id not found", 404, true);
            }

            var tokenDto = _tokenService.CreateToken(user);

            existRefreshToken.Code = tokenDto.RefreshToken;
            existRefreshToken.Expiration = tokenDto.RefreshTokenExpiration;

            await _unitOfWork.CommmitAsync();

            return Response<TokenDto>.Success(tokenDto, 200);
        }

        public async Task<Response<NoDataDto>> RevokeRefreshToken(string refreshToken)
        {
            var existRefreshToken = await _userRefreshTokenService.Where(x => x.Code == refreshToken).SingleOrDefaultAsync();
            if (existRefreshToken == null)
            {
                return Response<NoDataDto>.Fail("Refresh token not found", 404, true);
            }

            _userRefreshTokenService.Remove(existRefreshToken);

            await _unitOfWork.CommmitAsync();

            return Response<NoDataDto>.Success(200);
        }

        public async Task<Response<TokenDto>> CreateTokenByGoogleAsync(GoogleLoginDto request)
        {
            ValidationSettings? settings = new GoogleJsonWebSignature.ValidationSettings()
            {
                Audience = new List<string>()
                { "Google-Client-Id" }
            };
            Payload payload = await GoogleJsonWebSignature.ValidateAsync(request.IdToken, settings);
            UserLoginInfo userLoginInfo = new(request.Provider, payload.Subject, request.Provider);
            UserApp user = await _userManager.FindByLoginAsync(userLoginInfo.LoginProvider, userLoginInfo.ProviderKey);

            bool result = user != null;
            if (user == null)
            {
                user = await _userManager.FindByEmailAsync(payload.Email);
                if (user == null)
                {
                    user = new()
                    { 
                    Id = Guid.NewGuid().ToString(),
                    Email = payload.Email, 
                    UserName = payload.Email,                   
                    };
                    IdentityResult createResult = await _userManager.CreateAsync(user);
                    result = createResult.Succeeded;
                }
            }

            if (result)
                await _userManager.AddLoginAsync(user, userLoginInfo);
            else
                throw new Exception("Invalid external authentication.");


            var token = _tokenService.CreateToken(user);
            await _unitOfWork.CommmitAsync();
            return Response<TokenDto>.Success(token, 200);
        }

        public async Task PasswordResetAsync(string email)
        {
            var user = await _userManager.FindByEmailAsync(email);
            if(user != null)
            {
                string resetToken = await _userManager.GeneratePasswordResetTokenAsync(user);

                byte[] TokenBytes = Encoding.UTF8.GetBytes(resetToken);
                resetToken = WebEncoders.Base64UrlEncode(TokenBytes);

                await _mailService.SendPasswordResetMailAsync(email, user.Id, resetToken);
            }

        }

        public async Task<bool> VerifyResetTokenAsync(string resetToken, string userId)
        {
            UserApp user = await _userManager.FindByIdAsync(userId);
            if(user != null)
            {
              byte[] tokenBytes = WebEncoders.Base64UrlDecode(resetToken);
              resetToken = Encoding.UTF8.GetString(tokenBytes);

              return await _userManager.VerifyUserTokenAsync(user, _userManager.Options.Tokens.PasswordResetTokenProvider,"ResetPassword", resetToken);
            }
            return false;
           
        }

        // kayıtla beraber çalıştır
        public async Task MailConfirmAsync(string mail)
        {
            var user = await _userManager.FindByEmailAsync(mail);
            if (user != null)
            {
                string emailConfirmationToken = await _userManager.GenerateEmailConfirmationTokenAsync(user);

                byte[] TokenBytes = Encoding.UTF8.GetBytes(emailConfirmationToken);
                emailConfirmationToken = WebEncoders.Base64UrlEncode(TokenBytes);

                await _mailService.SendEmailConfirmationtMailAsync(mail, user.Id, emailConfirmationToken);
            }        
        }

        // usercontroller'da çalıştır
        public async Task<Response<NoDataDto>> VerifyMailConfirmTokenAsync(VerifyMailConfirmTokenDto verifyMailConfirmTokenDto)
        {
            UserApp user = await _userManager.FindByIdAsync(verifyMailConfirmTokenDto.userId);
            if (user == null)
            {
                return Response<NoDataDto>.Fail("aa",404,true);
            }
            byte[] tokenBytes = WebEncoders.Base64UrlDecode(verifyMailConfirmTokenDto.confirmToken);
            verifyMailConfirmTokenDto.confirmToken = Encoding.UTF8.GetString(tokenBytes);

            var response = await _userManager.VerifyUserTokenAsync(user, _userManager.Options.Tokens.EmailConfirmationTokenProvider, "EmailConfirmation", verifyMailConfirmTokenDto.confirmToken);
            if( response == false)
            {
                return Response<NoDataDto>.Fail("aa", 404, true);
            }
            user.EmailConfirmed = true;
            await _userManager.UpdateSecurityStampAsync(user);

            return Response<NoDataDto>.Success(200);
        }

    }
}
