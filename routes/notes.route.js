const { Router } = require("express");
const {
  notescontroller,
} = require("../controllers/notes.controller");
const router = Router();

router.post("/notes", notescontroller.createNote);

router.delete("/notes/:id", notescontroller.deleteNoteById);

router.patch("/notes/:id", notescontroller.changeNoteById);
router.get("/notes", notescontroller.getNotes);
router.get("/notes/user/:id", notescontroller.getNotesByUser);


module.exports = router;