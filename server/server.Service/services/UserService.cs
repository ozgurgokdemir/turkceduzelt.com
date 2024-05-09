using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.WebUtilities;
using server.Core.DTOs;
using server.Core.Models;
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

        public UserService(UserManager<UserApp> userManager)
        {
            _userManager = userManager;
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

        public async Task UpdatePassword(string userId, string resetToken, string newPassword)
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
    }
}
