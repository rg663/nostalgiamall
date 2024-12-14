/* Functions to travel to a specific decade */
function travelToDecade(decade) {
    // Hide all decades
    document.querySelectorAll('.decade').forEach(element => {
        element.classList.add('hidden');
    });
    // Show the selected decade
    document.getElementById(decade).classList.remove('hidden');
}