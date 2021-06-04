"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
  //Дебагер переменных
  document.addEventListener('keydown', function (e) {
    if (e.key == 'i' || e.key == 'ш') {
      console.log("********************************************");
      console.log("temp1 = ".concat(temp1));
      console.log("temp2 = ".concat(temp2));
      console.log("isAlreadyEqual = ".concat(isAlreadyEqual));
      console.log("currentOperation = ".concat(currentOperation));
      console.log("prevOperation = ".concat(prevOperation));
      console.log("inProcess = ".concat(inProcess));
      console.log("inDoubleProcess = ".concat(inDoubleProcess));
      console.log("********************************************");
    }
  });

  function inputNums(num) {
    resultField.innerHTML += num;
  }

  function resetResultField() {
    resultField.innerHTML = '0';
    actionIndicator.textContent = '';
    temp1 = 0;
    temp2 = 0;
    tempResult = 0;
    currentOperation = undefined;
    isSeparated = false;
    isAlreadyEqual = false;
    inDoubleProcess = false;
    prevOperation = undefined;
  }

  function mathAction(op) {
    if (!inDoubleProcess) {
      temp1 = parseFloat(resultField.textContent);
      isSeparated = false;
      isAlreadyEqual = false;

      if (inDoubleProcess) {
        mathResult(op);
      }
    } else {
      mathResult(prevOperation);
      temp1 = parseFloat(resultField.textContent);
      isAlreadyEqual = false;
      inDoubleProcess = false;
      actionIndicator.innerHTML = currentOperation;
    }
  }

  function mathResult(op) {
    isSeparated = false;
    inDoubleProcess = false;

    if (!isAlreadyEqual) {
      temp2 = parseFloat(resultField.textContent);
      actionIndicator.textContent = '';

      switch (op) {
        case '+':
          tempResult = temp1 + temp2;
          resultField.innerHTML = +tempResult.toFixed(8);
          break;

        case '-':
          tempResult = temp1 - temp2;
          resultField.innerHTML = +tempResult.toFixed(8);
          break;

        case '*':
          tempResult = temp1 * temp2;
          resultField.innerHTML = +tempResult.toFixed(8);
          break;

        case '/':
          if (temp2 == 0) {
            resultField.innerHTML = 'error of 0 divide';
          } else {
            tempResult = temp1 / temp2;
            resultField.innerHTML = +tempResult.toFixed(8);
          }

          break;

        default:
          return false;
      }

      isAlreadyEqual = true;
    } else {
      switch (op) {
        case '+':
          tempResult = tempResult + temp2;
          resultField.innerHTML = +tempResult.toFixed(8);
          break;

        case '-':
          tempResult = tempResult - temp2;
          resultField.innerHTML = +tempResult.toFixed(8);
          break;

        case '*':
          tempResult = tempResult * temp2;
          resultField.innerHTML = +tempResult.toFixed(8);
          break;

        case '/':
          if (temp2 == 0) {
            resultField.innerHTML = 'error of 0 divide';
          } else {
            tempResult = tempResult / temp2;
            resultField.innerHTML = +tempResult.toFixed(8);
          }

          break;

        default:
          return false;
      }
    }
  }

  document.addEventListener('keydown', function (e) {
    var button1 = document.querySelector('[data-value="1"');
    var button2 = document.querySelector('[data-value="2"');
    var button3 = document.querySelector('[data-value="3"');
    var button4 = document.querySelector('[data-value="4"');
    var button5 = document.querySelector('[data-value="5"');
    var button6 = document.querySelector('[data-value="6"');
    var button7 = document.querySelector('[data-value="7"');
    var button8 = document.querySelector('[data-value="8"');
    var button9 = document.querySelector('[data-value="9"');
    var button0 = document.querySelector('[data-value="0"');
    var buttonC = document.querySelector('[data-value="c"]');
    var buttonPlus = document.querySelector('[data-value="+"]');
    var buttonMinus = document.querySelector('[data-value="-"]');
    var buttonMult = document.querySelector('[data-value="*"]');
    var buttonDiv = document.querySelector('[data-value="/"]');
    var buttonEq = document.querySelector('[data-value="="]');
    var buttonDot = document.querySelector('[data-value="."]');

    switch (e.key) {
      case '1':
        button1.click();
        button1.classList.add('active');
        setTimeout(function () {
          button1.classList.remove('active');
        }, 100);
        break;

      case '2':
        button2.click();
        button2.classList.add('active');
        setTimeout(function () {
          button2.classList.remove('active');
        }, 100);
        break;

      case '3':
        button3.click();
        button3.classList.add('active');
        setTimeout(function () {
          button3.classList.remove('active');
        }, 100);
        break;

      case '4':
        button4.click();
        button4.classList.add('active');
        setTimeout(function () {
          button4.classList.remove('active');
        }, 100);
        break;

      case '5':
        button5.click();
        button5.classList.add('active');
        setTimeout(function () {
          button5.classList.remove('active');
        }, 100);
        break;

      case '6':
        button6.click();
        button6.classList.add('active');
        setTimeout(function () {
          button6.classList.remove('active');
        }, 100);
        break;

      case '7':
        button7.click();
        button7.classList.add('active');
        setTimeout(function () {
          button7.classList.remove('active');
        }, 100);
        break;

      case '8':
        button8.click();
        button8.classList.add('active');
        setTimeout(function () {
          button8.classList.remove('active');
        }, 100);
        break;

      case '9':
        button9.click();
        button9.classList.add('active');
        setTimeout(function () {
          button9.classList.remove('active');
        }, 100);
        break;

      case '0':
        button0.click();
        button0.classList.add('active');
        setTimeout(function () {
          button0.classList.remove('active');
        }, 100);
        break;

      case 'Delete':
        buttonC.click();
        buttonC.classList.add('active');
        setTimeout(function () {
          buttonC.classList.remove('active');
        }, 100);
        break;

      case 'Backspace':
        buttonC.click();
        buttonC.classList.add('active');
        setTimeout(function () {
          buttonC.classList.remove('active');
        }, 100);
        break;

      case '+':
        buttonPlus.click();
        buttonPlus.classList.add('active');
        setTimeout(function () {
          console.log(123123213);
          buttonPlus.classList.remove('active');
        }, 100);
        break;

      case '-':
        buttonMinus.click();
        buttonMinus.classList.add('active');
        setTimeout(function () {
          buttonMinus.classList.remove('active');
        }, 100);
        break;

      case '*':
        buttonMult.click();
        buttonMult.classList.add('active');
        setTimeout(function () {
          buttonMult.classList.remove('active');
        }, 100);
        break;

      case '/':
        buttonDiv.click();
        buttonDiv.classList.add('active');
        setTimeout(function () {
          buttonDiv.classList.remove('active');
        }, 100);
        break;

      case '.':
        buttonDot.click();
        buttonDot.classList.add('active');
        setTimeout(function () {
          buttonDot.classList.remove('active');
        }, 100);
        break;

      case 'Enter':
        buttonEq.click();
        buttonEq.classList.add('active');
        setTimeout(function () {
          buttonEq.classList.remove('active');
        }, 100);
        break;

      case ' ':
        buttonEq.click();
        buttonEq.classList.add('active');
        setTimeout(function () {
          buttonEq.classList.remove('active');
        }, 100);
        break;

      default:
        return false;
    }
  }); // HTML элементы

  var resultField = document.querySelector('[data-result');
  var actionIndicator = document.querySelector('.calculator__result-action');
  var btnWrapper = document.querySelector('.calculator__btns-wrapper'); // Переменные

  var currentValue; //

  var currentOperation; //текущее действие при клике на + - / *
  // Флаги

  var isSeparated = false; // если дробная часть

  var inProcess = false; // если мат. операция запущена

  var prevOperation; // темп значение мат операции при повторной

  var inDoubleProcess = false; // если после одной операции запускается другая

  var isAlreadyEqual = false; //если был нажат знак "=" (для повторного нажатия)
  //Временные переменные

  var temp1 = 0;
  var temp2 = 0;
  var tempResult = 0;
  btnWrapper.addEventListener("click", function (e) {
    //Ввод цифр
    if (e.target.classList.contains('calculator__btn') && e.target.hasAttribute('data-num')) {
      if (isAlreadyEqual) {
        resetResultField();
      }

      if (currentOperation && inProcess) {
        resultField.innerHTML = '';
        inputNums(e.target.dataset.value);
        inProcess = false;
        inDoubleProcess = true;
        prevOperation = currentOperation;
      } else {
        if (resultField.textContent === '0') {
          resultField.innerHTML = '';
        }

        inputNums(e.target.dataset.value);
      }
    } //Сброс


    if (e.target.hasAttribute('data-c')) {
      resetResultField();
    } //Дробная часть


    if (e.target.hasAttribute('data-separator') && !isSeparated) {
      inputNums(e.target.dataset.value);
      isSeparated = true;
    } //Клик на математ. действие


    if (e.target.hasAttribute('data-action')) {
      // if (!inDoubleProcess){
      // }	
      currentOperation = e.target.dataset.value;
      actionIndicator.textContent = currentOperation;
      mathAction(currentOperation);
      inProcess = true;
    } //Клик на знак равно


    if (e.target.hasAttribute('data-result')) {
      mathResult(currentOperation);
    }
  });
});