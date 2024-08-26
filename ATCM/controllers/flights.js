let flights = [];

// Add a new flight
function addFlight(req, res, next) {
    const newFlight = req.body;
    flights.push(newFlight);
    res.json({ message: 'Flight added successfully' });
}

// Get all flights
function getAllFlights(req, res) {
    res.json(flights);
}

// Get a specific flight by ID
function getFlightById(req, res) {
    const flightId = req.params.id;
    const flight = flights.find(f => f.id === flightId);
    if (!flight) {
        return res.status(404).json({ error: 'Flight not found' });
    }
    res.json(flight);
}

// Update a specific flight by ID
function updateFlight(req, res) {
    const flightId = req.params.id;
    const updatedFlight = req.body;
    const index = flights.findIndex(f => f.id === flightId);
    if (index === -1) {
        return res.status(404).json({ error: 'Flight not found' });
    }
    flights[index] = updatedFlight;
    res.json({ message: 'Flight updated successfully' });
}

// Delete a specific flight by ID
function deleteFlight(req, res) {
    const flightId = req.params.id;
    const index = flights.findIndex(f => f.id === flightId);
    if (index === -1) {
        return res.status(404).json({ error: 'Flight not found' });
    }
    flights.splice(index, 1);
    res.json({ message: 'Flight deleted successfully' });
}

module.exports = {
    addFlight,
    getAllFlights,
    getFlightById,
    updateFlight,
    deleteFlight
};
