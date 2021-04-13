const nome = ['Ruan', 'Luiz', 'Carlos'];

for (let valor of nome) { // for of --> lê os valores
    console.log(valor);
}

nome.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});

// For clássico - Geralmente com interáveis (arrays ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (array ou strings)