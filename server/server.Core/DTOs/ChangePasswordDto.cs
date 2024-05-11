using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Core.DTOs
{
    public class ChangePasswordDto
    {
        public string? refreshToken { get; set; }
        public string? passwordOld { get; set; }
        public string? passwordNew { get; set; }

    }
}
