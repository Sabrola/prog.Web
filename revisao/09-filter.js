const numeros = [10, 19, 3, -4, 13, 11, 15, 0, -1]
const frutas = ['Laranja', 'Abacaxi', 'Maça', 'Uva', 'Jabuticaba', 'Maracujá']

/*
    O método filter() cria um NOVO vetor contendo apenas os elemtos
    do vetor de origem que atendam o crtério da função passada como
    parâmetro.
*/

let negs = numeros.filter(i => i <0)
let Div5 = numeros.find(x => x %5 === 0)
let starsWm = frutas.find(f => f.charAt(0) === 'M')
let starwsB = frutas.find( l => l.charAt(0) === 'B')
let starwsJ = frutas.find( x => x.charAt(0) === 'J') //vetor vazio []



console.log({negs, Div5, starsWm, starwsB, starwsJ})
