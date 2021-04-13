const person = {
    firstName: 'Walter',
    lastName: 'White',
    nickName: 'Heisenberg',
    get FullName () {
        const { firstName, lastName, nickName } = this
        return `${firstName} ${lastName} ou ${nickName}`
    },
    printBio () {
        console.log(this)
        const fullName = this.FullName
        console.log(`${fullName} é um personagem`)
    },
}

person.printBio()

const printBio = person.printBio

printBio()