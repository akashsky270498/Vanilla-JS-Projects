const tabButtons = document.querySelectorAll(".tabs button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(button.dataset.tab).classList.add("active");
  });
});

//Clock
const clockDisplay = document.querySelector("#clockDisplay");

function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString("en-US", { hour12: true });
  clockDisplay.textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();

//Stopwatch
const stopWatchDisplay = document.getElementById("stopWatchDisplay");
let stopWatchInterval;
let stopWatchTime = 0;

function formatStopWatch(seconds) {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${hrs}:${mins}:${secs}`;
}

function startStopWatch() {
  if (stopWatchInterval) return;
  stopWatchInterval = setInterval(() => {
    stopWatchTime++;
    stopWatchDisplay.textContent = formatStopWatch(stopWatchTime);
  }, 1000);
}

function pauseStopWatch() {
  clearInterval(stopWatchInterval);
  stopWatchInterval = null;
}

function resetStopWatch() {
  pauseStopWatch();
  stopWatchTime = 0;
  stopWatchDisplay.textContent = "00:00:00";
}

document
  .getElementById("startStopWatch")
  .addEventListener("click", startStopWatch);

document
  .getElementById("pauseStopWatch")
  .addEventListener("click", pauseStopWatch);
document
  .getElementById("resetStopWatch")
  .addEventListener("click", resetStopWatch);
