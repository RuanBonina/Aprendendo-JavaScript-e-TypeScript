// defineProperty - Getters e Setters

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra chave
        configurable: true, // configuravel
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Error')
            }
            estoquePrivado = valor;
        }
    });
}

function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome =valor;
        }
    };
}

// const p1 = new Produto('Camisa', 20, 3);
// console.log(p1);
// p1.estoque = 'q';
// console.log(p1.estoque);

const p2 = criaProduto('Camiseta');
console.log(p2);
