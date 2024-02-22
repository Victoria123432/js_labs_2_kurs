function Find_nums() {
    temp = document.getElementById('input1').value;
    var splitItems = temp.split('')

    var firstVal = splitItems[0];
    var lastVal = splitItems[0];

    for (var i = 1; i < splitItems.length; i++) {
        if (splitItems[i] < firstVal) {
            firstVal = splitItems[i];
        }
        if (splitItems[i] > lastVal) {
            lastVal = splitItems[i];
        }
    }
    alert('firstVal: ' + firstVal);
    alert('lastVal: ' + lastVal);
    // console.log('firstVal: ' + firstVal);
    // console.log('lastVal: ' + lastVal);
  }

//   alert( null === undefined ); // false
//   alert( null == undefined ); // true
//   alert( null > 0 );  // (1) false
// alert( null == 0 ); // (2) false
// alert( null >= 0 ); // (3) true
// alert( undefined > 0 ); // false (1)
// alert( undefined < 0 ); // false (2)
// alert( undefined == 0 ); // false (3)

function Check_nums(){
    temp = document.getElementById('input2').value;
    if(temp>=1 && temp<=10){
        alert(true);
    }
    else{
        alert(false);
    }
}

function Check_tf(){
    temp = document.getElementById('input3').value;
    if(temp == 'true'){
        alert( !true ); // false
    }
    else{
        alert( !false ); // true
    }
    
}

function convertGrade() {
    var grade = parseInt(document.getElementById('input4').value);
    var message = "";
    if (grade >= 90 && grade <= 100) {
        message = "Відмінно";
    } else if (grade >= 75 && grade < 90) {
        message = "Добре";
    } else if (grade >= 50 && grade < 75) {
        message = "Задовільно";
    } else if (grade >= 0 && grade < 50) {
        message = "Незадовільно";
    } else {
        message = "Неправильна оцінка";
    }
    alert(message);
}

function getSeason() {
    var month = parseInt(document.getElementById('input5').value);
    var season = (month >= 3 && month <= 5) ? "Весна" :
                 (month >= 6 && month <= 8) ? "Літо" :
                 (month >= 9 && month <= 11) ? "Осінь" :
                 "Зима";
    alert("Сезон: " + season);
}
