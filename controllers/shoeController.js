const Shoe = require("../models/shoe");

const shoe_index = (req, res) => {
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
};

const shoe_create_get = (req, res) => {
  res.render("create_shoe", { title: "Create" });
};

const shoe_create_post = (req, res) => {
  const shoe = new Shoe(req.body);
  shoe
    .save()
    .then((result) => {
      res.redirect("/shoes");
    })
    .catch((err) => {
      console.log(err);
    });
};

const shoe_details = (req, res) => {
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
};

const shoe_delete = (req, res) => {
  Shoe.findByIdAndDelete(req.params.id)
    // delete request step 3:
    .then((result) => {
      // redirect this way because delete request was on front end
      res.json({ redirect: "/shoes" });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  shoe_index,
  shoe_create_get,
  shoe_create_post,
  shoe_details,
  shoe_delete,
};
