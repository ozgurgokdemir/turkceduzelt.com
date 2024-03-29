﻿using Microsoft.AspNetCore.Http;
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
        private readonly ILogger<CompletionsController> _logger;

        public CompletionsController(ApiService apiService, ILogger<CompletionsController> logger)
        {
            _apiService = apiService;
            _logger = logger;
        }

        public class WordPair
        {
            public string? doğru { get; set; }
            public string? yanlış { get; set; }
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] string prompt)
        {
            // Zaman aşımı süresi ve yeniden deneme sayısı
            var timeout = TimeSpan.FromSeconds(10); // 10 saniye
            int maxRetries = 3;

            // Yeniden deneme mekanizması
            int retryCount = 0;
            Exception lastException = null;


            if (string.IsNullOrEmpty(prompt))
            {
                _logger.LogError("Received request with empty prompt.");
                return BadRequest("Prompt cannot be empty.");
            }

            do
            {
                try
                {
                    // HttpClient oluşturun ve zaman aşımı süresini belirleyin
                    using (var httpClient = new HttpClient())
                    {
                        httpClient.Timeout = timeout;

                        string response = await _apiService.SendApiMessage(prompt);

                        try 
                        {
                            // JSON verisini C# nesnesine dönüştürme
                            var data = JsonConvert.DeserializeObject<Dictionary<string, List<WordPair>>>(
                                response
                            );
                            // C# nesnesini JSON verisine döndürme
                            var jsonData = JsonConvert.SerializeObject(data);

                            _logger.LogInformation("transaction successful");
                            return Ok(jsonData);
                            
                        }
                        catch(JsonSerializationException ex) 
                        {
                            // JSON formatına dönüştürme işlemi sırasında hata meydana geldi ve log tutuldu
                            _logger.LogError(ex, "An error occurred while serializing object to JSON.");

                            return BadRequest("An error occurred while processing your request.");
                        }
                       
                    }
                   
                }
                catch (Exception ex)
                {
                    // Hata durumunda, hatayı kaydedin ve yeniden deneme sayısını artırın
                    lastException = ex;
                    retryCount++;

                    // Bekle ve tekrar dene
                    await Task.Delay(1000); // 1 saniye bekleme                 
                }
            } while (retryCount < maxRetries);

            // Tüm yeniden deneme işlemlerinden sonra hala başarısız olunursa hatayı işleyin
            if (lastException != null)
            {
                _logger.LogError("Maximum retry count exceeded.");
                return BadRequest("An error occurred while processing your request.");
            }
          
            return BadRequest("An error occurred while processing your request.");

        }
    }
}
