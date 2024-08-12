/* Functions */

/* 
Sintaxis:

function nombreFuncion(param1, param2, ...paramN){
    // codigo a ejecutar
    return resultado
}


*/

function sumar(a, b) {
    return a + b;
}

console.log(sumar(3, 4)) // resultado: 7


/* Funcion Anonima */

const restar = function (a, b) {
    return a - b
}

console.log(restar(5, 10)) // Resultado: -5


/* Funcion de Flecha (Arrow Function) */


/* const saludar = (name) => {
    console.log(this)
    let saludo = `Hola, ${name}`
    return saludo
} */

/* const saludar = (name) => `Hola, ${name}`;

console.log(saludar('John Doe'))

console.log(this) */

/* Funcion de Orden Superior */

function crearMultiplicador(factor) {
    return function (numero) {
        return numero * factor
    }
}

let duplicar = crearMultiplicador(2)
console.log(duplicar(10)) // resultado 20


/* Funcion como objetos de primera clase */
function operacion(a, b, callback) {
    return callback(a, b)
}

const multiplicar = (a, b) => a * b


console.log(operacion(10, 10, multiplicar)) // 100
console.log(operacion(10, 10, sumar)) // 20
console.log(operacion(10, 10, restar)) // 0


/* Parametros predeterminados */
function saludar(nombre = 'John', apellido = 'Doe') {
    return `Hola, ${nombre} ${apellido}`
}

function saludar2(nombre, apellido) {
    return `Hola, ${nombre} ${apellido}`
}

console.log(saludar())
console.log(saludar('Doe'))
console.log(saludar('Jane', 'Doe'))

// Hoisting
console.log(dividir(10, 10))
/* 
const dividir = (a, b) => a / b; 
*/
function dividir(a, b) {
    return a / b
}
