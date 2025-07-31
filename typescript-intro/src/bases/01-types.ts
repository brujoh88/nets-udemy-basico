export let name = "Gustavo"
export const age: number = 37
export const isValid: boolean = true

name = "Hernan"

export const templateString = `Este es un
string
puede tener '
o tambien "
variables con \$\{\}
boolean ${isValid}`

console.log(templateString)