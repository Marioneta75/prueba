const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'nodejs',
    password: 'pelota',
    database: 'bdEstudent'
});

conexion.connect((error)=> {
    if(error) {
        console.error('El error de conexion es: '+error);
        return
    }
    console.log('!Conectado a la BD MySql');
})

module.exports = conexion;