namespace server.Services
{
    public interface IApiService
    {
        public Task<string> SendApiMessage(string prompt);
    }
}
