#!/bin/bash

echo "Waiting for SQL Server to start..."

# Wait for SQL Server to accept connections
until /opt/mssql-tools/bin/sqlcmd -S db -U sa -P "Final2025" -Q "SELECT 1" &> /dev/null
do
  echo "SQL Server is not ready yet. Retrying in 2 seconds..."
  sleep 2
done

echo "SQL Server is ready. Running SQL scripts..."

for file in /db-init/*.sql
do
  echo "Executing $file"
  /opt/mssql-tools/bin/sqlcmd -S db -U sa -P "Final2025" -d master -i "$file"
done

echo "Done! Database initialized."
