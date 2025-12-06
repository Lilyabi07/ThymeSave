#!/bin/bash

echo "Waiting for SQL Server to start..."

until /opt/mssql-tools/bin/sqlcmd -S db -U sa -P "Final2025" -Q "SELECT 1" -h -1 -W -w 1024 &> /dev/null
do
  echo "SQL Server is not ready yet. Retrying in 2 seconds..."
  sleep 2
done

echo "SQL Server is ready. Running SQL scripts..."

# Run schema FIRST no matter what
echo "Executing /db-init/01-schema.sql"
/opt/mssql-tools/bin/sqlcmd -S db -U sa -P "Final2025" -d master -i "/db-init/schema.sql"

# Check if ANY recipe ingredient data exists
HAS_DATA=$(/opt/mssql-tools/bin/sqlcmd -S db -U sa -P "Final2025" -d ThymeSave -h -1 -W -w 1024 \
    -Q "SET NOCOUNT ON; IF EXISTS (SELECT 1 FROM RecipeIngredient) SELECT 1 ELSE SELECT 0")

# Normalize whitespace + newlines
HAS_DATA=$(echo "$HAS_DATA" | tr -d '[:space:]')

echo "HAS_DATA='$HAS_DATA'"

if [ "$HAS_DATA" = "1" ]; then
  echo "Seed data already exists. Skipping seeds."
else
  echo "No seed data found. Running seeds..."

  for file in /db-init/0*.sql
  do
    echo "Executing $file"
    /opt/mssql-tools/bin/sqlcmd -S db -U sa -P "Final2025" -d ThymeSave -i "$file"
  done
fi

echo "Done! Database initialized."
