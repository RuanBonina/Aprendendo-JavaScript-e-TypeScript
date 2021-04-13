/*
    Operadores lógicos
    && -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar True
    || -> OR -> OU -> Pelo menos uma expressão precisa ser verdadeira para retornar True
    ! -> NOT -> NÃO -> Inverte o valor da expressão
*/
const usuario = 'Luiz';
const senha = '123456';

const vaiLogar = usuario === 'Luiz' && senha === '123456';
console.log(vaiLogar);