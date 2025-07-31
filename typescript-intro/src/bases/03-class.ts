
export class Pokemon {
    
    public get imageUrl() : string {
        return `https://pokemon.com/${this.id}.jgp`
    }
    
    constructor(
        public readonly id: number,
        public name: string,
        //public imageUrl: string
    ){}

    public scream() {
        console.log(`SOY ${this.name.toUpperCase()!!!}`)
    }
    public speak() {
        console.log(`Holaaaaa!!!`)
    }
}

export const charmander = new Pokemon(4, 'Charmander')

/* charmander.id = 23
charmander.name = 'CHARMANDER' */

console.log(charmander)

charmander.scream()
charmander.speak()