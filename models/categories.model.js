const mongoose = require("mongoose");

const CategorieSchema = mongoose.Schema({

    id:{
        type:String,
        required:true
    },
    nombre:{
        type:String,
        required:true
    },
    tipo:{
        type:String,
        required:true
    }

})

const CategorieModel = mongoose.model("Categorie",CategorieSchema);

module.exports = CategorieModel;