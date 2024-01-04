import { dbank } from '../../declarations/dbank'

window.addEventListener('load',  async function() {
  const currentAmount =  await dbank.checkBalance();
  document.getElementById('value').innerText = currentAmount.toFixed(2);


});

document.querySelector('form').addEventListener('submit', async function(event) {
  event.preventDefault()

  const button = document.querySelector('#submit-btn');

  const inputAmount = parseFloat(document.getElementById('input-amount').value);
  const outputAmount = parseFloat(document.getElementById('withdrawal-amount').value);
  button.setAttribute('disabled', true);

  if (document.querySelector('#input-amount').value.length!=0) {
    await dbank.topUp(inputAmount);
  }
  if (document.querySelector('#withdrawal-amount').value.length!=0) {
    await dbank.withdraw(outputAmount);
  }
  await update();
  document.getElementById('input-amount').value = '';
  document.getElementById('withdrawal-amount').value = '';
  button.removeAttribute('disabled');
})

async function update() {
  const currentAmount =  await dbank.checkBalance();
  document.getElementById('value').innerText = currentAmount.toFixed(2);
}