 // arguments que sestenta todos os argumentos enviados
// function funcao(a, b, c) {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }
// 
//     console.log(total, a, b, c);
// }
// funcao(1, 2, 3);


// function funcao(a, b = 2, c = 4) {
//      console.log(a + b + c)
//  }
//  funcao(2, 10);


function conta(operador, acumulador, ...numeros) { //  o operador de resto precisa ser o ultimo operador da função.
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta('+', 1, 20, 30, 40, 50)