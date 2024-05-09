using server.Core.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Core.Services
{
    public interface IUserService
    {
        Task<Response<UserAppDto>> CreateUserAsync(CreateUserDto createUserDto);

        Task<Response<UserAppDto>> GetUserByNameAsync(string userName);

        Task UpdatePassword(string userId, string resetToken, string newPassword);
    }
}
