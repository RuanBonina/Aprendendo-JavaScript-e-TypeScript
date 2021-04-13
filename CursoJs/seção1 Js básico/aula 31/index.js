/*
function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Luiz', 'Miranda', 25);
const pessoa2 = criaPessoa('Ruan', 'Bonina', 17);
const pessoa3 = criaPessoa('Maria', 'Peda', 70);
const pessoa4 = criaPessoa('José', 'Matias', 45);
const pessoa5 = criaPessoa('Lucas', 'Fernando', 23);

console.log(pessoa2.nome, pessoa2.sobrenome);
*/

const pessoa1 = {
    nome: 'Ruan',
    sobrenome: 'Bonina',
    idade: 17,

    fala() {
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();