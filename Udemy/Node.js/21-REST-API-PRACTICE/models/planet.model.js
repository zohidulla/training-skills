const mongoose = require("mongoose");

const planetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    distanceToStar: {
      type: String,
      required: true,
    },
    diameter: {
      type: String,
      require: true,
    },
    yearDuration: {
      type: String,
      require: true,
    },
    dayDuration: {
      type: String,
      require: true,
    },
    temperature: {
      type: String,
      require: true,
    },
    sequenceNumber: {
      type: Number,
      require: true,
    },
    satellites: {
      type: Number,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    star: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Star",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Planet", planetSchema);
