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

/////////////////////////////////////////////////////////////////////////////////////

//Problema: Como delarar uma função que aceita um número arbitrarios de parâmetros?
console.log('Soma de 7 números:', plus(10, 12, 15, 18, 7, 2, 10)) //7 Parâmetros
console.log('Soma de 15 números:', plus(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,)) //15 parâmetros

//O espalhamento também resolve esse tipo de problema. Pode ser usado em parâmetros
//de função, quando então passa a ser conhecido como PARÂMETRO DE RESTO.
function plus(...nums) {
    let res = 0

    //Dentro da função, o parâmetro de resto se comporta como um vetor.
    for(let num of nums) res += num
    return res
}

//O parâmetro de resto também pode ser usado junto com parâmteros
//regulares.
//Nesse caso o parâmetro de resto deve vir por último na declaração da função.
function calc(oper, ...nums){
    let res
    if(oper === '+'){
        res = 0
        for(let num of nums) res += num
    }
    else if(oper === '*') {
        res = 1
        for(let num of nums) res *= num
    }
    return res

}

console.log('Soma dos números de 1 a 5:', calc('+', 1,2,3,4,5))
console.log('Multiplicação dos números de 1 a 5:', calc('*', 1,2,3,4,5))
