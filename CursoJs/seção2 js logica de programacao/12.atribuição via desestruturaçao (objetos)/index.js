const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

//Atribuição via desestruturaçõa
const {nome: teste, idade, endereco: {rua, numero}} = pessoa;
console.log(teste, idade);
console.log(rua, numero);