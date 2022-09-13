const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  name: String,
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },

  
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;