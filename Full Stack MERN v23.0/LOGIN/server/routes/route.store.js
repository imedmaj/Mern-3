

const StoreController = require("../controllers/controller.store")


module.exports = (app) => {
    app.get("/api/Store", StoreController.findALLStores);
    app.get("/api/Store/:id", StoreController.findOneSingleStores);
    app.post("/api/Store", StoreController.createNewStore);
    app.patch("/api/Store/:id", StoreController.updateExistingStores);
    app.delete("/api/Store/:id", StoreController.deleteAnExistingStores);
}