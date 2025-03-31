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

// Change the order to ensure /search route is defined before /:id
// to avoid search being treated as an ID parameter

// Search notes - must be before the /:id route
router.get('/search', searchNotes);

// Standard CRUD operations
router.get('/', getNotes);
router.post('/', createNote);
router.get('/:id', getNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);

module.exports = router;