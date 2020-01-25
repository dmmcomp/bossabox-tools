const express = require('express');
const routes = express.Router();
const ToolController = require('./controllers/ToolControoler');

routes.get("/", ToolController.show);
routes.post("/", ToolController.create);
routes.delete("/:id", ToolController.remove);


module.exports = routes;