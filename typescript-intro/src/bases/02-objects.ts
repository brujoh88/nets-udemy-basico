export const pokemonIds = [1,20,30,46]

/* export const pokemon = {
    id: 1,
    name: 'Bulbasaur'
} */

interface Pokemon {
    id: number,
    name: string
    age?:number
}

export const bulbasaur:Pokemon = {
    id: 1,
    name: 'Bulbasaur'
}

export const charmander: Pokemon = {
    id: 4,
    name: 'Charmander'
}