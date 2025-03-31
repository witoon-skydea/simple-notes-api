const express = require('express');
const router = express.Router();
const {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
  searchNotes
} = require('../controllers/noteController');

router
  .route('/')
  .get(getNotes)
  .post(createNote);

router
  .route('/:id')
  .get(getNote)
  .put(updateNote)
  .delete(deleteNote);

router
  .route('/search')
  .get(searchNotes);

module.exports = router;