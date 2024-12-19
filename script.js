const display = document.getElementById('display');
let currentValue = '';
let operator = '';
let previousValue = '';

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const key = button.getAttribute('data-key');
    handleInput(key);
  });
});

function handleInput(key) {
  if (!isNaN(key) || key === '.') {
    currentValue += key;
    display.textContent = currentValue;
  } else if (['+', '-', '*', '/'].includes(key)) {
    operator = key;
    previousValue = currentValue;
    currentValue = '';
  } else if (key === '=') {
    if (operator && previousValue && currentValue) {
      currentValue = eval(`${previousValue} ${operator} ${currentValue}`);
      display.textContent = currentValue;
      operator = '';
      previousValue = '';
    }
  } else if (key === 'C') {
    currentValue = '';
    operator = '';
    previousValue = '';
    display.textContent = '0';
  } else if (key === '%') {
    if (currentValue) {
      currentValue = (parseFloat(currentValue) / 100).toString();
      display.textContent = currentValue;
    }
  }
}

