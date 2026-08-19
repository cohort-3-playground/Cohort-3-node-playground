const express = require("express");

const app = express();

app.use(express.json());

const PORT = 3000;
let products = [];

// GET Api
app.get("/", (req, res) => {
    res.send(products);
})

// POST Api
app.post("/products", (req, res) => {
    products.push(req.body);
    res.send(req.body);
})

// PUT Api
app.put("/product/:id", (req, res) => {
    const { params, body } = req;
    const { id } = params;

    const updatedProducts = products.map((product) => product.id === id ? { id, ...body } : product);
    products = updatedProducts

    res.send(updatedProducts);
})

// DELETE Api
app.delete("/product/:id", (req, res) => {
    const { id } = req.params;

    const updatedProducts = products.filter((product) => product.id !== id);
    products = updatedProducts;

    res.send(updatedProducts);
})

app.listen(PORT, () => {
    console.log(`Server is  running at PORT: ${PORT}`)
})