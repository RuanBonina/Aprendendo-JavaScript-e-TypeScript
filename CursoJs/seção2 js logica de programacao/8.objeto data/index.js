
//const tresHoras = 60 * 60 * 3 * 1000;
//const umDia = 60 * 60 * 24 * 1000;
//const data = new Date(0 + tresHoras - umDia); // 01/01/1970 Timestamp unix ou época unix

//const data = new Date(2019, 3, 20, 15, 14, 27); // a, M, d, h, m, s, ms.

/*
const data = new Date('2019-04-20 20:20:59');
console.log('Dia', data.getDate())
console.log('Mês', data.getMonth() + 1) // Mês começa no 0
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('ms', data.getMilliseconds())
console.log('Dia semana', data.getDay()) // 0 - domingo, 6 - sabádo
*/

//console.log(data.toString());

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda (data.getDate());
    const mes = zeroAEsquerda (data.getMonth() + 1);
    const ano = zeroAEsquerda (data.getFullYear());
    const hora = zeroAEsquerda (data.getHours());
    const min = zeroAEsquerda (data.getMinutes());
    const seg = zeroAEsquerda (data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasi = formataData(data);
console.log(dataBrasi);