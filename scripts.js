// Function to capitalize the first letter of each word
function capitalizeTitle(title) {
    return title.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

// Function to load schedule from local storage
function loadSchedule() {
    let schedule = JSON.parse(localStorage.getItem('animeSchedule')) || {};
    Object.keys(schedule).forEach(day => {
        let cell = document.getElementById(day);
        if (cell) {
            cell.innerHTML = ''; // Clear cell
            schedule[day].forEach((title, index) => {
                let animeEntry = document.createElement('div');
                animeEntry.textContent = capitalizeTitle(title);
                animeEntry.setAttribute('translate', 'no');
                let removeBtn = document.createElement('span');
                removeBtn.textContent = '❌';
                removeBtn.classList.add('remove-anime');
                removeBtn.onclick = function() { removeAnime(day, index); };
                animeEntry.appendChild(removeBtn);
                cell.appendChild(animeEntry);
            });
        }
    });
}

// Function to save schedule to local storage
function saveSchedule(title, day) {
    let schedule = JSON.parse(localStorage.getItem('animeSchedule')) || {};
    if (!schedule[day]) schedule[day] = [];
    schedule[day].push(capitalizeTitle(title));
    localStorage.setItem('animeSchedule', JSON.stringify(schedule));
}

// Function to update the display without reloading
function updateDisplay(title, day) {
    let cell = document.getElementById(day);
    if (cell) {
        let animeEntry = document.createElement('div');
        animeEntry.textContent = capitalizeTitle(title);
        let removeBtn = document.createElement('span');
        removeBtn.textContent = '❌';
        removeBtn.classList.add('remove-anime');
        removeBtn.onclick = function() { removeAnime(day, cell.childNodes.length - 1); };
        animeEntry.appendChild(removeBtn);
        cell.appendChild(animeEntry);
    }
}

// Function to remove an anime from the schedule
function removeAnime(day, index) {
    let schedule = JSON.parse(localStorage.getItem('animeSchedule'));
    if (schedule && schedule[day]) {
        schedule[day].splice(index, 1);
        localStorage.setItem('animeSchedule', JSON.stringify(schedule));
        loadSchedule(); // Refresh the schedule display
    }
}

// Event listener for form submission
document.getElementById('animeForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let title = document.getElementById('animeTitle').value;
    let day = document.getElementById('animeDay').value;
    saveSchedule(title, day);
    updateDisplay(title, day);
    // Clear form inputs after submission
    document.getElementById('animeTitle').value = '';
    document.getElementById('animeDay').selectedIndex = 0;
});

// Load schedule when the page is loaded
window.onload = loadSchedule;
