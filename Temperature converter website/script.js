function convertTemp() {
  const input = document.getElementById('inputTemp').value.trim();
  const from = document.getElementById('fromUnit').value;
  const to = document.getElementById('toUnit').value;
  const resultBox = document.getElementById('result');

  if (isNaN(input) || input === '') {
    resultBox.innerText = '❌ Please enter a valid number';
    return;
  }

  const temp = parseFloat(input);
  let converted;
  let tempInCelsius;
  if (from === 'C') tempInCelsius = temp;
  else if (from === 'F') tempInCelsius = (temp - 32) * 5 / 9;
  else if (from === 'K') tempInCelsius = temp - 273.15;
  if (to === 'C') converted = tempInCelsius;
  else if (to === 'F') converted = (tempInCelsius * 9 / 5) + 32;
  else if (to === 'K') converted = tempInCelsius + 273.15;
  resultBox.innerText = `✅ Result: ${converted.toFixed(2)} °${to}`;
}