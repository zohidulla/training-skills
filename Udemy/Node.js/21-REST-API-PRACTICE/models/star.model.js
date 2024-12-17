const mongoose = require("mongoose");

const starSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      uniqe: true,
      required: true,
    },
    temperature: {
      type: String,
      require: true,
    },
    massa: {
      type: String,
      require: true,
    },
    diameter: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    planets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Planet" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Star", starSchema);
