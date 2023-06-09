/* PRÁCTICA 5 - BASES DE DATOS */
CREATE DATABASE samsung_developer COLLATE 'utf8mb4_general_ci';

USE samsung_developer;

CREATE TABLE usuario (
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL,
    apellido VARCHAR(20) NOT NULL,
    email VARCHAR(20) NOT NULL
);

INSERT INTO usuario (nombre, apellido, email) VALUES ('prueba1', 'numero1', 'prueba1@samsung.es');
INSERT INTO usuario (nombre, apellido, email) VALUES ('prueba2', 'numero2', 'prueba2@samsung.es');
INSERT INTO usuario (nombre, apellido, email) VALUES ('prueba3', 'numero3', 'prueba3@samsung.es');
INSERT INTO usuario (nombre, apellido, email) VALUES ('prueba4', 'numero4', 'prueba4@samsung.es');
INSERT INTO usuario (nombre, apellido, email) VALUES ('prueba5', 'numero5', 'prueba5@samsung.es');
