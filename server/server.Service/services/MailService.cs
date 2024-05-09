using Microsoft.Extensions.Configuration;
using server.Core.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Threading.Tasks;

namespace server.Service.services
{
    public class MailService:IMailService
    {
        private readonly IConfiguration _configuration;

        public MailService(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task SendMessageAsync(string to, string subject, string body, bool isBodyHtml = true)
        {
          await  SendMessageAsync(new[] {to}, subject,body,isBodyHtml);
        }
        public async Task SendMessageAsync(string[] tos, string subject, string body, bool isBodyHtml = true)
        {
            MailMessage mail = new MailMessage();
            mail.IsBodyHtml = isBodyHtml;
            foreach (var to in tos)
            {
              mail.To.Add(to);
            }
            mail.Subject = subject;
            mail.Body = body;
            mail.From = new(_configuration["Mail:Username"],"TurkceDuzelt", System.Text.Encoding.UTF8);


            SmtpClient smtp = new SmtpClient();
            smtp.Credentials = new NetworkCredential(_configuration["Mail:Username"], _configuration["Mail:Password"]);
            smtp.DeliveryMethod = SmtpDeliveryMethod.Network; //
            smtp.UseDefaultCredentials = false;  //
            smtp.Port = 587;
            smtp.EnableSsl = true;
            smtp.Host = _configuration["Mail:Host"];

            await smtp.SendMailAsync(mail);
        }

        public async Task SendPasswordResetMailAsync(string to, string userId, string resetToken)
        {
            StringBuilder mail = new StringBuilder();
            mail.AppendLine("Merhaba<br>Eğer yeni şifre talebinde bulunduysanız aşağıdaki linkten şifrenizi yenileyebilirsiniz.<br><strong><a target=\"_blank\" href=\"");
            mail.AppendLine(_configuration["ClientUrl"]);
            mail.AppendLine("/passwordReset/");
            mail.AppendLine(userId);
            mail.AppendLine("/");
            mail.AppendLine(resetToken);
            mail.AppendLine("\">Yeni şifre talebi için tıklayınız...</a></strong><br><br>");

            await SendMessageAsync(to,"Şifre Yenileme Talebi",mail.ToString());
        }
    }
}
