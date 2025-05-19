const mongoose = require('mongoose')

const dbConnectionMongo = async() => {

    try {

        await mongoose.connect(process.env.MONGODB_CNN,{
            //useNewUrlParser: true,
            //useUnifiedTopology: true
            
            //useCreateIndex: true,
            //useFindAndModify: false
        })

        console.log('✅ Base de Datos de Mongo online... OK')
        
    } catch (error) {
        console.log(error)
        throw new Error('Error al levantar la BD de MongoDb.')
    }

}

module.exports  = {
    dbConnectionMongo
}
