const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({

    id:{
        type:Number,
        require:true,
    },
    producto:{
        type:String,
        require:true,
    },
    codigo:{
        type:String,
    },
    estado:{
        type:Boolean,
        require:true,
    },
    descripcion:{
        type:String,
    },
    precio:{
        type:Number,
        require:true,
    },
    idCategoria:{
        type:String,
        require:true,
    },

})


const ProductModel = mongoose.model("Product",ProductSchema);

module.exports = ProductModel;