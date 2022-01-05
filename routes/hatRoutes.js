const express = require("express");
const router = express.Router();
const hatController = require("../controllers/hatController");

router.get("/", hatController.hat_index);

router.get("/create", hatController.hat_create_get);

router.post("/", hatController.hat_create_post);

router.get("/:id", hatController.hat_details);

// delete request step 2;
router.delete("/:id", hatController.hat_delete);

router.post("/:id", hatController.hat_update_post);

module.exports = router;
