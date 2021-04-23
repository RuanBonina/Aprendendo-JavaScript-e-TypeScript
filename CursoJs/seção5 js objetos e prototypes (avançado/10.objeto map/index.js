const pessoas = [
    { id: 3, nome: 'Ruan' },
    { id: 2, nome: 'Luiz' },
    { id: 1, nome: 'Helena' },
];

// const pessoasOrganizadas = {};
// for (const pessoa of pessoas) {
//     const { id } = pessoa;
//     pessoasOrganizadas[id] = { ...pessoa };
// }

const pessoasOrganizadas = new Map;
for (const pessoa of pessoas) {
    const { id } = pessoa;
    pessoasOrganizadas.set(id, { ...pessoa });
}

console.log(pessoasOrganizadas);