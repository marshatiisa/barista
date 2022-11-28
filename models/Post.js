const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  order: {
    type: String,
    required: true,
  },
   milk: {
    type: String,
    require: true,
  },
   temp: {
    type: String,
    require: true,
  },
   size: {
    type: Number,
    required: true,
  }, 
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  completed: {
    type: String,
    deafult: 'false',
  },
});

module.exports = mongoose.model("Post", PostSchema);
