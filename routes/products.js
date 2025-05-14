import express, { application } from "express";

const router = express.Router();

let products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Phone", price: 800 }
];

// Get all products
router.get("/", (req, res) => res.json(products));

// Get product by ID
router.get("/:id", (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    if (product)
        res.json(product);
    else
        res.status(404).json({ message: "Product not found" });
});

// Add new product
router.post("/", (req, res) => {
    const newProduct = {
        id: Date.now(),
        name: req.body.name,
        price: req.body.price
    };
    products.push(newProduct);
    res.json(newProduct);
});

// Update product by ID
router.put("/:id", (req, res) => {
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === productId);

    const updatedProduct = {
        id: productId,
        name: req.body.name || products[productIndex].name,
        price: req.body.price || products[productIndex].price
    };
    products[productIndex] = updatedProduct;
    res.json(updatedProduct);
});

// Delete product by ID
router.delete("/:id", (req, res) => {
    const productId = parseInt(req.params.id);
    products = products.filter(p => p.id !== productId);
    res.status(204).send();
});

export default router;