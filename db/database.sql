-- scrpipt de la bd para copiar
CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employee;

INSERT INTO employee (name, salary)
VALUES 
    ('Juan Pérez', 25000),
    ('María López', 30000),
    ('Carlos García', 28000),
    ('Ana Fernández', 32000);