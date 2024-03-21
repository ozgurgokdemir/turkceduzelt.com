using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using server.Services;
using static server.Controllers.CompletionsController;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ParaphraserController : ControllerBase 
    {
        private readonly ApiService _apiService;

        public ParaphraserController(ApiService apiService)
        {
            _apiService = apiService;
        }

        readonly string paraphraserMessageFormal = @"sen türkçede uzmanlaşmış bir asistansın ve görevin sana verdiğimiz
        bilgilere göre metinleri dönüştürmek. Türkçedeki tüm metinlerin resmi, nötr ve arkadaş canlısı olmak üzere üç seviyesi
         vardır ve senin görevin sana verilen metinleri resmi olacak şekilde dönüştürmek.";
        readonly string paraphraserMessageNotr = @"sen türkçede uzmanlaşmış bir asistansın ve görevin sana verdiğimiz
        bilgilere göre metinleri dönüştürmek. Türkçedeki tüm metinlerin resmi, nötr ve arkadaş canlısı olmak üzere üç seviyesi
         vardır ve senin görevin sana verilen metinleri notr olacak şekilde dönüştürmek.";
        readonly string paraphraserMessageFriendly = @"sen türkçede uzmanlaşmış bir asistansın ve görevin sana verdiğimiz
        bilgilere göre metinleri dönüştürmek. Türkçedeki tüm metinlerin resmi, nötr ve arkadaş canlısı olmak üzere üç seviyesi
         vardır ve senin görevin sana verilen metinleri arkadaş canlısı olacak şekilde dönüştürmek.";

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] string prompt, [FromQuery] int value)
        {
            string systemMessage;
            if (string.IsNullOrEmpty(prompt))
            {
                return BadRequest("Prompt cannot be empty.");
            }

            if(value == 1)
            {
                systemMessage = paraphraserMessageFormal;
            }
            else if(value == 2)
            {
                systemMessage = paraphraserMessageNotr;
            }
            else if (value == 3)
            {
                systemMessage = paraphraserMessageFriendly;
            }
            else
            {
                return BadRequest("false value");
            }

            string response =  await _apiService.SendParaphraserMessage(prompt, systemMessage); ;

            return Ok(response);
        }

       
    }
}
