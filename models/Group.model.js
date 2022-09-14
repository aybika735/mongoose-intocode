const mongoose = require("mongoose");

const groupSchema = mongoose.Schema({
  name: String,
  users: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  ],
  week: {
    type: Number,
    default: 0,
  },
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
