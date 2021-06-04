"use strict";

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