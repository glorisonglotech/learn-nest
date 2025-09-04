const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    tutor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: false,
    },
    modules: [{ type: mongoose.Schema.Types.ObjectId, ref: "module" }],
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
