using server.Core.DTOs;
using server.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Core.Services
{
    public interface ITokenService
    {
        TokenDto CreateToken(UserApp userApp);
    }
}
