//Destruturação de vetor
let frutas = ['Laranja', 'Banana', 'Maça']

let [a1, b1, c1] = frutas

console.log({a1, b1, c1})

//Desconstrução parcial
let[x, y] = frutas //Primeira e segunda frutas
    console.log({x, y})

let[a, , c] = frutas //Primeira e terceira frutas
    console.log({a, c})

let[, i, j] = frutas //Segunda e terceira frutas
    console.log({i, j})

//////////////////////////////////////////////////////////////

//Destruturação de objetos
let pessoa = {
    nome: 'Carls Farrado',
    sexo: 'C',
    dataNasc: '2300-13-02',
    email: 'Parafarafães@catmail.com'
}

//Na destruturação de objetos, as variáveis avulsas;
// 1 - Precisam ter o MESMO NOME das propriedades do objeto
// 2 - Podem ser especificadas em qualquer ordem
// 3 - Pode ser feita a destruturação parcial

let = { sexo, nome, email } = pessoa

//[] = vetor
//{} = objeto

console.log({nome, sexo, email})
