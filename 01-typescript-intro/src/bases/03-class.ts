import axios from "axios"
import type { Move, PokeapiResponse } from "../interfaces/pokeapi-response.interface"

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
    
    public async getMoves(): Promise<Move[]> {
        const { data } = await axios.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
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