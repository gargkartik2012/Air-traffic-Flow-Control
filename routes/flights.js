const express = require('express');
const router = express.Router();
const flightsController = require('../controllers/flights');
const { authenticate } = require('../middleware/auth');

// POST /flights - Add a new flight (requires authentication)
router.post('/', authenticate, flightsController.addFlight);

// GET /flights - Get all flights
router.get('/', flightsController.getAllFlights);

// GET /flights/:id - Get a specific flight
router.get('/:id', flightsController.getFlightById);

// PUT /flights/:id - Update a specific flight
router.put('/:id', authenticate, flightsController.updateFlight);

// DELETE /flights/:id - Delete a specific flight
router.delete('/:id', authenticate, flightsController.deleteFlight);

module.exports = router;
