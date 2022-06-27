-- CREATE TABLE FOR GLOBAL PLASTIC PRODUCTION
CREATE TABLE global_plastic_production(
    id Serial Primary Key,
    Entity TEXT,
    Code TEXT,
    Year INT,
    Global_plastics_production INT
);


COPY global_plastic_production(Entity, Code, Year,Global_plastics_production)
FROM 'data/csv/global-plastics-production.csv'
DELIMITER ','
CSV HEADER;


-- CREATE TABLE FOR MISMANAGED WASTE GLOBAL TOTAL
CREATE TABLE mismanaged_waste_global_total(
    id Serial Primary Key,
    Entity TEXT,
    Code TEXT,
    Year INT,
    Mismanaged_Waste FLOAT
);


COPY mismanaged_waste_global_total(Entity, Code, Year,Mismanaged_Waste)
FROM 'data/csv/global-plastics-production.csv'
DELIMITER ','
CSV HEADER;


-- CREATE TABLE FOR PER CAPITA MISMANAGED
CREATE TABLE per_capita_mismanaged(
    id Serial Primary Key,
    Entity TEXT,
    Code TEXT,
    Year INT,
    Per_Capita_Mismanaged_Plastic_Waste FLOAT,
    GDP_Per_Capita FLOAT,
    Total_Population INT,
    Continent TEXT
);


COPY per_capita_mismanaged(Entity, Code, Year,Mismanaged_Waste)
FROM '/Users/ivonne/Documents/GitHub/Global-Plastic-Pollution-API/data/csv/per-capita-mismanaged-plastic-waste-vs-gdp-per-capita.csv'
DELIMITER ','
CSV HEADER;


-- CREATE TABLE FOR PER CAPITA PLASTIC WASTE 
CREATE TABLE per_capita_plastic_waste(
    id Serial Primary Key,
    Entity TEXT,
    Code TEXT,
    Year INT
);


COPY per_capita_mismanaged(Entity, Code, Year,Mismanaged_Waste)
FROM 'data/csv/global-plastics-production.csv'
DELIMITER ','
CSV HEADER;