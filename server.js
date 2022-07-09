
const dbConnection = require("./DB/dbConfig") 
const app = require("./app")
require("dotenv").config();


const initApp = ()=>{
    try {
        
        dbConnection();
        app.listen( process.env.PORT,()=>{
            console.log(`Listen on ${ process.env.PORT}`);
        })
        
    } catch (error) {
        console.log(error);
        process.exit(0)
    }
}


initApp();