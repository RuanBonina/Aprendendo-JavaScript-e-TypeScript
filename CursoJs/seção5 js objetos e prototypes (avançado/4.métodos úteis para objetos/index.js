/*
Object.values
Object.entries
Object.getOnwPropertyDescriptor(o, prop)
Object.assingn(des, nay)
... (spread)

// já vimos
Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propiedades)
Object.defineProperty (define uma propriedade)
*/


const produto = { nome: 'Produto', preco: 1.8 };
const caneca = {
    ...produto,
    material: 'porcelana'
};

caneca.nome = 'Luiz Otávio';
caneca.preco = 2.5;
console.log(produto);
console.log(caneca);