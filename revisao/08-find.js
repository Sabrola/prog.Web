const numeros = [10, 19, 3, -4, 13, 11, 15, 0, -1]
const frutas = ['Laranja', 'Abacaxi', 'Maça', 'Uva', 'Jabuticaba', 'Maracujá']

//O método find() encontra o primeiro elemento de um vetor que corresponda ao retorno da função
//passada como parâmetro.
let FirstNeg = numeros.find(n => n < 0)
let firstDiv5 = numeros.find(x => x %5 === 0)
let starsWm = frutas.find(f => f.charAt(0) === 'M')
let starwsB = frutas.find( l => l.charAt(0) === 'B')

console.log({FirstNeg, firstDiv5, starsWm, starwsB})
