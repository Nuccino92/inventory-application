const express = require("express");
const router = express.Router();
const upperWearController = require("../controllers/upperWearController");

router.get("/", upperWearController.upperWear_index);

router.get("/create", upperWearController.upperWear_create_get);

router.post("/", upperWearController.upperWear_create_post);

router.get("/:id", upperWearController.upperWear_details);

// delete request step 2;
router.delete("/:id", upperWearController.upperWear_delete);

module.exports = router;
