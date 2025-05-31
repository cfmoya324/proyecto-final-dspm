const express = require('express')
const cors = require('cors')

const { dbConnectionMongo } = require('../database/MongoConnection');


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        this.pathsMongo = {

            //Ajusto la url para la autorizacion por login
            ciudades: '/api/ciudades',
            menu_sitio: '/api/menu_sitio',
            paises:'/api/paises',
            personajes:'/api/personajes',
            platos:'/api/platos',
            sitios:'/api/sitios',
            tags:'/api/tags',
            usuarios:'/api/usuarios',
            visita:'/api/visita',
        }

        //Aqui me conecto a MongoDB
        this.conectarBDMongo();


        //Middlewares
        this.middlewares();


        //Routes
        this.routes();

    }



    async conectarBDMongo(){
        await dbConnectionMongo();
    }

    routes() {
        this.app.use(this.pathsMongo.ciudades, require('../routes/ciudad.route'));
        this.app.use(this.pathsMongo.menu_sitio, require('../routes/menu.route'));
        this.app.use(this.pathsMongo.paises, require('../routes/pais.route'));
        this.app.use(this.pathsMongo.personajes, require('../routes/personaje.route'));
        this.app.use(this.pathsMongo.platos, require('../routes/plato.route'));
        this.app.use(this.pathsMongo.sitios, require('../routes/sitio.route'));
        this.app.use(this.pathsMongo.tags, require('../routes/tags.route'));
        this.app.use(this.pathsMongo.usuarios, require('../routes/usuario.route'));
        this.app.use(this.pathsMongo.visita, require('../routes/visita.route'));
    }



    middlewares() {
        //CORS
        //Evitar errores por Cors Domain Access
        //Usado para evitar errores.
        this.app.use(cors());

        //Lectura y Parseo del body
        //JSON        
        //JSON (JavaScript Object Notation)
        //es un formato ligero de intercambio de datos.
        //JSON es de fácil lectura y escritura para los usuarios.
        //JSON es fácil de analizar y generar por parte de las máquinas.
        //JSON se basa en un subconjunto del lenguaje de programación JavaScript,
        //Estándar ECMA-262 3a Edición - Diciembre de 1999.
        this.app.use(express.json());


        //Directorio publico
        this.app.use(express.static('public'));


    }
    

    listen() {
        this.app.listen(this.port, () => {
            console.log('✅ Servidor corriendo en puerto', this.port);
        });
    }

}



module.exports = Server;
