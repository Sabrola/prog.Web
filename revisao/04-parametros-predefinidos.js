//Função que calcula a area de diferentes areas geometricas

//Nesta função o parâmetro "Forma(shape)" tem um valor predefinido: 'R'
//Assim, caso esse parâmetro não seja informado, o valor 'R' será
//usado. Se o parâmetro for informado, valerá o valor passado.
function calc_area(base, height, shape) {
    switch(shape){
        case 'R': //Retêngulo
            return base * height
        
        case 'T': //Triângulo
            return base *  height /2

        case 'E': //Elipse
            return (base/2) * (height*2) * Math.PI
        
        default:
            return undefined
    }
}

console.log(`Área retângulo 10x25: ${calc_area(10, 25, 'R')}`)
console.log(`Àrea triângulo 7.5x16.2: ${calc_area(7.5, 16.2, 'T')}`)
console.log(`Àrea elipse (circulo) 15x15: ${calc_area(15, 15, 'E')}`)
console.log(`Àrea ??? 80x55: ${calc_area(80, 55, 'X')}`)

//Usando parâmetro predefinido
console.log(`Área retângulo 22x15: ${calc_area(22, 15)}`)

/*
    Regras para o uso de parâmetros predefinidos em funções:

    1. O Parâmetro predefinido deve ser o último  parâmetro da função.
    2.Pode haver mais de um parâmetro predefinido. Nesse caso, eles deven ser
        os últimos parâmetros da função.
*/
