//Função tradicional
//Linha do corpo contendo return
function square(n){
    return n*n
}

console.log(square(7))

//função equivalente no formato arrow function
const squareA = n => n*n

console.log(squareA(7))

//função tradicional com mais de 1 argumento e
//uma linha de retorno
function plus(a, b, c){
    return a + b + c
}

console.log(plus(10,15,20))


//arrow function equivalente
//Quuando a +1 argumento são necessarios parenteses em volta deles
const Aplus = (a, b, c) => a + b + c

console.log(Aplus(10, 20, 15))

//Função tradicional sem argumentos e com uma unica
//linha de corpo com return

function random0to9(){
    //Retorna um número aleatório entre 0 e 9
    //math.random(): Gera um número aleatório fracionario entre 0 e 9
    //math.floor(): Retira as casas decimais de um número fracionario
    return Math.floor(Math.random() * 10)
}

console.log(random0to9())

//Arrow function equivalente
//Os parenteses devem estar presentes mesmo sem argumento
const random0to9A = () => Math.floor(Math.random() * 10)

console;log(random0to9A())

//Funções deterministicas = mesmo arugmento mesmo resultado
//Funções não deterministicas = Mesmo argumento resultado variante


//Função tradicional com um argumento e varias linhas de corpo
function fatorial(n){
    let fat = 1
    for(leti = n; i > 1; i--) fat *= i
    return fat
}

console.log(fatorial(6))

//Arrow function equivalente
//Nãop há economia de linhas/código em relação ao corpo da função
const fatorialA =n => {
    let fat = 1
    for(let i = n; i > 1; i--) fat *= i
    return fat
}

console.log(fatorialA(6))
