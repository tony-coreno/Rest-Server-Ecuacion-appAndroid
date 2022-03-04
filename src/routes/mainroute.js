const express = require('express');
const {request,response} = require('express');
const {Router} = require('express');
const router = express.Router();


router.post('/formula/general', (request, response) => {

    //Respuesta de FrontEnd

    const {valor1, valor2, valor3} = request.body;

    let resultado1 = {
        a: valor1,
        b: valor2,
        c: valor3
    }

    //Ecuación General =>  -b +- </b*2 - 4ac  / 2a

    let {a,b,c} = resultado1; //Desestructurando las variables recibidas por el FrontEnd

    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);

    //Lógica de ecuación de Segundo Grado

    let primeraParte = Math.sqrt((b*b)-(4*a*c));
    let segundaParte = (2*a);

    let ecuacion1 = ((-(b) + primeraParte)/segundaParte);
    let ecuacion2 = ((-(b) - primeraParte)/segundaParte);
    
    const soluciones = {
        ecuacion1,
        ecuacion2
    }

    //Respuesta del Server
    console.log(`El resultado de X1 = ${ecuacion1}`);
    console.log(`El resultado de X2 = ${ecuacion2}`);
    response.json({Status: 200, soluciones});

});

router.post('/mainroute/ecuacion2', (request, response) => {


    //Respuesta FrontEnd
    const {masa, aceleracion} = request.body;

    let resultado = {
        m: masa,
        a: aceleracion,

    } 

    //Desestructurando Variables y parseando

    let {m,a} = resultado;

    m = parseFloat(m);
    a = parseFloat(a);

    let fuerza = m * a;

    //Respuesta Server

    console.log(`La Fuerza es : ${fuerza} N `);
    response.json({Status: 200, mensaje: `La fuerza es ${fuerza} N `});
});

module.exports = router;