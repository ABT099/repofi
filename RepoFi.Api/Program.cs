var builder = WebApplication.CreateBuilder(args);

const string allCors = "All";

builder.Services.AddControllers();
builder.Services.AddCors(options => options.AddPolicy(allCors,build =>
{
    build.AllowAnyHeader();
    build.AllowAnyOrigin();
    build.AllowAnyMethod();
}));

var app = builder.Build();

app.MapControllers();

app.UseCors(allCors);

app.Run();