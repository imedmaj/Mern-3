

const productController = require("../controllers/controller.product")


module.exports = (app) => {
    app.get("/api/product", productController.findALLProducts);
    app.get("/api/product/:id", productController.findOneSingleProducts);
    app.post("/api/product", productController.createNewProduct);
    app.patch("/api/product/:id", productController.updateExistingProducts);
    app.delete("/api/product/:id", productController.deleteAnExistingProducts);
}