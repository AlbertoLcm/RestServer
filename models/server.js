const express = require('express');
const cors = require('cors'); //cors protege nuestro servidor de manera superficial

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/Usuarios';

        // Middleweres - Funciones que siempre se ejecutan cuando lanza el servidor
        // Funciones que añaden funcionalidad al web server
        this.middleweres();  
        
        // Rutas de la aplicacion
        this.routes();
    }

    middleweres(){
        // CORS
        this.app.use(cors());

        // Lectura y parseo del body 
        this.app.use(express.json());
        
        // Directorio publico
        this.app.use(express.static('public')); // Los middleweres usa la palabra "use"
    }

    routes(){
        
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
        
    }

    listen(){
        this.app.listen(this.port, () => {
        console.log(`Example app listening at http://localhost:${this.port}`);
        });
    }
    
}

module.exports = Server;