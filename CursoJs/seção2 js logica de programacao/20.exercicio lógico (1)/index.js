// Escreva uma função que recebe 2 números e retorne o maior

/*
const num1 = 2;
const num2 = 2;

function numeroMaior() {
    if (num1 > num2) {
        console.log(`${num1} é o maior!`);
    } else if (num1 < num2) {
        console.log(`${num2} é o maior!`);
    } else {
        console.log(`Os valores são iguais!`);
    }
}

numeroMaior();
*/


/*
function max(x, y) {
    if (x > y) return x;
    return y;
}

console.log(max(10, 2));
*/

let max = (x, y) => x > y ? x : y;

console.log(max(10, 2));