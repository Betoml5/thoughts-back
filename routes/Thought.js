const router = require("express").Router();
const controller = require("../controllers/Thought");

router.post("/create", controller.create);
router.get("/:id", controller.findOne);
router.put("/update/:id", controller.update);
router.delete("/delete/:id", controller.delete);
