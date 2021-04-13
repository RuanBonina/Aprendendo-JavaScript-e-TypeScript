// Filter

// retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosFiltrados = numeros.filter(valor => valor > 10);
//console.log(numerosFiltrados);



// retorne as pessoas que tem o nome com 7 letras ou mais
// retorne as pessoas com mais de 50 anos
// retorne as pessoas cujo nome termina com A
const pessoas = [
    { nome: 'Ruan', idade: 17 },
    { nome: 'Maria', idade: 60 },
    { nome: 'Eduardo', idade: 24 },
    { nome: 'Letícia', idade: 43 },
    { nome: 'Rosana', idade: 33 },
    { nome: 'Wallace', idade: 54 },
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 7);

const pessoasMaisVelhas = pessoas.filter(obj => obj.idade > 50);

const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'));

console.log(pessoasComNomeGrande, pessoasMaisVelhas, nomeTerminaComA);
