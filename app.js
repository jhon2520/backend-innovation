const express = require("express")
const CategorieRouter = require("./routes/categories.route");
const ProductRouter = require("./routes/products.route");


const app = express();

app.use(express.static("public"))
app.use(express.json())

app.use("/api/categories",CategorieRouter)
app.use("/api/products",ProductRouter)



module.exports = app;


