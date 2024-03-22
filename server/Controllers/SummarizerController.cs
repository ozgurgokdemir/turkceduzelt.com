using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server.Services;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SummarizerController : ControllerBase
    {
        private readonly ApiService _apiService;

        public SummarizerController(ApiService apiService)
        {
            _apiService = apiService;
        }

        readonly string systemMessage = @"sen türkçede uzmanlaşmış bir asistansın ve görevin sana verdiğimiz metinleri anlam
          kaybına uğramayacak şekilde özetlemek.";


        [HttpPost]
        public async Task<IActionResult> Post([FromBody] string prompt)
        {
          
            if (string.IsNullOrEmpty(prompt))
            {
                return BadRequest("Prompt cannot be empty.");
            }           

            string response = await _apiService.SendSummarizerMessage(prompt, systemMessage); ;

            return Ok(response);
        }
    }
}
