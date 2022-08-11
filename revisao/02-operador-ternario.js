let media = 7.6, resultado

//Estrutura if-else para definir o valor da
//variavel resultado em função da condição 'media >= 6'
if(media >= 6){
    resultado = 'APROVADO'
}
else{
    resultado = 'REPROVADO'
}
console.log({media, resultado})

//Alternativa: if (media >=6) resultado = 'APROVADO'
//             else resultado = 'REPROVADO''

//Usando o operador ternário
resultado = media >= 6 ? 'APROVADO' : 'REPROVADO'
//variavel | condição     result true | result false

console.log({media, resultado})

let user = 'guest', msg

if(user === 'admin') msg = 'Login successful.'
else msg = 'You are not allowed here. Leave.'

console.log({user,msg})
//converter a estrutura acima em um operardor ternario

msg = user === 'admin' ? 'Login succesful.' : 'You are not allowed here. Leave.'

console.log({user,msg})
