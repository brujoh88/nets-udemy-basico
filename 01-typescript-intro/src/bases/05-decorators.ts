class OtroPokemon {
    constructor(
        public readonly id: number,
        public name: string
    ){}

    public scream() {
        console.log(`NO QUIERO!`)
    }

    public speak() {
        console.log(`NO HABLO!`)
    }
}

const MyDecorator = () =>{
    return (target: Function )=>{
        return OtroPokemon
    }
}

@MyDecorator()

export class Pokemon{    
    constructor(
        public readonly id: number,
        public name: string
    ){}

    public scream() {
        console.log(`${this.name.toUpperCase()}!`)
    }

    public speak() {
        console.log(`${this.name}, ${this.name}!`)
    }
}

export const charmander3 = new Pokemon(4,'Charmander')

charmander3.scream()
charmander3.speak()