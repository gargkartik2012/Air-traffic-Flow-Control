// Function to fetch all flights from the backend
async function fetchFlights() {
    try {
        const response = await fetch('/flights');
        if (!response.ok) {
            throw new Error('Failed to fetch flights');
        }
        const flights = await response.json();
        displayFlights(flights);
    } catch (error) {
        console.error(error);
        alert('Failed to fetch flights. Please try again later.');
    }
}

// Function to display flights in the table
function displayFlights(flights) {
    const flightList = document.getElementById('flightList');
    flightList.innerHTML = '';
    flights.forEach(flight => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${flight.number}</td>
            <td>${flight.destination}</td>
            <td>
                <button onclick="editFlight('${flight.id}')">Edit</button>
                <button onclick="deleteFlight('${flight.id}')">Delete</button>
            </td>
        `;
        flightList.appendChild(row);
    });
}

// Function to add a new flight
async function addFlight() {
    const flightNumber = document.getElementById('flightNumber').value;
    const destination = document.getElementById('destination').value;
    if (!flightNumber || !destination) {
        alert('Please enter flight number and destination');
        return;
    }
    try {
        const response = await fetch('/flights', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ number: flightNumber, destination })
        });
        if (!response.ok) {
            throw new Error('Failed to add flight');
        }
        fetchFlights();
    } catch (error) {
        console.error(error);
        alert('Failed to add flight. Please try again later.');
    }
}

// Function to delete a flight
async function deleteFlight(flightId) {
    const confirmDelete = confirm('Are you sure you want to delete this flight?');
    if (!confirmDelete) {
        return;
    }
    try {
        const response = await fetch(`/flights/${flightId}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete flight');
        }
        fetchFlights();
    } catch (error) {
        console.error(error);
        alert('Failed to delete flight. Please try again later.');
    }
}

// Fetch flights when the page loads
fetchFlights();


