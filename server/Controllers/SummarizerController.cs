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
        private readonly ILogger<SummarizerController> _logger;

        public SummarizerController(ApiService apiService, ILogger<SummarizerController> logger)
        {
            _apiService = apiService;
            _logger = logger;
        }

        readonly string systemMessage = @"sen türkçede uzmanlaşmış bir asistansın ve görevin sana verdiğimiz metinleri anlam
          kaybına uğramayacak şekilde özetlemek.";


        [HttpPost]
        public async Task<IActionResult> Post([FromBody] string prompt)
        {
          
            if (string.IsNullOrEmpty(prompt))
            {
                _logger.LogError("wrong value added");
                return BadRequest("Prompt cannot be empty.");
            }           

            try
            {
                string response = await _apiService.SendSummarizerMessage(prompt, systemMessage); ;

                _logger.LogInformation("transaction successful");
                return Ok(response);
            }
            catch(Exception ex)
            {
                _logger.LogError(ex, "An error occurred while processing the request.");
                return StatusCode(500, "An error occurred while processing the request.");
            }
            
        }
    }
}
