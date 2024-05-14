﻿using server.Core.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Core.Services
{
    public interface IAuthenticationService
    {
        Task<Response<TokenDto>> CreateTokenAsync(LoginDto loginDto);

        Task<Response<TokenDto>> CreateTokenByRefreshToken(string refreshToken);

        Task<Response<NoDataDto>> RevokeRefreshToken(string refreshToken);

        Task<Response<TokenDto>> CreateTokenByGoogleAsync(GoogleLoginDto request);

        Task PasswordResetAsync(string email);

        Task<bool> VerifyResetTokenAsync(string resetToken, string userId);

        Task MailConfirmAsync(string mail);

        Task<Response<NoDataDto>> VerifyMailConfirmTokenAsync(VerifyMailConfirmTokenDto verifyMailConfirmTokenDto);








    }
}
