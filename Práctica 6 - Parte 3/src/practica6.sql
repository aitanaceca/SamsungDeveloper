/* PRÁCTICA 5 - BASES DE DATOS */
CREATE DATABASE samsung_developer COLLATE 'utf8mb4_general_ci';

USE samsung_developer;

CREATE TABLE usuario (
	id INTEGER AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL
);
