/*
//                0       1       2
const frutas = ['pera', 'maça', 'uva'];

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

for (let indice in frutas) {  // for in --> lê os índices ou chaves do objeto
    console.log(frutas[indice]);
}
*/

const pessoa = {
    nome: 'Ruan',
    sobrenome: 'Bonina',
    idade: 17
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
};
