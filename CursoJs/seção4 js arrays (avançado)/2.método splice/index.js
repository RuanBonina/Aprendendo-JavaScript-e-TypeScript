//               -5       -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['maria', 'joão', 'eduardo', 'gabriel', 'julia'];

// nomes.splice(indice, delete, elem1, lem2, elem3)

// push
nomes.splice(nomes.length, 0, 'luiz');


// unshift
//nomes.splice(0, 0, 'ruan');


// pop
//const removidos = nomes.splice(4, 1);


// shift
//const removidos = nomes.splice(0, 1);

console.log(nomes);
//console.log(nomes, removidos);
