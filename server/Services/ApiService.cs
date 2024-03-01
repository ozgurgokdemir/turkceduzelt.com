using Azure;
using Azure.AI.OpenAI;

namespace server.Services
{
    public class ApiService : IApiService
    {
        private readonly string _apiKey;
        private readonly OpenAIClient _openAIClient;



        public ApiService(string apiKey)
        {
            _apiKey = apiKey;
            _openAIClient = new OpenAIClient(apiKey);
        }

        readonly string systemMessage =
    @" 
    Sen türk dil kurumunda çalışan bir asistansın ve iki görevin var. 

    İlk görevin cümledeki büyük küçük harf ve yazım hatalarını düzeltmek.
   
    İkinci görevin düzelttiğin cümle ve verilen cümle arasındaki farkları JSON verisine dönüştürmek. Doğru yazılmış olan kelimeleri dahil etme. Sadece yanlış olan kelimeler JSON verisi içinde dahil olsun. Kelimenin ilk harfinin büyük veya küçük olup olmayacağına dikkat et.

    Örnek:

    {
        ""kelimeler"": [
            {
                ""doğru"": ""kelimenin doğrusu"",
                ""yanlış"": ""kelimenin yanlışı""
            },
            {
                ""doğru"": ""kelimenin doğrusu"",
                ""yanlış"": ""kelimenin yanlışı""
            }
        ]
    }
";


        public async Task<string> SendApiMessage(string prompt)
        {

            var chatCompletionsOptions = new ChatCompletionsOptions()
            {
                DeploymentName = "gpt-3.5-turbo-0125",
                Messages =
                      {
                        new ChatRequestSystemMessage(systemMessage),

                        new ChatRequestUserMessage(prompt),

                      }
            };

            Response<ChatCompletions> response = await _openAIClient.GetChatCompletionsAsync(chatCompletionsOptions);
            ChatResponseMessage responseMessage = response.Value.Choices[0].Message;
            return(responseMessage.Content);
        }
    }
}
