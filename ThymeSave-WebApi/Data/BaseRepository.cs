using Microsoft.AspNetCore.Connections;
using Microsoft.Data.SqlClient;
using System.Data;
using ThymeSave_WebApi.Data.DataMapper;

namespace ThymeSave_WebApi.Data
{

    public abstract class BaseRepository
    {
        private readonly SqlConnectionFactory _connectionFactory;

        protected BaseRepository(SqlConnectionFactory connectionFactory)
        {
            _connectionFactory = connectionFactory;
        }

        protected DataSet ExecuteDataSetQuery(string query, SqlParameter[]? parameters = null)
        {
            using var conn = _connectionFactory.CreateConnection();
            using var cmd = new SqlCommand(query, conn);
            using var adapter = new SqlDataAdapter(cmd);

            if (parameters != null)
                cmd.Parameters.AddRange(parameters);

            var ds = new DataSet();
            adapter.Fill(ds);

            return ds;
        }

        protected DataTable ExecuteDataTableQuery(string query, SqlParameter[]? parameters = null)
        {
            var ds = ExecuteDataSetQuery(query, parameters);
            return ds.Tables[0];
        }

        protected int ExecuteNonQuery(string query, SqlParameter[]? parameters = null)
        {
            using var conn = _connectionFactory.CreateConnection();
            using var cmd = new SqlCommand(query, conn);

            if (parameters != null)
                cmd.Parameters.AddRange(parameters);

            conn.Open();
            return cmd.ExecuteNonQuery();
        }

        protected object? ExecuteScalar(string query, SqlParameter[]? parameters = null)
        {
            using var conn = _connectionFactory.CreateConnection();
            using var cmd = new SqlCommand(query, conn);

            if (parameters != null)
                cmd.Parameters.AddRange(parameters);

            conn.Open();
            return cmd.ExecuteScalar();
        }
    }

}
