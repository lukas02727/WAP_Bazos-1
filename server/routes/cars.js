var express = require("express");
var router = express.Router();

const carsController = require("../controllers/cars");

router.get("/", carsController.getAllCars);

//localhost:3000/cats/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", carsController.getCarById);

router.delete("/:id", carsController.deleteCar);

router.put("/:id", carsController.updateCar);

router.post("/", carsController.createCar);

module.exports = router;
