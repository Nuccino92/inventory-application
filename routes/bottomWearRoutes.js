const express = require("express");
const BottomWear = require("../models/bottomWear");

const router = express.Router();

router.get("/", (req, res) => {
  BottomWear.find()
    .then((result) => {
      res.render("category", {
        title: "Bottom Wear",
        result: result,
        path: "/bottom-wear/create",
        single: "/bottom-wear",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/create", (req, res) => {
  res.render("create_bottomWear", { title: "Create" });
});

router.post("/", (req, res) => {
  const bottomWear = new BottomWear(req.body);
  bottomWear
    .save()
    .then((result) => {
      res.redirect("/bottom-wear");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  BottomWear.findById(req.params.id)
    .then((result) => {
      res.render("single", {
        result: result,
        title: "Bottom Wear Details",
        single: "/bottom-wear",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// delete request step 2;
router.delete("/:id", (req, res) => {
  BottomWear.findByIdAndDelete(req.params.id)
    // delete request step 3:
    .then((result) => {
      // redirect this way because delete request was on front end
      res.json({ redirect: "/upper-wear" });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
