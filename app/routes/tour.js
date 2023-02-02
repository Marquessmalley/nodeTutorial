const express = require('express');
const {
  getTours,
  getTour,
  createTour,
  updateTour,
  deleteTour,
} = require('../controllers/tourController');
const router = express.Router();

// Get all tours
router.get('/tours', getTours);

// Get individual tour by id
router.get('/tours/:id', getTour);

// Crete new tour
router.post('/tours', createTour);

// Update Tour by id
router.patch('/tours/:id', updateTour);

// Delete Tour by id
router.delete('/tours/:id', deleteTour);

module.exports = router;
