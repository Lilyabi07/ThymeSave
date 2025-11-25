using System.Data;

namespace ThymeSave_WebApi.Server.Data.DataMapper
{
    public static class DataTableMapper
    {
        public static List<T> ConvertToList<T>(DataTable table) where T : new()
        {
            var list = new List<T>();
            var properties = typeof(T).GetProperties();

            foreach (DataRow row in table.Rows)
            {
                var obj = new T();

                foreach (var prop in properties)
                {
                    if (!table.Columns.Contains(prop.Name))
                        continue;

                    var value = row[prop.Name];

                    if (value == DBNull.Value)
                        continue;

                    var propType = Nullable.GetUnderlyingType(prop.PropertyType) ?? prop.PropertyType;
                    var convertedValue = Convert.ChangeType(value, propType);

                    prop.SetValue(obj, convertedValue);
                }

                list.Add(obj);
            }

            return list;
        }
    }

}
