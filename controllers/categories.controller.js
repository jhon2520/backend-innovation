const CategorieModel = require("../models/categories.model");
const {response} = require("express");



const getCategories = async(req,res= response)=>{


    try {
        
        const categories = await CategorieModel.find();

        return res.status(200).json({
            ok:true,
            categories
        })
    
    } catch (error) {   

        return res.status(500).json({
            ok:false,
            msg:`error ${error}`
        })

    }


} 

const setCategorie = async(req,res = response)=>{

    const categorie = new CategorieModel(req.body);
    const savedCategorie = await categorie.save();

//    console.log(savedCategorie);

    return res.status(200).json({
        ok:true,
        savedCategorie
    })

}

module.exports = {
    getCategories,
    setCategorie
}