const displayInput = document.querySelector('.display__input');
const displayOperator = document.querySelector('.display__operator');
const displaySum = document.querySelector('.display__sum');

const button = document.querySelectorAll('.button')
const btnEqual = document.querySelector('.equal-button');

button.forEach(
  function (num) {
    num.addEventListener('click', () => {
      displayInput.textContent == '0' ?
        displayInput.textContent = num.textContent :
        displayInput.textContent = displayInput.textContent + num.textContent;
      if (num.textContent == 'C') {
        displayInput.textContent = '0';
        displaySum.textContent = '';
        displayOperator.textContent = '';
      } else if (
        num.textContent == '+' ||
        num.textContent == '−' ||
        num.textContent == '✕' ||
        num.textContent == '÷') {
        displaySum.textContent = displayInput.textContent.slice(0, -1);
        displayOperator.textContent = num.textContent.slice(-1)
        displayInput.textContent = '';
      }
    })
  }
)
btnEqual.addEventListener('click', () => {
  switch (displayOperator.textContent) {
    case '+':
      sum = +displaySum.textContent + +displayInput.textContent;
      break;
    case '−':
      sum = +displaySum.textContent - +displayInput.textContent;
      break;
    case '✕':
      sum = +displaySum.textContent * +displayInput.textContent;
      break;
    case '÷':
      sum = +displaySum.textContent / +displayInput.textContent;
      break;
  }
  displayInput.textContent = Math.floor(sum * 100) / 100;
  displaySum.textContent = Math.floor(sum * 100) / 100;
  displayOperator.textContent = ''
})