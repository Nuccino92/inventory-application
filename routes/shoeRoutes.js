const express = require("express");
const router = express.Router();
const shoeController = require("../controllers/shoeController");

router.get("/", shoeController.shoe_index);

router.get("/create", shoeController.shoe_create_get);

router.post("/", shoeController.shoe_create_post);

router.get("/:id", shoeController.shoe_details);

// delete request step 2;
router.delete("/:id", shoeController.shoe_delete);

module.exports = router;
