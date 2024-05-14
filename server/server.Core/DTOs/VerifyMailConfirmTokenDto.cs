using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace server.Core.DTOs
{
    public class VerifyMailConfirmTokenDto
    {
        public string? confirmToken { get; set; }
        public string? userId { get; set; }
    }
}
