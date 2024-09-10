const raceContainer = document.getElementById("raceContainer");
const startRaceBtn = document.getElementById("startRaceBtn");
const resetBtn = document.getElementById("resetBtn");
const results = document.getElementById("results");
let finishedCars = [], raceStartTime, numCars, tracks = [];

const carImages = [
    "./utils/images/car1.png",
    "./utils/images/car2.png",
    "./utils/images/car3.png",
    "./utils/images/car4.png"
];

// Calculate finish line positions dynamically
const updateFinishLinePositions = () => {
    tracks.forEach(({ car, track }) => {
        track.dataset.finishLine = track.offsetWidth - car.offsetWidth;
    });
};

// Start race
startRaceBtn.addEventListener("click", () => {
    numCars = +document.getElementById("numCars").value;

    if (numCars < 2 || numCars > 4) {
        alert("Please enter a number between 2 and 4");
        return;
    }

    document.querySelector(".race-container").style.display = "block";
    raceContainer.innerHTML = results.innerHTML = "";
    finishedCars = [];
    resetBtn.classList.remove("show");
    document.querySelector(".results-container").style.display = "none";
    raceStartTime = Date.now();
    tracks = [];

    for (let i = 0; i < numCars; i++) createTrack(i + 1);

    updateFinishLinePositions();
});

// Create a track for each car
const createTrack = (carNumber) => {
    const track = document.createElement("div");
    track.classList.add("track");

    const car = document.createElement("img");
    car.src = carImages[carNumber - 1];
    car.classList.add("car");
    car.id = `car${carNumber}`;

    // Create finish line
    const finishLine = document.createElement("div");
    finishLine.classList.add("finish-line");

    // Create separator line
    const separatorLine = document.createElement("div");
    separatorLine.classList.add("separator-line");

    track.append(car, finishLine, separatorLine);  
    raceContainer.appendChild(track);
    tracks.push({ car, track });

    startCarMovement(car, carNumber, track);
};


// Start car movement
const startCarMovement = (car, carNumber, track) => {
    let carPosition = 0;
    const minSpeed = 7;  
    const speed = Math.random() * 5 + minSpeed;  

    const interval = setInterval(() => {
        const finishLine = track.offsetWidth - car.offsetWidth;
        carPosition += speed;
        car.style.left = `${carPosition}px`;

        if (carPosition >= finishLine) {
            clearInterval(interval);
            carFinished(carNumber);
        }
    }, 100);
};


// When a car finishes the race
const carFinished = (carNumber) => {
    const finishTime = ((Date.now() - raceStartTime) / 1000).toFixed(2);
    finishedCars.push({ carNumber, finishTime });

    if (finishedCars.length === numCars) displayResults();
};

// Display race results
const displayResults = () => {
    finishedCars.sort((a, b) => a.finishTime - b.finishTime);
    results.innerHTML = "";

    finishedCars.slice(0, 3).forEach((car, index) => {
        const result = document.createElement("div");
        result.textContent = `Car ${car.carNumber} - Place ${index + 1}, Time: ${car.finishTime} seconds`;
        result.classList.add(index === 0 ? "first" : index === 1 ? "second" : "third");
        results.appendChild(result);
    });

    document.querySelector(".results-container").style.display = "flex";
    resetBtn.classList.add("show");
};

// Reset the race
resetBtn.addEventListener("click", () => {
    raceContainer.innerHTML = results.innerHTML = "";
    document.querySelector(".race-container").style.display = "none";
    resetBtn.classList.remove("show");
    document.querySelector(".results-container").style.display = "none";
});

// Update finish line on window resize
window.addEventListener("resize", updateFinishLinePositions);
