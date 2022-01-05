const BottomWear = require("../models/bottomWear");

const bottomWear_index = (req, res) => {
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
};

const bottomWear_create_get = (req, res) => {
  res.render("create_bottomWear", { title: "Create" });
};

const bottomWear_create_post = (req, res) => {
  const bottomWear = new BottomWear(req.body);
  bottomWear
    .save()
    .then((result) => {
      res.redirect("/bottom-wear");
    })
    .catch((err) => {
      console.log(err);
    });
};

const bottomWear_details = (req, res) => {
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
};

const bottomWear_delete = (req, res) => {
  BottomWear.findByIdAndDelete(req.params.id)
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
  bottomWear_index,
  bottomWear_create_get,
  bottomWear_create_post,
  bottomWear_details,
  bottomWear_delete,
};
