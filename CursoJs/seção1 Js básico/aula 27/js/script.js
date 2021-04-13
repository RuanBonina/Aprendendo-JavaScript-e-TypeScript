const numero = Number(prompt('Digite um numero:'));
const numeroTitulo = document.getElementById('numero-titulo');
const num = document.getElementById('num');
const raiz = document.getElementById('raiz');
const inteiro = document.getElementById('inteiro');
const nan = document.getElementById('nan');
const arredondandoBaixo = document.getElementById('arredondando-baixo');
const arredondandoCima = document.getElementById('arredondando-cima');
const duasCasas = document.getElementById('duas-casas');

numeroTitulo.innerHTML = numero;
raiz.innerHTML = numero ** 0.5;
num.innerHTML = numero;
inteiro.innerHTML = (Number.isInteger(numero));
nan.innerHTML = (Number.isNaN(numero));
arredondandoBaixo.innerHTML = Math.floor(numero);
arredondandoCima.innerHTML = Math.ceil(numero);
duasCasas.innerHTML = (numero.toFixed(2));