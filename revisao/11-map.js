let nums = [2, 3, 5, 7, 11, 13, 17, 29, 23, 29, 31]
let nomes = ['Carls', 'Arls', 'Paraldson', 'Sistina', 'Farls']

//O método map() gera um NOVO vetor, de tamanho identico ao original
//em que cada elemento corresponde a uma transformação feita no elemento
//original feita pela função passada como parâmetro.


//map() que cria um novo vetor de números cujo o valor é o dobro
//do valor dos elementos do vetor original.
let dobro = nums.map(x => x * 2)

//map() que transforma os elementos do vetor original em items de lista
//para o uso em HTML, por exemplo.
let itemsLista = nomes.map(n => `<li>${n}</li>`)

console.log({dobro})
console.log({itemsLista})
