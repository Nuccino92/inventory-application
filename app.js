const express = require("express");
const mongoose = require("mongoose");

const hatRoutes = require("./routes/hatRoutes");
const shoeRoutes = require("./routes/shoeRoutes");
const upperWearRoutes = require("./routes/upperWearRoutes");
const bottomWearRoutes = require("./routes/bottomWearRoutes");

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

app.use("/hats", hatRoutes);
app.use("/shoes", shoeRoutes);
app.use("/upper-wear", upperWearRoutes);
app.use("/bottom-wear", bottomWearRoutes);

app.use((req, res) => {
  res.status(404).render("error", { title: "Error" });
});
