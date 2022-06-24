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
