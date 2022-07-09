const port = 5000
const dbConnection = require("./DB/dbConfig") 
const app = require("./app")


const initApp = ()=>{
    try {
        
        dbConnection();
        app.listen(port,()=>{
            console.log(`Listen on ${port}`);
        })
        
    } catch (error) {
        console.log(error);
        process.exit(0)
    }
}


initApp();