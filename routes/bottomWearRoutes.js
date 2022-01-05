const express = require("express");
const router = express.Router();
const bottomWearController = require("../controllers/bottomWearController");

router.get("/", bottomWearController.bottomWear_index);

router.get("/create", bottomWearController.bottomWear_create_get);

router.post("/", bottomWearController.bottomWear_create_post);

router.get("/:id", bottomWearController.bottomWear_details);

// delete request step 2;
router.delete("/:id", bottomWearController.bottomWear_delete);

module.exports = router;
