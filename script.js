let displayValue = '';

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (displayValue === '' && operator !== '-') return;
  const lastChar = displayValue.slice(-1);
  if (['+', '-', '*', '/'].includes(lastChar)) return;
  displayValue += operator;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function deleteDigit() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    displayValue = eval(displayValue).toString();
  } catch (e) {
    displayValue = 'Error';
  }
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = displayValue || '0';
}
