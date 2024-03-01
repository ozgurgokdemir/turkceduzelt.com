using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
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

        public class WordPair
        {
            public string? doğru { get; set; }
            public string? yanlış { get; set; }
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] string prompt)
        {
            if (string.IsNullOrEmpty(prompt))
            {
                return BadRequest("Prompt cannot be empty.");
            }

            string response = await _apiService.SendApiMessage(prompt);

            
            try
            {
                // JSON verisini C# nesnesine dönüştürme
                var data = JsonConvert.DeserializeObject<Dictionary<string, List<WordPair>>>(
                    response
                );
                // C# nesnesini JSON verisine döndürme
                var jsonData = JsonConvert.SerializeObject(data);

                return Ok(jsonData);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

            
        }
    }
}
