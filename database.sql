CREATE DATABASE global_plastic_pollution_database;

CREATE TABLE global_plastic_production(
    id Serial Primary Key,
    Entity TEXT,
    Code TEXT,
    Year INT,
    Global_plastics_production INT
);




Declare @JSON varchar(max)
SELECT @JSON=BulkColumn
FROM OPENROWSET (BULK '/Users/ivonne/Documents/GitHub/Global-Plastic-Pollution-API/data/json/global-plastics-production.json', SINGLE_CLOB) import
SELECT * INTO  global_plastic_production
FROM OPENJSON (@JSON)
WITH
(
    [Entity] TEXT, 
    [Code] TEXT, 
    [Year] INT, 
    [Global_plastics_production] INT
)





DECLARE @json nvarchar(max)

SELECT @json = BulkColumn
FROM OPENROWSET (BULK '/Users/ivonne/Documents/GitHub/Global-Plastic-Pollution-API/data/json/global-plastics-production.json', SINGLE_CLOB) as j

INSERT INTO [Product] ([Age], [Name], [Id], [Price], [ImageUrl], [Snippet])
SELECT [Age], [Name], [Id], [Price], [ImageUrl], [Snippet]
FROM OPENJSON(@json) WITH (
   Age int '$.Age',
   Name nvarchar(50) '$.Name',
   Id nvarchar(50) '$.Id',
   ImageUrl nvarchar(50) '$.ImageUrl',
   Price decimal(18) '$.Price',
   Snippet nvarchar(50) '$.Snippet'
)

