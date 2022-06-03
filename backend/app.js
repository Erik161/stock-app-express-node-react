const express = require('express')


/*
    initialize our application
*/ 
const app = express()

/*
    function that controls the route; 
    req = contains all the information that reaches our server
    res = It's a response object, which is what we're going to respond with.
*/
app.get('/', (req, res)=>{

    console.log('Peticion Recibida')

    res.send('Hola Mundo!')
});

/*
    put our application to listen on a certain port of our computer
*/ 
app.listen(4000,()=>{
    console.log("Servidor Escuchando en el puerto 4000");
});


/*
    A dependency is installed 
    that detects that every time a 
    change is made, it resets the server and 
    the name of the dependency is: 
        ----->NODEMON<-------
*/ 

/*
    to run the nodemon dependency on YARN
    the following command is placed.
    ----->yarn run nodemon app.js<-------
*/

/*
    In the package.json you can add a script to run the command to initialize the server
*/

