const express =  require('express')
// const mysql = require('mysql')

const app = express()

app.set('view engine','ejs')

app.use('/',require('./router'));

// app.get('/',(req,res)=> {
//     res.send('hola')
// })

// //Establecemos los prámetros de conexión
// const conexion = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'1',
//     database:'bdEstudent'
// })
// //Conexión a la database
// conexion.connect(function(error){
//     if(error){
//         throw error
//     }else{
//         console.log("¡Conexión exitosa a la base de datos!")
//     }
// })

const puerto = process.env.PUERTO || 3000
app.listen(puerto, function(){
    console.log("Servidor Ok en puerto:"+puerto)
})