const { response, request } = require('express')
const Sitio = require("../models/sitio.model");
const { body } = require('express-validator');


const sitioGet = async (req, res = response) => {

    try {
        const listaSitios = await Sitio.find().lean();

        res.json({
            ok: true,
            data: listaSitios
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador',
            err: error
        })

    }
}

const heroeIdGet = async (req, res = response) => {

    const { id } = req.params;

    try {

        const unHeroe = await Heroes.findByPk(id);

        if (!unHeroe) {
            return res.status(404).json({
                ok: false,
                msg: 'No existe un heroe con el id: ' + id
            })
        }

        res.json({
            ok: true,
            data: unHeroe
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el Administrador',
            err: error
        })

    }

    /*
    const query = req.query;

    //Desestructuracion de argumentos
    const { q, nombre = 'No name', apikey, page=1, limit=10} = req.query;

    //res.send('Hello World')
    res.json({
        //ok:true,
        msg:'get API - Controller',
        query,
        q,
        nombre,
        apikey,
        page,
        limit
    })

      */
}

const heroesComoGet = async(req = request, res = response) => {

    const { termino } = req.params;

    try {
        const [results,metadata] = await bdmysql.query(
            "SELECT nombre,bio" +
            " FROM heroes" +
            " WHERE nombre like '%" + termino + "%'" +
            " ORDER BY nombre"
        );

        res.json({ok:true,
            data: results,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ok:false,
            msg: 'Hable con el Administrador',
            err: error

        });
    }
};


const sitioPost = async (req, res = response) => {

    try {

        console.log(req.body);
    
        const nueva = await Sitio.create(req.body);

        res.json({ok:true,
            mensaje:'Heroe Creado',
            data:nueva
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ok:false,
            msg: 'Hable con el Administrador',
            err: error
        })
    }
}


const sitioPut = async (req, res = response) => {

    try {
        console.log(req.body)

        const actualizada = await Sitio.findByIdAndUpdate(req.body._id, req.body, { new: true });

        res.json({ok:true,
                msg:"Heroe actualizado",
                data: actualizada});


    } catch (error) {
        console.log(error);
        res.status(500).json({ok:false,
            msg: 'Hable con el Administrador',
            err: error
        })

    }

}

const sitioDelete = async (req, res = response) => {

    try {
        console.log(req.body)

        await Sitio.findByIdAndDelete(req.body);

        res.json({ok:true,
            msj:"Heroe Borrado.."
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ok:false,
            msg: 'Hable con el Administrador',
            err: error
        })


    }
}



module.exports = {
    sitioGet,
    sitioPost,
    sitioPut,
    sitioDelete
}