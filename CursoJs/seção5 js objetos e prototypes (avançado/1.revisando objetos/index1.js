/* Objeto literal
const pessoa = {
    nome: 'Ruan',
    sobrenome: 'Bonina'
};

const chave = 'sobrenome';
console.log(pessoa['nome']);
console.log(pessoa[chave]);
*/

/* Objeto construtor
const pessoa1 = new Object();
pessoa1.nome = 'Ruan';
pessoa1.sobrenome = 'Bonina';

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
*/

const pessoa1 = new Object();
pessoa1.nome = 'Ruan';
pessoa1.sobrenome = 'Bonina';
pessoa1.idade = 30

pessoa1.falarNome = function() {
    console.log(`${this.nome} está falando seu nome.`)
};

pessoa1.getdataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

pessoa1.falarNome();
console.log(pessoa1.getdataNascimento());