// Funções construtoras crião objetos
// A diferença de uma construtora para uma fabrica é q: a fábrica retorna direto o objeto, já a construtora cria e reotrna objetos
// Construtora -> Pessoa (new)

// class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome; // this retorna Pessoa
//         this.sobrenome = sobrenome;
//     }
// }

function Pessoa(nome, sobrenome) {

    // atributos ou métodos privados
    const ID = 123456;
    const metodoInterno = function() {

    };
    

    // atributos ou métodos públicos
    this.nome = nome; // this retorna Pessoa
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um metodo');
    };
}



const p1 = new Pessoa('Ruan', 'Bonina'); // retornando o objeto criado com os determinados parâmetros.
const p2 = new Pessoa('Luiz', 'Otavio');

p2.metodo();
