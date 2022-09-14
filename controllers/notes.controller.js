const Note = require("../models/Note.model");

const User = require("../models/User.model");

module.exports.notescontroller = {
  createNote: async function (req, res) {
    try {
      await Note.create({
        name: req.body.name,
        user: req.body.user,
      });
      res.json("Заметка добавлена");
    } catch (error) {
      console.log(error.toString());
    }
  },

  deleteNoteById: async function (req, res) {
    try {
      const note = await Note.findByIdAndRemove(req.params.id);
      res.json("Заметка удалена");
    } catch (error) {
      console.log(error.toString());
    }
  },
  changeNoteById: async function (req, res) {
    try {
      const note = await Note.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        user: req.body.user,
      });
      res.json("Заметка изменена");
    } catch (error) {
      console.log(error.toString());
    }
  },
  // Посмотреть все заметки
  getNotes: async function (req, res) {
    try {
      const notes = await Note.find().populate("user");
      res.json(notes);
    } catch (error) {
      console.log(error.toString());
    }
  },

  // просматривать все заметки определенного студента
  getNotesByUser: async function (req, res) {
    try {
      const notes = await Note.find({ user: req.params.id }).populate("user");
      res.json(notes);
    } catch (error) {
      console.log(error.toString());
    }
  },
};
