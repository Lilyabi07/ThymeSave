using System.Data;
using Microsoft.Data.SqlClient;
using ThymeSave_WebApi.Server.Data.DataMapper;

namespace ThymeSave_WebApi.Server.Data
{

    public abstract class BaseRepository
    {
        private readonly string _connectionString;

        protected BaseRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected DataTable ExecuteQuery(string sql, params SqlParameter[] parameters)
        {
            using var conn = new SqlConnection(_connectionString);
            using var cmd = new SqlCommand(sql, conn);

            if (parameters?.Length > 0)
                cmd.Parameters.AddRange(parameters);

            using var da = new SqlDataAdapter(cmd);
            var dt = new DataTable();
            da.Fill(dt);

            return dt;
        }


        // ---------------------------
        // Execute Query → POCO list
        // ---------------------------
        protected List<T> QueryToList<T>(string sql, params SqlParameter[] parameters) where T : new()
        {
            var dt = ExecuteQuery(sql, parameters);
            return DataTableMapper.ConvertToList<T>(dt);
        }


        // ---------------------------
        // Execute Non-Query
        // ---------------------------
        protected int ExecuteNonQuery(string sql, params SqlParameter[] parameters)
        {
            using var conn = new SqlConnection(_connectionString);
            using var cmd = new SqlCommand(sql, conn);

            if (parameters != null && parameters.Length > 0)
                cmd.Parameters.AddRange(parameters);

            conn.Open();
            return cmd.ExecuteNonQuery();
        }

        // ---------------------------
        // Execute Scalar
        // ---------------------------
        protected T ExecuteScalar<T>(string sql, params SqlParameter[] parameters)
        {
            using var conn = new SqlConnection(_connectionString);
            using var cmd = new SqlCommand(sql, conn);

            if (parameters != null && parameters.Length > 0)
                cmd.Parameters.AddRange(parameters);

            conn.Open();
            var result = cmd.ExecuteScalar();

            if (result == DBNull.Value || result == null)
                return default!;

            return (T)Convert.ChangeType(result, typeof(T));
        }

        protected async Task<DataTable> ExecuteQueryAsync(string sql, params SqlParameter[] parameters)
        {
            using var conn = new SqlConnection(_connectionString);
            using var cmd = new SqlCommand(sql, conn);

            if (parameters != null && parameters.Length > 0)
                cmd.Parameters.AddRange(parameters);

            await conn.OpenAsync();
            using var reader = await cmd.ExecuteReaderAsync();

            var dt = new DataTable();
            dt.Load(reader);
            return dt;
        }

        protected async Task<List<T>> QueryToListAsync<T>(string sql, params SqlParameter[] parameters) where T : new()
        {
            var dt = await ExecuteQueryAsync(sql, parameters);
            return DataTableMapper.ConvertToList<T>(dt);
        }

        protected async Task<int> ExecuteNonQueryAsync(string sql, params SqlParameter[] parameters)
        {
            using var conn = new SqlConnection(_connectionString);
            using var cmd = new SqlCommand(sql, conn);

            if (parameters != null && parameters.Length > 0)
                cmd.Parameters.AddRange(parameters);

            await conn.OpenAsync();
            return await cmd.ExecuteNonQueryAsync();
        }

        protected async Task<T> ExecuteScalarAsync<T>(string sql, params SqlParameter[] parameters)
        {
            using var conn = new SqlConnection(_connectionString);
            using var cmd = new SqlCommand(sql, conn);

            if (parameters != null && parameters.Length > 0)
                cmd.Parameters.AddRange(parameters);

            await conn.OpenAsync();
            var result = await cmd.ExecuteScalarAsync();

            if (result == DBNull.Value || result == null)
                return default!;

            return (T)Convert.ChangeType(result, typeof(T));
        }

    }

}
