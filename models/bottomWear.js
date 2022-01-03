const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bottomWearSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const BottomWear = mongoose.model("BottomWear", bottomWearSchema);
module.exports = BottomWear;
