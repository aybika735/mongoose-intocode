const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
   payment: {
    type: Number,
    default:0
   },
   category: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Category",
    },
 group:{
  type: mongoose.SchemaTypes.ObjectId,
      ref: "Group",
 }
  
});

const User = mongoose.model("User", userSchema);

module.exports = User;