const colors = require('colors');
const express = require('express');

const dotenv = require('dotenv')
const server = express();
dotenv.config();


const port = process.env.PORT;
// process es una propiedad de config

server.get('/', (req, res) => {
    res.send('Hola mundoo <3');
})
server.listen(port, () => {
        console.log(`estoy en el puerto ${port}`.random);
    })
    //ponemos 3000 y la funcion callback por medio de funcion flecha