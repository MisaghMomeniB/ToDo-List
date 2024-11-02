// Function to update the current date and time every second
function updateDateTime() {
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: true 
    };
    document.getElementById('current-datetime').innerText = now.toLocaleString('en-US', options);
}