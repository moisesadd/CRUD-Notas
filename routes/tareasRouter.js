const express = require("express");
const tareasControl = require("../controllers/taskControllers");
const router = express.Router();

router.get("/", tareasControl.getTareas);
router.post("/add", tareasControl.postTareas);
router.put("/update/:id", tareasControl.updateTarea);
router.delete("/delete/:id", tareasControl.deleteTarea);


module.exports = router;