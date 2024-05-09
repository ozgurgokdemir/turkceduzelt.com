using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Core.DTOs
{
    public class UpdatePasswordDto
    {
        public string? UserId { get; set; }
        public string? ResetToken { get; set; }
        public string? NewPassword { get; set; }
    }
}
