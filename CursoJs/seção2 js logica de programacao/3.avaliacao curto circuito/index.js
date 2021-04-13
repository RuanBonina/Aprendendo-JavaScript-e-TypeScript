/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> vai retornar "o valor verdadeiro"

FALSY
*false
0
'' "" ``
null / undefined
NaN
*/


//console.log('Ruan' && 0 && 1);

/*
function falaOi () {
    return 'Oi';
}

let vaiExecutar = 'Ruan';

console.log(vaiExecutar && falaOi());
*/


//console.log(0 || false || null || 'Ruan' || true);

const corUsuario = null;
const corPadrao = corUsuario || 'Preto';

console.log(corPadrao);
