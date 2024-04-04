function task1() {
  console.log("-----------------------Завдання 1");
  let sum = 0;
  let i = 0;
  while (i < 51) {
    sum += i;
    i++;
  }
  console.log(sum);
  document.getElementById("task1Res").textContent = sum;
}

function task2() {
  var n = document.getElementById("input1").value;
  let factorial = 1;
  for (let i = n; i > 0; i--) {
    factorial *= i;
  }
  console.log("-----------------------Завдання 2");
  console.log("Факторіал числа " + n + ": " + factorial);

  document.getElementById("task2Res").textContent = factorial;
}

function task3() {
  var monthNumber = parseInt(document.getElementById("input3").value);
  var monthName;

  console.log("-----------------------Завдання 3");

  switch (monthNumber) {
    case 1:
      monthName = "Січень";
      
    case 2:
      monthName = "Лютий";
      break;
    case 3:
      monthName = "Березень";
      break;
    case 4:
      monthName = "Квітень";
      break;
    case 5:
      monthName = "Травень";
      break;
    case 6:
      monthName = "Червень";
      break;
    case 7:
      monthName = "Липень";
      break;
    case 8:
      monthName = "Серпень";
      break;
    case 9:
      monthName = "Вересень";
      break;
    case 10:
      monthName = "Жовтень";
      break;
    case 11:
      monthName = "Листопад";
      break;
    case 12:
      monthName = "Грудень";
      break;
    default:
      monthName = "Введено невірний номер місяця";
  }

  console.log("Місяць: " + monthName);
  document.getElementById("task3Res").textContent = monthName;
}

function task4() {
  var val = document.getElementById("input4").value;
  val = val.trim();
  var arr = val.split(",");
  var sum = 0;

  for (let i = 0; i < arr.length; i++) {
    var el = parseInt(arr[i]);
    if (isEven(el) && isNumber(el)) sum += el;
  }

  function isEven(number) {
    return number % 2 === 0;
  }

  function isNumber(element) {
    return typeof element === "number" && !isNaN(element);
  }

  console.log("-----------------------Завдання 4");
  console.log("Сума парних чисел: " + sum);

  document.getElementById("task4Res").textContent = sum;
}

var task5 = (text) => {
  console.log("-----------------------Завдання 5");
  var vowels = text.match(/[аеєиіоaeiou]/gi); // g - глобальний пошук, i - нечутливий до регістру
  if (vowels !== null) {
    console.log("Рядок: " + text);
    console.log("Голосних букв: " + vowels.length);
  } else {
    console.log("Голосних букв не знайдено");
  }

  document.getElementById("task5Res").textContent = vowels.length;
};

var task6 = (base, exponent) => {
  var base = parseInt(base);
  var exponent = parseInt(exponent);
  var result = base ** exponent;
  console.log("-----------------------Завдання 6");
  console.log("Число " + base + " у " + exponent + " степені = " + result);

  document.getElementById("task6Res").textContent = "Результат: " + result;
};
