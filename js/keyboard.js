"use strict";

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
});