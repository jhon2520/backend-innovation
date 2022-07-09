const express = require("express");
const {getCategories,setCategorie} = require("../controllers/categories.controller");



const CategorieRouter = express.Router();


CategorieRouter.get("/",getCategories);
CategorieRouter.post("/new",setCategorie);


module.exports = CategorieRouter;
