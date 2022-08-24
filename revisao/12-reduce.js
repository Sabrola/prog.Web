let nums = [2, 3, 5, 7, 11, 13, 17, 29, 23, 29, 31]
let nomes = ['Carls', 'Arls', 'Paraldson', 'Sistina', 'Farls']

//reduce() é um método que REDUZ um vetor a um valor singular.
//Ele faz isso aplicando uma função a cada elemento dp vetor original,
//aplicando uma transformação e acumulando resultados.

//reduce() para soamr todos os elemtos do vetor nums
let soma = nums.reduce((elemento, acumulador) => acumulador + elemento)

//reduce() para coloar em maiúsculas e cpnecter com vírgulas intercaladas
//cada elemento do vetor nomes.
let listaNomes = nomes.reduce((el, acum) => acum.toUpperCase() + ', ' + el.toUpperCase())

console.log({soma, listaNomes})
