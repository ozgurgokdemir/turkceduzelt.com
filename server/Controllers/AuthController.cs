﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server.Core.DTOs;
using server.Core.Services;

namespace server.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthenticationService _authenticationService;

        public AuthController(IAuthenticationService authenticationService)
        {
            _authenticationService = authenticationService;
        }


        //api/auth/CreateToken
        [HttpPost]
        public async Task<IActionResult> CreateToken(LoginDto loginDto)
        {
            var result = await _authenticationService.CreateTokenAsync(loginDto);

            if (result.StatusCode == 200)
            {              
                return Ok(result);
            }
            else if (result.StatusCode == 400)
            {            
                return BadRequest("Token oluşturulamadı.");
            }
            else
            {               
                return StatusCode((int)result.StatusCode, "Beklenmeyen bir hata oluştu.");
            }
        }

        //api/auth/RevokeRefreshToken
        [HttpPost]
        public async Task<IActionResult> RevokeRefreshToken(RefreshTokenDto refreshTokenDto)
        {
            var result = await _authenticationService.RevokeRefreshToken(refreshTokenDto.Token);

            if (result.StatusCode == 200)
            {
                return Ok(result);
            }
            else if (result.StatusCode == 400)
            {
                return BadRequest("Token oluşturulamadı.");
            }
            else
            {
                return StatusCode((int)result.StatusCode, "Beklenmeyen bir hata oluştu.");
            }
        }

        //api/auth/CreateTokenByRefreshToken
        [HttpPost]
        public async Task<IActionResult> CreateTokenByRefreshToken(RefreshTokenDto refreshTokenDto)

        {
            var result = await _authenticationService.CreateTokenByRefreshToken(refreshTokenDto.Token);

            if (result.StatusCode == 200)
            {
                return Ok(result);
            }
            else if (result.StatusCode == 400)
            {
                return BadRequest("Token oluşturulamadı.");
            }
            else
            {
                return StatusCode((int)result.StatusCode, "Beklenmeyen bir hata oluştu.");
            };
        }
    }
}
