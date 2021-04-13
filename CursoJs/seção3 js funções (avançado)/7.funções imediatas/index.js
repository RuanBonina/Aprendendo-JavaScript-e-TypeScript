// IIFE -> Immediately invoked function expression

(function(idade, peso, altura) {
    const sobrenome = 'Bonina';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome('Ruan'));
    }

    falaNome();
    console.log(idade, peso, altura);

})(30, 80, 1.80);
