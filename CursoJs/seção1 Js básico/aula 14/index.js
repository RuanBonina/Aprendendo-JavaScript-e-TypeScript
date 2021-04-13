const nome = 'Ruan', sobrenome = 'Bonina', idade = 17;
const peso = 70, altura = 1.82;
let imc, anoNascimento;
imc = peso / (altura * altura);
anoNascimento = 2020 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`Nasceu em ${anoNascimento}`);