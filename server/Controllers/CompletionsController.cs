using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using server.Services;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompletionsController : ControllerBase
    {
        private readonly ApiService _apiService;

        public CompletionsController(ApiService apiService)
        {
            _apiService = apiService;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] string prompt)
        {
            if (string.IsNullOrEmpty(prompt))
            {
                return BadRequest("Prompt cannot be empty.");
            }

            string response = await _apiService.SendApiMessage(prompt);
            return Ok(response);
        }
    }
}
