const express = require("express");
const Hat = require("../models/hat");
const router = express.Router();

router.get("/", (req, res) => {
  Hat.find()
    .then((result) => {
      res.render("category", {
        title: "Hats",
        result: result,
        path: "/hats/create",
        single: "/hats",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/create", (req, res) => {
  res.render("create_hat", {
    title: "Create",
  });
});

router.post("/", (req, res) => {
  const hat = new Hat(req.body);
  hat
    .save()
    .then((result) => {
      res.redirect("/hats");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  Hat.findById(req.params.id)
    .then((result) => {
      res.render("single", {
        result: result,
        title: "Hat Details",
        single: "/hats",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// delete request step 2;
router.delete("/:id", (req, res) => {
  Hat.findByIdAndDelete(req.params.id)
    // delete request step 3:
    .then((result) => {
      // redirect this way because delete request was on front end
      res.json({ redirect: "/hats" });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/:id", (req, res) => {
  Hat.findByIdAndUpdate(req.params.id, {});
});

module.exports = router;
