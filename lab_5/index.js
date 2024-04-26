// task_1

var lamp = document.getElementById("bulbImg");
const inputs = document.querySelectorAll("input");

function lampToggle() {
  lamp.classList.toggle("lamp-on");  
  updateLampImage();
  
}

setTimeout(lampToggle, 10000);

function updateLampImage() {
  const selectedInput = document.querySelector(
    'input[name="lamp_type"]:checked'
  );
  let lampCode;
  if (lamp.classList.contains("lamp-on")) {
    lampCode = selectedInput.getAttribute("code_on");
  } else {
    lampCode = selectedInput.getAttribute("code");
  }
  lamp.src = lampCode;
}

function lampBrightness() {
  if (lamp.classList.contains("lamp-on")) {
    let brightness = prompt("Введіть значення яскравості ( від 0.1 до 1 )");
    if (brightness > 1) {
      brightness = 1;
    }
    if (brightness < 0) {
      brightness = 0.1;
    }
    lamp.style.filter = `drop-shadow(0 0 1vw rgba(240,216,39, ${brightness}))`;
  } else {
    alert("Увімкніть лампу для того щоб вибрати яскравість");
  }
}

inputs.forEach((input) => {
  input.addEventListener("change", function (event) {
    updateLampImage();
  });
});

//task_2

let currentLightIndex = 0;
let lightIntervals = [3000, 2000, 4000, 2000, 3000]; 
let lights = ["red", "yellow", "green", "yellow", "red"];
let intervalId;

function updateStatus(text) {
  const statusElement = document.getElementById("status");
    statusElement.textContent = "Статус: " + text;
}

function startTrafficLight() {
  clearInterval(intervalId);
  currentLightIndex = 0;
  changeLight();
}

function changeLight() {
  resetLights();
  let color = document.getElementById(lights[currentLightIndex]);
  if (color) {
    if (lights[currentLightIndex] === "yellow" && currentLightIndex === 3) {
      color.classList.add("blink");
    } else {
      color.classList.add("active");
    }
  }

  let statusText = "Світло: " + lights[currentLightIndex];
  updateStatus(statusText);

  intervalId = setTimeout(() => {
    currentLightIndex = (currentLightIndex + 1) % lights.length;
    changeLight();
  }, lightIntervals[currentLightIndex]);
}

function stopTrafficLight() {
  clearInterval(intervalId);
  resetLights();
  updateStatus("Вимкнено");
}

function nextLight() {
  clearInterval(intervalId);
  currentLightIndex = (currentLightIndex + 1) % lights.length;
  changeLight();
}

function resetLights() {
  lights.forEach((light) => {
    document.getElementById(light).classList.remove("active", "blink");
  });
}

function changeInterval() {
  let newTimes = prompt(
    "Введіть час для червоного, жовтого, зеленого світла (в мс, через кому)"
  );

  if (newTimes) {
    let timesArray = newTimes.split(",").map(Number);
    if (timesArray.length === 3 && timesArray.every((time) => !isNaN(time))) {
      timesArray.push(timesArray[0], timesArray[1]);

      lightIntervals = timesArray;
      updateStatus(
        "Час оновлено. Актуальні інтервали: " + lightIntervals.join(", ")
      );
    } else {
      updateStatus("Помилка: Введіть три числа, розділені комами.");
    }
  } else {
    updateStatus("Оновлення скасовано: жодних даних не введено.");
  }
}
