function Find_nums() {
    temp = document.getElementById('input1').value;
    var splitItems = temp.split(',');
    for (let i = 0; i < splitItems.length; i++) {
        splitItems[i] = splitItems[i].trim();
    }

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

    // console.log(firstVal > lastVal )
    // console.log(firstVal < lastVal )
    // console.log(firstVal == lastVal )

    // if(firstVal < lastVal){
    //     console.log('перше число менше за друге')
    // }
    // else if(firstVal == lastVal){
    //     console.log('числа рівні')

    // }
    // else if (firstVal > lastVal){
    //     console.log('неправильно')
    // }

  }

  var user1 = {
    name: 'Vika',
    age: 19
  }

  var user2 = {
    name: 'Dian',
    age: 19
  }
console.log(user1.name == user2.name )
console.log(user1.age == user2.age )
console.log(user1 == user2)
    
//   alert( null === undefined ); // false
//   alert( null == undefined ); // true

function Check_nums(){
    let temp = document.getElementById('input2').value;
    let result = false;
    if(temp>=1 && temp<=10){
        result = !result;
    }
   alert(result); 
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
