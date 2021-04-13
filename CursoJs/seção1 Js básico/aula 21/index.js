// Resultado esperado B C A
let varN, varA = 'A', varB = 'B', varC = 'C';

/*
varN = varA;
varA = varB;
varB = varC;
varC = varN;
*/

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);