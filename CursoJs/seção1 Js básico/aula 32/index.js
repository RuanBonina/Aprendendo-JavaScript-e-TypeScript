/* Primitivos (imutaveis) - string, number, boolean, undefined, 
null (bigint, symbol) - valores copiados */

/*
let a = 'A';
let b = a; // 'b' copia o valor de 'a'
console.log(a, b);

a = 'C';   // O valor de 'a' pode ser alterado, sem interferir no valor de 'b'
console.log(a, b);
*/



//Referência (mutável) - array, object, function - passados por referência


let a = [1, 2, 3];
let b = [...a];  // 'b' passa a representar os mesmos valores de a     
let c = b;       // 'c' passa a se referir aos mesmos locais da memoria q 'b'
console.log(a, b); // Mostram os mesmos valores

a.push(4);       // O valor de 'a' pode ser alterado sem interferir em 'b'
console.log(a, b);

b.pop();         // o valor de 'b' não depende do valor de 'a'
console.log(a, b);

a.push('Ruan');
console.log(a, c); // os valores de c e b são dependentes um do outro indepente do de a

