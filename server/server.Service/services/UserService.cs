using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.EntityFrameworkCore;
using server.Core.DTOs;
using server.Core.Models;
using server.Core.Repositories;
using server.Core.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Service.services
{
    public class UserService : IUserService
    {
        private readonly UserManager<UserApp> _userManager;
        private readonly IGenericRepository<UserRefreshToken> _userRefreshTokenService;
        private readonly IAuthenticationService _authenticationService;

        public UserService(UserManager<UserApp> userManager, IGenericRepository<UserRefreshToken> userRefreshTokenService, IAuthenticationService authenticationService)
        {
            _userManager = userManager;
            _userRefreshTokenService = userRefreshTokenService;
            _authenticationService = authenticationService;
        }

        public async Task<Response<UserAppDto>> CreateUserAsync(CreateUserDto createUserDto)
        {
            var user = new UserApp { Email = createUserDto.Email, UserName = createUserDto.UserName };

            var result = await _userManager.CreateAsync(user, createUserDto.Password);

            if (!result.Succeeded)
            {
                var errors = result.Errors.Select(x => x.Description).ToList();

                return Response<UserAppDto>.Fail(new ErrorDto(errors, true), 400);
            }

            // mail gönder
            _authenticationService.MailConfirmAsync(createUserDto.Email);
            return Response<UserAppDto>.Success(ObjectMapper.Mapper.Map<UserAppDto>(user), 200);
        }

        public async Task<Response<UserAppDto>> GetUserByNameAsync(string userName)
        {
            var user = await _userManager.FindByNameAsync(userName);

            if (user == null)
            {
                return Response<UserAppDto>.Fail("UserName not found", 404, true);
            }

            return Response<UserAppDto>.Success(ObjectMapper.Mapper.Map<UserAppDto>(user), 200);
        }

        public async Task ResetPasswordAsync(string userId, string resetToken, string newPassword)
        {
            UserApp user = await _userManager.FindByIdAsync(userId);
            if (user != null)
            {
                byte[] tokenBytes =WebEncoders.Base64UrlDecode(resetToken);
                resetToken = Encoding.UTF8.GetString(tokenBytes);

                IdentityResult result = await _userManager.ResetPasswordAsync(user, resetToken, newPassword);
                if (result.Succeeded)
                {
                    await _userManager.UpdateSecurityStampAsync(user);
                }
                else
                    throw new Exception();
            }
        }

        public async Task<Response<NoDataDto>> ChangePasswordAsync(ChangePasswordDto changePasswordDto)
        {
            var existRefreshToken = await _userRefreshTokenService.Where(x => x.Code == changePasswordDto.refreshToken).SingleOrDefaultAsync();

            if (existRefreshToken == null)
            {
                return Response<NoDataDto>.Fail("Refresh token not found", 404, false);
            }
            var currentUser = await _userManager.FindByIdAsync(existRefreshToken.UserId);
            if (currentUser == null)
            {
                return Response<NoDataDto>.Fail("User Id not found", 404, false);
            }
            var checkOldPassword = await _userManager.CheckPasswordAsync(currentUser,changePasswordDto.passwordOld);

            if (!checkOldPassword)
            {
                return Response<NoDataDto>.Fail("Your old password wrong", 404, true);
            }

            var resultChangePassword = await _userManager.ChangePasswordAsync(currentUser,changePasswordDto.passwordOld,changePasswordDto.passwordNew);
            
            if(!resultChangePassword.Succeeded)
            {
                return Response<NoDataDto>.Fail("Your password could not be changed",404,true);
            }
            return Response<NoDataDto>.Success(200);
            
        }
        
    }
}
