using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server.Core.DTOs;
using server.Core.Services;

namespace server.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser(CreateUserDto createUserDto)
        {
           var result = await _userService.CreateUserAsync(createUserDto);
            if(result.IsSuccessful)
            {
                return Ok(result);
            }
            else
            {
                return BadRequest();
            }
        }

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> GetUser()
        {
            var result = await _userService.GetUserByNameAsync(HttpContext.User.Identity.Name);
            if (result.IsSuccessful)
            {
                return Ok(result);
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpPost]
        public async Task<IActionResult> UpdatePassword(UpdatePasswordDto updatePasswordDto)
        {
           await _userService.UpdatePassword(updatePasswordDto.UserId,updatePasswordDto.ResetToken,updatePasswordDto.NewPassword);
            return Ok();
        }
    }
}
