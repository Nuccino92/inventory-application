const express = require("express");
const UpperWear = require("../models/upperWear");

const router = express.Router();

router.get("/", (req, res) => {
  UpperWear.find()
    .then((result) => {
      res.render("category", {
        title: "Upper Wear",
        result: result,
        path: "/upper-wear/create",
        single: "/upper-wear",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/create", (req, res) => {
  res.render("create_upperWear", { title: "Create" });
});

router.post("/", (req, res) => {
  const upperWear = new UpperWear(req.body);
  upperWear
    .save()
    .then((result) => {
      res.redirect("/upper-wear");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  UpperWear.findById(req.params.id)
    .then((result) => {
      res.render("single", {
        result: result,
        title: "Uppear Wear Details",
        single: "/upper-wear",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// delete request step 2;
router.delete("/:id", (req, res) => {
  UpperWear.findByIdAndDelete(req.params.id)
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
