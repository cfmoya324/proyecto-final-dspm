const jwt = require('jsonwebtoken');

const generarJWT = (uid = '') => {
    return new Promise( (resolve, reject) => {

        const payload = { uid };

        jwt.sign(payload, process.env.PRIVATE_KEY_JWT, {
            expiresIn: '4h'
        }, (err, token) => {


            if (err) {
                console.log(err);
                reject('No se pudo generar el token')

            }
            else {
                resolve(token);
            }

        })

    })
}

module.exports = {
    generarJWT
}