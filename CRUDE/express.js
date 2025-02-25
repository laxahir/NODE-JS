const express = require("express");
const path = require("path")

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");


const products = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        title: "Products title 1",
        description: "this products is a watch, rating 5 star",
        price: "$ 45.23",
    },
    {
        id: 2,
        image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-madebymath-90946.jpg&fm=jpg",
        title: "Products title 2",
        description: "this products is a watch, rating 5 star",
        price: "$ 45.23",
    }, {
        id: 3,
        image: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
        title: "Products title 3",
        description: "this products is a watch, rating 5 star",
        price: "$ 45.23",
    }, {
        id: 4,
        image: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtMzYyLTAxYS1tb2NrdXAuanBn.jpg",
        title: "Products title 4",
        description: "this products is a watch, rating 5 star",
        price: "$ 45.23",
    }, {
        id: 5,
        image: "https://cdn3.pixelcut.app/7/10/ai_background_1_5b79cd8ea3_1ea97b2c5a.jpg",
        title: "Products title 5",
        description: "this products is a watch, rating 5 star",
        price: "$ 45.23",
    }, {
        id: 6,
        image: "https://cdn.pixabay.com/photo/2021/02/18/09/26/coca-cola-6026672_640.jpg",
        title: "Products title 6",
        description: "this products is a watch, rating 5 star",
        price: "$ 45.23",
    }, {
        id: 7,
        image: "https://5.imimg.com/data5/ANDROID/Default/2023/7/326598386/TM/JD/NK/189033354/product-jpeg-500x500.jpg",
        title: "Products title 7",
        description: "this products is a watch, rating 5 star",
        price: "$ 45.23",
    }, {
        id: 8,
        image: "https://images.pexels.com/photos/279906/pexels-photo-279906.jpeg?cs=srgb&dl=pexels-pixabay-279906.jpg&fm=jpg",
        title: "Products title 8",
        description: "this products is a watch, rating 5 star",
        price: "$ 45.23",
    }, {
        id: 9,
        image: "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?cs=srgb&dl=pexels-eprism-studio-108171-335257.jpg&fm=jpg",
        title: "Products title 9",
        description: "this products is a watch, rating 5 star",
        price: "$ 45.23",
    }, {
        id: 10,
        image: "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
        title: "Products title 10",
        description: "this products is a watch, rating 5 star",
        price: "$ 45.23",
    },
]


app.get("/", (req, res) => {
    res.render("products", { products: products });

})

app.get("/create-products", (req, res) => {
    res.render("form");

})

app.get("/update/:itemsId", (req, res) => {
    const itemId = req.params["itemsId"];
    const item = products.find((data) => {
        return data.id == itemId
    })

    res.render("update", { item: item });

})

app.post("/submit-product", (req, res) => {
    // Collecting data from the form
    const { product_image, product_name, product_description, product_price } = req.body;

    // Generating a new product object
    const newProduct = {
        id: products.length + 1,  // Simple id assignment, you can modify this to use a better approach (like UUID)
        image: product_image,
        title: product_name,
        description: product_description,
        price: `$ ${parseFloat(product_price).toFixed(2)}`  // Ensuring price has 2 decimals
    };

    // Adding the new product to the products array
    products.push(newProduct);

    // Redirecting the user back to the products list page
    res.redirect("/");
});








app.listen(8000);