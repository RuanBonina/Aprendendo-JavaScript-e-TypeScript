function retornaFuncao(nome) {
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao('Ruan');
const funcao2 = retornaFuncao('Luiz');
console.log(funcao);
console.log(funcao2);

console.log(funcao(), funcao2());
