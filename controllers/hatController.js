const Hat = require("../models/hat");

const hat_index = (req, res) => {
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
};

const hat_create_get = (req, res) => {
  res.render("create_hat", {
    title: "Create",
  });
};

const hat_create_post = (req, res) => {
  const hat = new Hat(req.body);
  hat
    .save()
    .then((result) => {
      res.redirect("/hats");
    })
    .catch((err) => {
      console.log(err);
    });
};

const hat_details = (req, res) => {
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
};

const hat_delete = (req, res) => {
  Hat.findByIdAndDelete(req.params.id)
    // delete request step 3:
    .then((result) => {
      // redirect this way because delete request was on front end
      res.json({ redirect: "/hats" });
    })
    .catch((err) => {
      console.log(err);
    });
};

const hat_update_post = () => {
  Hat.findByIdAndUpdate(req.params.id, {});
};

module.exports = {
  hat_index,
  hat_create_get,
  hat_create_post,
  hat_details,
  hat_delete,
  hat_update_post,
};
