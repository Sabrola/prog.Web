let carros = ['Chevette', 'Fusca', 'Opala', 'Fiorino', 'Belina', 'Del Rey']

//O método includes() testa se um dado elemento existe em um vetor.
//Retortnando TRUE se ele existe e FALSO caso contrario.

let temFusca = carros.includes('Fusca')
let temBelina = carros.includes('Belina')
let temCorcel = carros.includes('Corcel')

console.log({temFusca, temBelina, temCorcel})

//O método index retorna o índice (posição)de um elemento no vetor
//Caso o elemento não exista, -1 será retornado

let idxFusca = carros.indexOf('Fusca')
let idxBelina = carros.indexOf('Belina')
let idxCorcel = carros.indexOf('Corcel')

console.log({idxFusca, idxBelina, idxCorcel})
