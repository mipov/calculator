const displayInput = document.querySelector('.display__input');
const displayOperator = document.querySelector('.display__operator');
const displaySum = document.querySelector('.display__sum');
const button = document.querySelectorAll('.button')

const btnOperator = document.querySelectorAll('.button_operator');
const btnNumber = document.querySelectorAll('.button_number');
const btnEqual = document.querySelector('.equal_button');


function make() {
  let str = '';
  button.forEach(
    function(num) {
      num.addEventListener('click', () => {
        str = str + num.textContent;
        console.log(str)
        displayInput.textContent = str;
        if (num.textContent == 'C') {
          displayInput.textContent = '0';
          displaySum.textContent = '';
          displayOperator.textContent = '';
          str = '';
        } else if (
          num.textContent == '+' ||
          num.textContent == '−' ||
          num.textContent == '✕' ||
          num.textContent == '÷') {
          displaySum.textContent = str.slice(0, -1);
          displayOperator.textContent = str.slice(-1)
          displayInput.textContent = '';
          str = '';
        }
      })
    }
  )
}

make();