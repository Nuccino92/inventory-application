const UpperWear = require("../models/upperWear");

const upperWear_index = (req, res) => {
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
};

const upperWear_create_get = (req, res) => {
  res.render("create_upperWear", { title: "Create" });
};

const upperWear_create_post = (req, res) => {
  const upperWear = new UpperWear(req.body);
  upperWear
    .save()
    .then((result) => {
      res.redirect("/upper-wear");
    })
    .catch((err) => {
      console.log(err);
    });
};

const upperWear_details = (req, res) => {
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
};

const upperWear_delete = (req, res) => {
  UpperWear.findByIdAndDelete(req.params.id)
    // delete request step 3:
    .then((result) => {
      // redirect this way because delete request was on front end
      res.json({ redirect: "/upper-wear" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  upperWear_index,
  upperWear_create_get,
  upperWear_create_post,
  upperWear_details,
  upperWear_delete,
};
