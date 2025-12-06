using System.Data;
using ThymeSave_WebApi.Data.Recipe;

namespace ThymeSave_WebApi.Logic.Recipe
{
    public class RecipeLogic(RecipeRepository recipeRepository) : IRecipeLogic
    {
        public RecipeRepository _recipeData = recipeRepository;

        public DataSet GetAllOfficialRecipes()
        {
            return _recipeData.GetAllOfficialRecipes();
        }

        public DataSet GetAllUserRecipes(string userId)
        {
            return _recipeData.GetAllUserRecipes(userId);
        }

        public DataSet GetRecipeByRecipeId(string recipeId) 
        { 
            return _recipeData.GetRecipeByRecipeId(recipeId);
        }
    }
}
