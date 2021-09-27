var state = 0;
var operators = ["+", "-", "/", "*", "s", "%"];
var chosenOperator = "";
var firstNumber = 0;
var secondNumber = 0;
document.onkeypress = function (e) {
    var first = document.getElementById('first');
    var second = document.getElementById('second');
    var result = document.getElementById('result');
    var display = document.getElementById('display');
    e = e || window.event;
    if(/\d/.test(e.key)) {
        if(state == 0 && first.innerHTML.length < 14) {
            first.innerHTML += e.key;
            display.classList.remove("result");
            display.classList.add("first");
        }
        if(state == 1 && second.innerHTML.length < 14) {
            document.getElementById('second').innerHTML += e.key;
            display.classList.remove("first");
            display.classList.add("second");
        }
    } else if( operators.indexOf(e.key) > -1) {
        if(e.key == "s") {
            state = 2;
            chosenOperator = e.key;
        } else {
            state = 1;
            chosenOperator = e.key;
        }
    } else if((state == 1 || state == 2) && (e.key == "=" || e.key == "Enter")) {
        state = 0;
        firstNumber = parseInt(first.innerHTML, 10);
        secondNumber = parseInt(second.innerHTML, 10);
        if(chosenOperator == "+") {
            resultCalc = firstNumber + secondNumber;
        } else if(chosenOperator == "-") {
            resultCalc = firstNumber - secondNumber;
        } else if(chosenOperator == "*") {
            resultCalc = firstNumber * secondNumber;
        } else if(chosenOperator == "/") {
            resultCalc = firstNumber / secondNumber;
        } else if(chosenOperator == "%") {
            resultCalc = firstNumber % secondNumber;
        } else if(chosenOperator == "s") {
            resultCalc = Math.sqrt(firstNumber);
        } else if(chosenOperator == "MOD") {
            resultCalc = firstNumber % secondNumber;
        }else {
            resultCalc = 0;
        }
        chosenOperator = "";
        first.innerHTML = "";
        second.innerHTML = "";
        result.innerHTML = resultCalc;
        display.classList.remove("second");
        display.classList.remove("first");
        display.classList.add("result");
    }
    
}

