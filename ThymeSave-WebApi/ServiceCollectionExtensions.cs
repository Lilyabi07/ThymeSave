using Microsoft.Extensions.DependencyInjection;
using ThymeSave_WebApi.Data;
using ThymeSave_WebApi.Data.Recipe;
using ThymeSave_WebApi.Logic.Recipe;

namespace ThymeSave_WebApi
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddThymeSaveServices(this IServiceCollection services)
        {
            // Logic Layer
            services.AddScoped<IRecipeLogic, RecipeLogic>();
            //services.AddScoped<ShoppingListLogic>();
            //services.AddScoped<UserLogic>();
            //services.AddScoped<AuthLogic>();

            // Data Layer
            services.AddScoped<RecipeRepository>();
            //services.AddScoped<ShoppingListRepository>();
            //services.AddScoped<UserRepository>();
            //services.AddScoped<AuthRepository>();

            // Shared utilities
            services.AddSingleton<SqlConnectionFactory>();

            return services;
        }
    }
}
