// valor por referência
const nomes = ['ruan', 'eduardo', 'joana'];
//const nomes = new Array('ruan', 'eduardo', 'joana')
const novo = nomes; // tudo q fizer em novo reflete em nomes
// const novo = [...nomes]; // tudo q fizer em novo NÃO reflete em nomes
nomes[2] = 'joão';
// delete nomes[2]; //deleta o conteúdo do item 2
const removido = nomes.pop(); // deleta o ultimo item do array
nomes.push('roberta'); //adiciona o item no final
nomes.unshift('wallace'); // adiciona no começo


console.log(nomes);
console.log(nomes, removido);
console.log(nomes.length); // Atributo length mostra a quantidade de 