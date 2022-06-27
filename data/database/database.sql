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
Entity,Code,Year,Per capita mismanaged plastic waste,"GDP per capita, PPP (constant 2011 international $)","Total population (Gapminder, HYDE & UN)",Continent
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
FROM 'data/csv/global-plastics-production.csv'
DELIMITER ','
CSV HEADER;