const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true
  },
  content: {
    type: String,
    required: [true, "Content is required"],
    trim: true
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: [true, "Course is required"]
  },
  order: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

const Module = mongoose.model('Module', moduleSchema);

module.exports = Module;
