const cors = require('cors')
const express = require("express");
const controller = require("./controllers.js");


const router = express.Router();


// --------------- API REST CRUD

router.get("/clientes", cors(), controller.readClientes); // Read All
router.get("/clientes/:id", cors(), controller.readCliente); // Read
router.delete("/clientes/:id", cors(), controller.deleteCliente); // Delete
router.put("/clientes/:id", cors(), controller.updateCliente); // Update
router.post("/clientes", cors(), controller.createCliente); // Create

router.get("/articulos", cors(), controller.readArticulos); // Read All
router.get("/articulos/:id", cors(), controller.readArticulo); // Read
router.delete("/articulos/:id", cors(), controller.deleteArticulo); // Delete
router.put("/articulos/:id", cors(), controller.updateArticulo); // Update
router.post("/articulos", cors(), controller.createArticulo); // Create

// --------------- 

router.get("/herramienta", cors(), controller.readHerramientas); // Read All
router.get("/herramienta/:id", cors(), controller.readHerramienta); // Read
router.delete("/herramienta/:id", cors(), controller.deleteHerramienta); // Delete
router.put("/herramienta/:id", cors(), controller.updateHerramienta); // Update
router.post("/herramienta", cors(), controller.createHerramienta); // Create

router.get("/arreglo", cors(), controller.readArreglos); // Read All
router.get("/arreglo/:id", cors(), controller.readArreglos); // Read
router.delete("/arreglo/:id", cors(), controller.deleteArreglo); // Delete
router.put("/arreglo/:id", cors(), controller.updateArreglo); // Update
router.post("/arreglo", cors(), controller.createArreglo); // Create

module.exports = router;