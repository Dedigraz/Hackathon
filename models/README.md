# Build instructions

## Migration instructions

After downloading .Net run this to set up the database

``` bash
dotnet tool install --global dotnet-ef
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet ef migrations add InitialCreate
dotnet ef database update```
