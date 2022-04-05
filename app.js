const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const { json } = require('express')
const app = express()

app.use(express.json())
app.use(cors())
//Establecemos los prámetros de conexión
const conexion = mysql.createConnection({
    host:'localhost',
    user:'nodejs',
    password:'pelota',
    database:'bdEstudent'
})
//Conexión a la database
conexion.connect(function(error){
    if(error){
        throw error
    }else{
        console.log("¡Conexión exitosa a la base de datos!!!")
    }
})
app.get('/', function(req,res){
    res.send('Ruta INICIO')
})
//Mostrar todos los artículos
app.get('/api/contacto', (req,res)=>{
    conexion.query('SELECT * FROM contacts', (error,filas)=>{
        if(error){
            throw error
        }else{
            res.send(filas)
        }
    })
})
//Mostrar un SOLO artículo
app.get('/api/contacto/:id', (req,res)=>{
    conexion.query('SELECT * FROM contacts WHERE id = ?', [req.params.id], (error, fila)=>{
        if(error){
            throw error
        }else{
            res.send(fila)
        }
    })
})
//Crear un artículo
app.post('/api/contacto', (req,res)=>{
    let data = {fullname:req.body.fullname, celular:req.body.celular, email:req.body.email}
    let sql = "INSERT INTO contacts SET ?"
    conexion.query(sql, data, function(err, result){
            if(err){
               throw err
            }else{              
             /*Esto es lo nuevo que agregamos para el CRUD con Javascript*/
             Object.assign(data, {id: result.insertId }) //agregamos el ID al objeto data             
             res.send(data) //enviamos los valores                         
        }
    })
})
//Editar articulo
app.put('/api/contacto/:id', (req, res)=>{
    let id = req.params.id
    let descripcion = req.body.descripcion
    let precio = req.body.precio
    let stock = req.body.stock
    let sql = "UPDATE contacts SET fullname = ?, celular = ?, email = ? WHERE id = ?"
    conexion.query(sql, [fullname, celular, email, id], function(error, results){
        if(error){
            throw error
        }else{              
            res.send(results)
        }
    })
})
//Eliminar articulo
app.delete('/api/contacto/:id', (req,res)=>{
    conexion.query('DELETE FROM contacts WHERE id = ?', [req.params.id], function(error, filas){
        if(error){
            throw error
        }else{              
            res.send(filas)
        }
    })
})
const puerto = process.env.PUERTO || 3000
app.listen(puerto, function(){
    console.log("Servidor Positivo en puerto:"+puerto)
})