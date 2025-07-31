import axios from "axios"

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
    
    public async getMoves() {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
        return data.moves
    }
}

export const charmander = new Pokemon(4, 'Charmander')

/* charmander.id = 23
charmander.name = 'CHARMANDER' */

console.log(charmander)

charmander.scream()
charmander.speak()
//console.log(charmander.getMoves())
charmander.getMoves()