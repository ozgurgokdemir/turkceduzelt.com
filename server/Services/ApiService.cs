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
    ilk görevin sana verilen cumledeki kelimeleri incelemek ve yanlış yazılmış kelimeleri doğrusu ile sana örnek verilen formatta sunmak. Doğru yazılmış olan kelimeleri kesinlikle dahil etme. Sadece yanlış olan kelimeler JSON verisi içinde dahil olsun. Kelimenin ilk harfinin büyük veya küçük olup olmayacağına dikkat et.
    ikinci görevin cumlenin gönderilen ve doğru halini sunduğun ikinci bir json formatı oluşturmak. Cümle eksiksiz bir şekilde geri dönmeli
    sana verilen format dışında herhangi bir başlık veya benzeri ekleme yapmamalısın.
    

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
        ],
        ""cumle"": [
            {
                ""doğru"": ""cumlenin doğrusu"",
                ""yanlış"": ""cumlenin yanlışı""
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

        public async Task<string> SendParaphraserMessage(string prompt,string systemMessage)
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
            return (responseMessage.Content);
        }
    }
}
