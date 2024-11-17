

const loginController = require("../controllers/controller.login")



module.exports = (app) => {
    app.post("/api/login/", loginController.Login );
    app.get("/api/regist/", loginController.findALLRegist );
    app.get("/api/regist/:id", loginController.findOneSinglelogin );
    app.post("/api/regist", loginController.createNewRegist );
    app.patch("/api/regist/:id", loginController.updateExistingRegist );
    app.delete("/api/regist/:id", loginController.deleteAnExistingRegist);
    // app.get("/api/operator/", loginController.findALLoperators);
    // app.get("/api/operator/:id", loginController.findOneSingleoperators);
    // app.post("/api/operator", loginController.createNewoperator);
    // app.patch("/api/operator/:id",loginController.updateExistingoperators);
    // app.delete("/api/operator/:id", loginController.deleteAnExistingoperators);

}