//let min = Math.min(2, -7, 8, 4, 0)
//let max = Math.max(2, -7, 8, 4, 0)

let nums = [2, -7, 8, 4, 0] //Vetor com os números

//let min = Math.min(nums)  //NÃO FUNCIONA
//let max = Math.max(nums)  //NÃO FUNCIONA

//A sintaxe de espalhamento (spreading) é capaz de
//"descompactar" um vetor em uma lista de valores avulsos
let min = Math.min(...nums)
let max = Math.max(...nums) //<--- os 3 pontos.

console.log({min, max})

console.log(`Vetor "empacotado":`, nums)
console.log(`Vetor "espalhado":`, ...nums)

//////////////////////////////////////////////////////////////////////////////

let carr01 = { model: 'Fiorino', brand: 'Fiat', year: 1984, color: 'Bege'}

//Copiando car01 para car02
//let car02 = carr01 - NÃO FUNCIONA

//É necessário usar a sintaxe de espalhamento para obter
//uma copta efetiva do objeto
let car02 = {...carr01}

car02.brand = 'Opala'
car02.model = 'Chevrolet'
car02.color = 'Preto'
car02.year = 1979

console.log({carr01, car02})

//////////////////////////////////////////////////////////////////////////////////////

let frutas = ['Maça', 'Banana', 'Laranja']
let verduras = ['Alface', 'Couve', 'Rúcula']
//Vetor que contém tanto verduras quanto frutas
//let hortifruti = frutas + verduras //NÃO FUNCIONA
//let hortifruti = frutas.concat(verduras) //JS classic
//Usando espalhamento e JS moderno
let hortifruti = [...frutas, ...verduras]

console.log({hortifruti})
