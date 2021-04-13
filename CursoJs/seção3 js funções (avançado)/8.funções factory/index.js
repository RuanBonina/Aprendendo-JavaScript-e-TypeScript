function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor)
        },

        fala(assunto) {
            return `${this.nome} ${sobrenome} fala ${assunto}.`
        },

        altura: a,
        peso: p,

        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Ruan', 'Bonina', 1.80, 80);
console.log(p1.nome);
console.log(p1.sobrenome);
p1.nomeCompleto = 'Ruan da Silva Bonina'
console.log(p1.nomeCompleto);
console.log(p1.imc);
