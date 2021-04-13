// Reduce

// some todos os números pares (reduce)
// retorne um array com pares (filter)
// retor um array com o triplo dos valores (map)

//               1  2   3   4  5  ....
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce(function(acumulador, valor) {
    if (valor % 2 === 0) {
    acumulador += valor;
    }

    return acumulador;
}, 0);
//console.log(total);


// retorne a pessoa mais velha
const pessoas = [
    { nome: 'Ruan', idade: 17 },
    { nome: 'Maria', idade: 60 },
    { nome: 'Eduardo', idade: 24 },
    { nome: 'Letícia', idade: 43 },
    { nome: 'Rosana', idade: 33 },
    { nome: 'Wallace', idade: 54 },
];

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);

