const express = require("express");
const mongoose = require("mongoose");
const Hat = require("./models/hat");
const Shoe = require("./models/shoe");
const UpperWear = require("./models/upperWear");
const BottomWear = require("./models/bottomWear");
require("dotenv").config();

const app = express();

// connect to mongo db
const dbuRI = process.env.MONGOOSE_URI;

// connect to mongodb with mongoose
mongoose
  .connect(dbuRI, { useNewUrlParser: true, useUnifiedTopology: true })
  // when connected to mongodb then listen to server
  .then(() => app.listen(3000))
  .catch((err) => console.log(err));

//register the view engine - ejs
app.set("view engine", "ejs");

//middleware for static files
app.use(express.static("public"));
// accepting for data, (using req.body)
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

app.get("/hats", (req, res) => {
  Hat.find()
    .then((result) => {
      res.render("category", {
        title: "Hats",
        result: result,
        path: "/hats/create",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/hats/create", (req, res) => {
  res.render("create_hat", {
    title: "Create",
  });
});

app.post("/hats", (req, res) => {
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

app.get("/shoes", (req, res) => {
  Shoe.find()
    .then((result) => {
      res.render("category", {
        title: "Shoes",
        result: result,
        path: "/shoes/create",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/shoes/create", (req, res) => {
  res.render("create_shoe", { title: "Create" });
});

app.post("/shoes", (req, res) => {
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

app.get("/upper-wear", (req, res) => {
  UpperWear.find()
    .then((result) => {
      res.render("category", {
        title: "Upper Wear",
        result: result,
        path: "/upper-wear/create",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/upper-wear/create", (req, res) => {
  res.render("create_upperWear", { title: "Create" });
});

app.post("/upperWears", (req, res) => {
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

app.get("/bottom-wear", (req, res) => {
  BottomWear.find()
    .then((result) => {
      res.render("category", {
        title: "Bottom Wear",
        result: result,
        path: "/bottom-wear/create",
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/bottom-wear/create", (req, res) => {
  res.render("create_bottomWear", { title: "Create" });
});

app.post("/bottomWears", (req, res) => {
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

app.use((req, res) => {
  res.status(404).render("error", { title: "Error" });
});
