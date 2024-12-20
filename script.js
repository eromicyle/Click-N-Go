function redirectToBooking(transport) {
    window.location.href = `booking.html?mode=${transport}`;
}

function getQueryParameter(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name);
}

const mode = getQueryParameter('mode');

const title = document.getElementById('booking-title');
const description = document.getElementById('description');

switch (mode) {
    case 'car':
        title.textContent = "Car";
        description.textContent = "car";
        break;
    case 'bus':
        title.textContent = "Bus";
        description.textContent = "bus";
        break;
    case 'train':
        title.textContent = "Train";
        description.textContent = "train";
        break;
    case 'aeroplane':
        title.textContent = "Aeroplane";
        description.textContent = "flight";
        break;
    // default:
    //     title.textContent = "Error";
    //     description.textContent = "Invalid selection. Please go back and try again.";
}

// const urlParams = new URLSearchParams(window.location.search);
// const transport = urlParams.get('transport');

function submitForm() {
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;

    if (!departure || !destination || !date) {
        alert('Please fill all fields.');
        return;
    }

    // Redirect to the ticket page with the selected details as query parameters
    window.location.href = `ticket.html?departure=${departure}&destination=${destination}&date=${date}`;
}


// ticket JS

(function () {
    // Check if this is the ticket page
    if (document.getElementById('tripDeparture')) {
        // Extract ticket details from URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const departure = urlParams.get('departure');
        const destination = urlParams.get('destination');
        const date = urlParams.get('date');

        // Calculate the trip price
        function calculatePrice(departure, destination) {
            const baseFare = 1000; // Example base fare
            return departure !== destination ? baseFare * 1.5 : baseFare; // Simple pricing logic
        }

        const tripPrice = calculatePrice(departure, destination);

        // Update the HTML placeholders with actual values
        document.getElementById('tripDeparture').textContent = capitalize(departure || "Unknown");
        document.getElementById('tripDestination').textContent = capitalize(destination || "Unknown");
        document.getElementById('tripDate').textContent = date || "Not Selected";
        document.getElementById('invoice').textContent = tripPrice.toFixed(2);
    }

    // Helper function to capitalize the first letter of a string
    function capitalize(str) {
        return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
    }
})();
