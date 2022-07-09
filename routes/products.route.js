const express = require("express");
const {setProduct,getProducts,getProduct,deleteProduct,updateProduct} = require("../controllers/product.controller")


const ProductRouter = express.Router();

ProductRouter.get("/",getProducts);
ProductRouter.get("/:id",getProduct);
ProductRouter.post("/new",setProduct);
ProductRouter.put("/:id",updateProduct);
ProductRouter.delete("/:id",deleteProduct);

module.exports = ProductRouter;