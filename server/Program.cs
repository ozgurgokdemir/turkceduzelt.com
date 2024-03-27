using Microsoft.Extensions.Configuration;
using Serilog;
using Serilog.Core;
using server.Services;


var builder = WebApplication.CreateBuilder(args);

//Cors
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
        policy =>
        {
            policy.WithOrigins("http://localhost:5173").AllowAnyHeader().AllowAnyMethod();
        });
});

//SerilogConfiguration
Logger log = new LoggerConfiguration()
.WriteTo.Console()
.MinimumLevel.Information()
.CreateLogger();

builder.Host.UseSerilog(log);

// Add services to the container.

string apiKey = builder.Configuration.GetSection("ApiServiceSettings")["ApiKey"];
//scopes
builder.Services.AddScoped<ApiService>(_ => new ApiService(apiKey, _.GetRequiredService<ILogger<ApiService>>()));

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
   app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
