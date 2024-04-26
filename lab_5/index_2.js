// task_3
let countdownTimer;
var isRunning = false;
function updateClock() {
  const now = new Date();

  const day = now.getDate().toString().padStart(2, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0"); 
  const year = now.getFullYear();
  const dateString = `${day}/${month}/${year}`;

  document.getElementById("date").textContent = dateString;


  let hours = now.getHours();
  const meridiem = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = hours.toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;

  
  document.getElementById("clock").textContent = timeString;
}

function setEndTime() {
  const endTime = new Date(document.getElementById("endTime").value);
  countdownTimer = setInterval(function () {
    updateCountdown(endTime);
  }, 1000);
}
function updateCountdown(endTime) {
  isRunning = true; 
  setTime.classList.add("disabled");
  const now = new Date();
  const timeDifference = endTime - now;
  if (timeDifference <= 0) {
    clearInterval(countdownTimer);
    document.getElementById("countdown").textContent = "Countdown Finished";
    isRunning = false;
    setTime.classList.remove("disabled");
    return;
  }

  const seconds = Math.floor((timeDifference / 1000) % 60);
  const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
  const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  const countdownString = `${days} days ${hours
    .toString()
    .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
  document.getElementById("countdown").textContent =
    "Countdown Timer: " + countdownString;
}

function refreshPage() {
  window.location.reload();
}


updateClock();
setInterval(updateClock, 1000);
