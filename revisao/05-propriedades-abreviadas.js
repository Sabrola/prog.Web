let fullname = 'Carls Carlsilson dos santos'
let username = 'Fars'
let group = 'Aluno'

//Criando um objeto a partir das variáveis a cima.
//Note que os nomes da propriedades do objeto são IGUAIS
//aos das variáveis.

//let user = {
//    fullname: fullname,
//    username: username,
//    group: group
//}


//Refazendo o objeto com propriedades abreviadas

let user = {
    fullname,
    username,
    group,
    password: 'jesus' //Propriedade não abreviada
}

console.log(user)

//Usando propriedades abreviadas para efeito de depuração.

//Exibindo o valor de duas variáveis,. Veja que os valores
//são exibidos, mas a saída não informa de quaias variáveis
//provêm os valores

let x = 10, y = 5

console.log(x, y)

//Saída melhorada: Passando um objeto com propriedades
//abreviadas para o console.log(). como forma de sabermos
//de quais variáveis provêm os valores.

console.log({x, y})
