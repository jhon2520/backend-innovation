const ProductModel = require("../models/product.model");
const {response} = require("express");

const setProduct = async(req,res=response)=>{

    const product = new ProductModel(req.body);
    const savedProduct = await product.save();


    
    return res.status(200).json({
        ok:true,
        savedProduct
    })
}


const getProducts = async(req,res=response)=>{


    const products = await ProductModel.find();

    return res.status(200).json({
        ok:true,
        products
    })

}


const getProduct = async(req,res=response)=>{

    const productId = req.params.id;

    const productFound = await ProductModel.find({id:productId})

  //  console.log(productFound);

    if(productFound.length === 0){
        return res.status(404).json({
            ok:false,
            msg:"No existe el producto"
        })
    }

    return res.status(200).json({
        ok:true,
        productFound
    })
}


const deleteProduct = async(req,res = response)=>{

    const productId = req.params.id;
    const productFound = await ProductModel.findOne({id:productId})

    if(!productFound){
        return res.status(404).json({
            ok:false,
            msg:"No existe el producto"
        })
    }

    productFound.remove();

    return res.status(200).json({
        ok:true,
        productId
    })

}


const updateProduct = async(req,res = response)=>{

    const {id} = req.params;

    const productFound = await ProductModel.findOne({id:id});
    
    if(!productFound){
        return res.status(404).json({
            ok:false,
            msg:"No existe el producto"
        })
    }

    Object.assign(productFound,req.body);
    const updatedProduct = await productFound.save();

    return res.status(200).json({
        ok:true,
        updatedProduct
    })


}


module.exports ={
    setProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct
}