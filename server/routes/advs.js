var express = require("express");
var router = express.Router();

const advsController = require("../controllers/advs");

router.get("/", advsController.getAllAdvs);

//localhost:3000/cats/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", advsController.getAdvById);

router.delete("/:id", advsController.deleteAdv);

router.put("/:id", advsController.updateAdv);

router.post("/", advsController.createAdv);

module.exports = router;
