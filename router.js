const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

router.get('/',(req, res)=>{
    // res.render('index');
    // res.render('index', {var1: 'Esto es una variable'});
    conexion.query('Select * from contacts', (error, results)=> {
        if(error) {
            throw error;
        }else {
            //res.send(results);
            //res.send('index', {data: results});
            //res.send(body, status)
            //res.status(status).send(obj)
            res.status(200).send(results);
            //res.status(200).send((results[1].fullname).toString());
            //res.status(200).send((results[2].celular).toString(),);
        }
    })
    /*res.send('CONTACTO')*/
})

module.exports = router;