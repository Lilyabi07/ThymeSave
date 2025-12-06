using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using ThymeSave_WebApi.Logic.Recipe;

namespace ThymeSave_WebApi.Controllers.Recipe
{
    [ApiController]
    [Route("api/v1/recipes")]
    public class RecipeController : ControllerBase
    {
        private readonly Logic.Recipe.IRecipeLogic _recipeLogic;
        public RecipeController(Logic.Recipe.IRecipeLogic recipeLogic)
        {
            _recipeLogic = recipeLogic;
        }

        [HttpGet("{recipeIdentifier}")]
        public IActionResult GetRecipeByRecipeId(string recipeIdentifier)
        {
            if (!Guid.TryParse(recipeIdentifier, out var recipeId))
                return BadRequest("Invalid GUID");

            DataSet dsRecipe = _recipeLogic.GetRecipeByRecipeId(recipeIdentifier);

            return Ok(dsRecipe);
        }

        [HttpGet("")]
        public IActionResult GetAllOfficialRecipes()
        {
            DataSet dsRecipe = _recipeLogic.GetAllOfficialRecipes();

            return Ok(dsRecipe);
        }
    }
}
