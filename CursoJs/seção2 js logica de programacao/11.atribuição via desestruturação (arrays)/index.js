// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A
// 
// const letras = [b, c, a];
// [a, b, c] = letras;
// 
// console.log(a, b, c);


// ... rest, ... spread
// const numeros = [1000, 2000, 3000, 4000, 5000, 6000];
// const [ um, dois, , quatro, ...resto] = numeros;
// console.log(um, dois, quatro);
// console.log(resto);]


//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

    //console.log(numeros[1][2]);

    //const [,[,cinco]] = numeros;
    //console.log(cinco);

const [lista1, lista2, lista3] = numeros;
console.log(lista2[1]);
