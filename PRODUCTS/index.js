const express = require("express");
const ProductRoute = require("./src/routes/product");
const app = express();
const port = 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use("/productsRoute", ProductRoute);

app.get("/", (req, res) => {
  res.render("create");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
