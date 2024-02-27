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

        public async Task<string> SendApiMessage(string prompt)
        {

            var chatCompletionsOptions = new ChatCompletionsOptions()
            {
                DeploymentName = "gpt-3.5-turbo-0125",
                Messages =
                      {
                        new ChatRequestSystemMessage("Sen türk dil kurumunda çalışan bir asistansın ve görevin cümledeki yanlış kelimeleri düzeltmek."),

                        new ChatRequestUserMessage(prompt),

                      }
            };

            Response<ChatCompletions> response = await _openAIClient.GetChatCompletionsAsync(chatCompletionsOptions);
            ChatResponseMessage responseMessage = response.Value.Choices[0].Message;
            return $"[{responseMessage.Role.ToString().ToUpperInvariant()}]: {responseMessage.Content}";
        }
    }
}
