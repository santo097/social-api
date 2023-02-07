import express, { application } from 'express';
import morgan from 'morgan';
import Rutas from './Rutas.js';

// Instancia
const server = express();

// middlewars

//Escuchar las peticiones en modo desarrollador 
server.use(morgan('dev'));
// Habilitar el uso de json dentro de las peticiones
server.use(express.json());
// Habilitar encabezados y el uso de contentidos para las solicitudes 
server.use((req,res,next) =>{
    res.header(
        "Access-Control-Allow-Headers",
        "x-acces-token,Origin, Content-Type,Accept"
    );
    next();
});

// Rutas
server.use(Rutas);



export default server;