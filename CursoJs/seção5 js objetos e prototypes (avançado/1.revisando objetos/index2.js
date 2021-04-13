// Factory functions / Constructor functions / Classes

/*
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Ruan', 'Bonina');
console.log(p1.nomeCompleto);
*/

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Ruan', 'Miranda');
p1.nome = 'Luiz';
const p2 = new Pessoa('Maria', 'Bonina');

console.log(p1);
console.log(p2);