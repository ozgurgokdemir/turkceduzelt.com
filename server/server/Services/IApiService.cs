namespace server.Services
{
    public interface IApiService
    {
        public Task<string> SendApiMessage(string prompt);
        public Task<string> SendParaphraserMessage(string prompt, string systemMessage);
        public Task<string> SendSummarizerMessage(string prompt, string systemMessage);

    }
}
