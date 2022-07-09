const mongoose = require("mongoose")

const dbConnection = async()=>{

    try {
        
        await mongoose.connect("mongodb+srv://jhon:jhon@cluster0.v5pb1.mongodb.net/innovation?retryWrites=true&w=majority")
        console.log("Db online connected");

    } catch (error) {
        console.log(error);
        throw new Error("No se pudo iniciar la conexión")
    }
}

module.exports = dbConnection;
