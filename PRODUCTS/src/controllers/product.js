const Products = require("../model/product");

const getAll = (req, res) => {
  return res.json({
    msg: "get all products",
    data: Products,
  });
};

const getOne = (req, res) => {
  let productsId = Number(req.params["product_id"]);
  const findproduct = Products.filter((prod) => prod.id === Products.id);

  if (!findproduct[productsId])
    return res.status(500).json({ msg: "data not found" });

  const onedata = Products.filter((prod) => prod.id === productsId);

  return res.json({
    msg: `get product ${productsId}`,
    data: onedata,
  });
};

const creatOne = (req, res) => {
  const bodyData = req.body;

  const newProduct = {
    id: Products.length + 1,
    title: bodyData["title"],
    price: bodyData["price"],
    description: bodyData["description"],
  };

  Products.push(newProduct);

  return res.json({
    msg: "creat one product",
  });
};

const updateOne = (req, res) => {
  let productsId = Number(req.params["product_id"]);
  const bodyData = req.body;

  if (!productsId) return res.status(400).json({ msg: "invalid products id" });

  if (productsId >= Products.length)
    return res.status(400).json({ msg: "product not found" });

  if (!bodyData) return res.status(500).json({ msg: "data not found in body" });
  productsId--;
  if (!Products[productsId])
    return res.status(500).json({ msg: "data not found" });

  if (bodyData["title"]) {
    Products[productsId]["title"] = bodyData["title"];
  }

  if (bodyData["price"]) {
    Products[productsId]["price"] = bodyData["price"];
  }

  if (bodyData["description"]) {
    Products[productsId]["description"] = bodyData["description"];
  }

  return res.json({
    msg: `update one product ${++productsId}`,
    data: bodyData,
  });
};

const deleteOne = (req, res) => {
  let productId = Number(req.params["product_id"]);
  if (!productId) return res.status(400).json({ msg: "invalid products id" });

  if (productId > Products.length)
    return res.status(400).json({ msg: "product not found" });

  productId--;

  delete Products[productId];

  return res.json({
    msg: `Deleted product ${++productId}`,
  });
};

// const deleteOne = (req, res) => {
//   let productsId = Number(req.params["product_id"]);

//   Products[productsId].slice(i, 1);
//   return res.json({
//     msg: `delete one product ${productsId}`,
//   });
// };

module.exports = { getAll, getOne, creatOne, updateOne, deleteOne };
