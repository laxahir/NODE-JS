const express = require("express");
const product = require("../controllers/product");

const route = express.Router();

route.get("/", product.getAll);
route.get("/:product_id", product.getOne);
route.post("/submit-product", product.creatOne);
route.put("/:product_id", product.updateOne);
route.delete("/:product_id", product.deleteOne);

module.exports = route;
