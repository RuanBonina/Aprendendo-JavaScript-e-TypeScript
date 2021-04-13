// defineProperty - defineProperties

function Produto(nome, preco, estoque) {

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra chave
        value: estoque, // valor
        writable: false, // pode alterar
        configurable: true // configuravel
    })

    Object.defineProperties(this, {

        nome: {
         enumerable: true, // mostra chave
        value: nome, // valor
        writable: true, // pode alterar
        configurable: true // configuravel
        },

        preco: {
        enumerable: true, // mostra chave
        value: preco, // valor
        writable: true, // pode alterar
        configurable: true // configuravel
        }
    })
}

const p1 = new Produto('Camisa', 20, 3);
p1.estoque = 50000;
console.log(p1);

for (let chave in p1) {
    console.log(chave);
}
