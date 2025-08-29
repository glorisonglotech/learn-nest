const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name:{
        type:String,
        required:true
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },
    password: {
      type: String,
      required: true,
    },
    role:{
        type:String,
        enum: ["student","tutor","admin"],
        default:['student']
    }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
