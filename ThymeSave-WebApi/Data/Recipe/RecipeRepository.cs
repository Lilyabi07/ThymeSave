using Microsoft.Data.SqlClient;
using System.Data;

namespace ThymeSave_WebApi.Data.Recipe
{
    public class RecipeRepository : BaseRepository
    {
        public RecipeRepository(SqlConnectionFactory cf) : base(cf) { }

        public DataSet GetAllOfficialRecipes()
        {
            string query = "Select * from Recipe where createdById is null";

            return ExecuteDataSetQuery(query);
        }

        public DataSet GetAllUserRecipes(string userIdentifier)
        {
            string query = "Select * from Recipe where createdById = @userId";

            SqlParameter[] sqlParameters = {
                new SqlParameter("@userId", userIdentifier)
            };

            DataSet ds = ExecuteDataSetQuery(query, sqlParameters);

            ds.Tables[0].TableName = "Recipe";

            return ds;
        }

        public DataSet GetRecipeByRecipeId(string recipeIdentifier)
        {
            string query = "Select * from Recipe where identifier = @recipeIdentifier";
            query += "Select * from RecipeIngredients where recipeId = @recipeIdentifier";
            query += "Select * from RecipeInstructions where recipeId = @recipeIdentifier";


            SqlParameter[] sqlParameters = {
                new SqlParameter("@recipeIdentifier", recipeIdentifier)
            };

            DataSet ds = ExecuteDataSetQuery(query, sqlParameters);

            ds.Tables[0].TableName = "Recipe";
            ds.Tables[1].TableName = "RecipeIngredients";
            ds.Tables[2].TableName = "RecipeInstructions";

            return ds;
        }
    }
}
