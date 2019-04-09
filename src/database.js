import mongoose from 'mongoose'
const {databasemongo} = require('./keys');

export  async function connect(){
    try{
        await mongoose.connect(databasemongo.uri,{
            useNewUrlParser: true,          
        })
        console.log('conectado a la BD')
    }catch(e){
        console.log('algo va mal')
        console.log(e)
    }

}



// const mongoose = require('mongoose');
// const {databasemongo} = require('./keys');

// export function connect(){
// mongoose.connect(databasemongo.uri,{
//     useCreateIndex : true,
//     useNewUrlParser: true,
//     useFindAndModify : false,
    
// }).then(db=>console.log('Db is connected')).catch(err => console.error(err));
// }