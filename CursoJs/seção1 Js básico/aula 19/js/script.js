// Objeto window
//alert('Com a nossa mensagem.');
//window.confirm('Deseja realmente apagar?');
let num1 = window.prompt('Digite seu número:');
let num2 = window.prompt('Digite outro número:');

num1 = parseFloat(num1);
num2 = Number(num2);
let resultado = num1 + num2;

alert(`O resultado foi ${resultado}`);