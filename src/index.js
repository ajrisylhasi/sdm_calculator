var state = 0;
var operators = ["+", "-", "/", "*", "s", "%", "MOD"];
var chosenOperator = "";
var firstNumber = 0;
var secondNumber = 0;
var addChar = function (e) {
    var first = document.getElementById('first');
    var second = document.getElementById('second');
    var result = document.getElementById('result');
    var display = document.getElementById('display');
    e = e || window.event;
    if(e == "c") {
        state = 0;
        firstNumber = parseInt(first.innerHTML, 10);
        secondNumber = parseInt(second.innerHTML, 10);
        first.innerHTML = "";
        second.innerHTML = "";
        result.innerHTML = "";
        display.classList.remove("result");
        display.classList.remove("second");
        display.classList.add("first");
    } else if(/\d/.test(e) || e == ".") {
        if(state == 0 && first.innerHTML.length < 14) {
            if(result.innerHTML!="") {
                result.innerHTML = "";
            }
            first.innerHTML += e;
            display.classList.remove("result");
            display.classList.add("first");
        }
        if(state == 1 && second.innerHTML.length < 14) {
            document.getElementById('second').innerHTML += e;
            display.classList.remove("first");
            display.classList.remove("result");
            display.classList.add("second");
        }
    } else if( operators.indexOf(e) > -1) {
        if(e == "s") {
            state = 2;
            chosenOperator = e;
        } else {
            state = 1;
            chosenOperator = e;
        }
    } else if((state == 1 || state == 2) && (e == "=" || e == "Enter")) {
        state = 0;
        firstNumber = parseFloat(first.innerHTML, 10);
        secondNumber = parseFloat(second.innerHTML, 10);
        if(chosenOperator == "+") {
            resultCalc = firstNumber + secondNumber;
            resultCalc = resultCalc.toString();
        } else if(chosenOperator == "-") {
            resultCalc = firstNumber - secondNumber;
            resultCalc = resultCalc.toString();
        } else if(chosenOperator == "*") {
            resultCalc = firstNumber * secondNumber;
            resultCalc = resultCalc.toString();
        } else if(chosenOperator == "/") {
            resultCalc = firstNumber / secondNumber;
            resultCalc = resultCalc.toString();
        } else if(chosenOperator == "%") {
            resultCalc = firstNumber/secondNumber*100;
            resultCalc = resultCalc.toString() + "%";
        } else if(chosenOperator == "s") {
            resultCalc = Math.sqrt(firstNumber);
            resultCalc = "√" + first.innerHTML + "=" + resultCalc.toString();
        } else if(chosenOperator == "MOD") {
            resultCalc = firstNumber % secondNumber;
            resultCalc = resultCalc.toString();
        }else {
            resultCalc = 0;
        }
        chosenOperator = "";
        first.innerHTML = "";
        second.innerHTML = "";
        result.innerHTML = resultCalc;
        first.innerHTML = resultCalc
        firstNumber = resultCalc;
        display.classList.remove("second");
        display.classList.remove("first");
        display.classList.add("result");
    }
}
document.onkeypress = function (e) {
    addChar(e.key);
}