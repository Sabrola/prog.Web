let nome = 'Carls'
let idad = 20
let cidade = 'Franca/SP'

console.log('Meu nome é ' + nome + ', tenho ' + idad + ' anos e moro em ' + cidade + '.')

//Mesma mensagem usando string templatee
    //String template sãp strings especiais delimitadas entre
    //os caracteres `` (acentos graves - craves), que permitem
    //a interpolação direta de variáveis.
console.log(`Meu nome é ${nome}, tenho ${idad} anos e moro em ${cidade}.`)

//Dentro de uma string template, não estamos limitados apenas a
//colocar variáveis entre ${} . Na realidade, podemos colocar
//qualquer código JS válido.
console.log(`Daqui cinco anos ${nome.toUpperCase()} terá ${idad +5} anos.`)
