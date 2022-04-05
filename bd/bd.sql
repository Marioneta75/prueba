drop database if exists bdEstudent;
create database bdEstudent;
use bdEstudent;

# Create table #
CREATE TABLE estudiante (
	ci INT(11) NOT NULL PRIMARY KEY,
	matricula VARCHAR(12) NOT NULL default(''),
	paterno VARCHAR(20) NOT NULL default(''),
	materno VARCHAR(20) NOT NULL default(''),
	nombre VARCHAR(25) NOT NULL default(''),
	direccion VARCHAR(150) NOT NULL default('')
);
CREATE TABLE contacts (
	id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	fullname VARCHAR(150) NOT NULL default(''),
    celular int(11) NOT NULL default(0),
	email VARCHAR(100) NOT NULL default('')	
);

Insert into contacts (fullname,celular,email)
Select 'Marion Teran',78846535,'napol@gmail.com';
Select * from contacts