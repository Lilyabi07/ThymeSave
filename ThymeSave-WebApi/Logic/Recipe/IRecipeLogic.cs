using System.Data;

namespace ThymeSave_WebApi.Logic.Recipe
{
    public interface IRecipeLogic
    {
        DataSet GetAllOfficialRecipes();
        DataSet GetAllUserRecipes(string userId);
        DataSet GetRecipeByRecipeId(string recipeId);
    }
}
