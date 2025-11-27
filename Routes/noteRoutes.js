import express from "express";
import Note from "../models/Note.js";

const router = express.Router();

// CREATE note
router.post("/", async (req, res) => {
   try {
      const note = await Note.create(req.body);
      res.status(201).json(note);
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
});

// GET all notes
router.get("/", async (req, res) => {
   try {
      const notes = await Note.find().sort({ createdAt: -1 });
      res.json(notes);
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
});

// DELETE note
router.delete("/:id", async (req, res) => {
   try {
      await Note.findByIdAndDelete(req.params.id);
      res.json({ message: "Note Deleted" });
   } catch (err) {
      res.status(500).json({ message: err.message });
   }
});

export default router;
