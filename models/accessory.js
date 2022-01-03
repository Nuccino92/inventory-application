const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const accessorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    size: {
      type: String,
    },
    gender: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Accessory = mongoose.model("Accessory", accessorySchema);
module.exports = Accessory;
