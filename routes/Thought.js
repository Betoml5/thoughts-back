const router = require("express").Router();
const controller = require("../controllers/Thought");

router.post("/create", controller.create);
router.get("/delete", controller.delete);


