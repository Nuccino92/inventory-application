const express = require("express");
const Shoe = require("../models/shoe");
const router = express.Router();

router.get("/", (req, res) => {
  Shoe.find()
    .then((result) => {
      res.render("category", {
        title: "Shoes",
        result: result,
        path: "/shoes/create",
        single: "/shoes",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/create", (req, res) => {
  res.render("create_shoe", { title: "Create" });
});

router.post("/", (req, res) => {
  const shoe = new Shoe(req.body);
  shoe
    .save()
    .then((result) => {
      res.redirect("/shoes");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  Shoe.findById(req.params.id)
    .then((result) => {
      res.render("single", {
        result: result,
        title: "Shoe Details",
        single: "/shoes",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// delete request step 2;
router.delete("/:id", (req, res) => {
  Shoe.findByIdAndDelete(req.params.id)
    // delete request step 3:
    .then((result) => {
      // redirect this way because delete request was on front end
      res.json({ redirect: "/shoes" });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
