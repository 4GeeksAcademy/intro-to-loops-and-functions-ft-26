/* Loops */
/* 

for(iterador; condicion; increment){
    // codigo
}

for(indice in coleccion){
    // codigo
}

for(valor of coleccion){
    // codigo
}

while(condicion){
    // codigo
}

do {
    // codigo
} while(condicion)

*/


for (let i = 1; i <= 10; i++) {
    console.log(i) // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}

let nombres = ["Hugo", "Paco", "Luis", "Donald", "Mickey"]
for (let i = 0; i < nombres.length; i += 1) {
    console.log(nombres[i])
}

for (let indice in nombres) {
    console.log(indice)
    console.log(nombres[indice])
}

for (let nombre of nombres) {
    console.log(nombre)
}

let i = 1;
while (i <= 10) {
    console.log(i)
    //i++
    //i=i+1
    i += 1
}

let indice = 0
while (indice < nombres.length) {
    console.log(nombres[indice])
    indice++
}

i = 1
do {
    console.log(i)
    i++
} while (i === 10)

console.log("Hola")