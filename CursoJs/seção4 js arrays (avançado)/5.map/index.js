// Map

// dobre os núneros
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosDobrados = numeros.map(valor => valor * 2);
//console.log(numerosDobrados);


// Para cada Elemento:
// Retorne apenas uma string com nome da pessoa
// remova apenas a chave "nome" do obj
// Adicione uma chave id em cada obj
const pessoas = [
    { nome: 'Ruan', idade: 17 },
    { nome: 'Maria', idade: 60 },
    { nome: 'Eduardo', idade: 24 },
    { nome: 'Letícia', idade: 43 },
    { nome: 'Rosana', idade: 33 },
    { nome: 'Wallace', idade: 54 },
];

const nomes = pessoas.map(obj => obj.nome);
//const idades = pessoas.map(obj => { 
//    delete obj.nome;
//    return obj;
//});
const comIds = pessoas.map(function(obj, indice) {
    const newObj = {...obj };
    newObj.id = indice;
    return newObj;
})

console.log(comIds);