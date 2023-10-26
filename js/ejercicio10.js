/* 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo: 

input: 20       Output: El 20 es divisible por 2.
*/

let numero = parseInt(prompt("Ingresa un número"));
let divisible = "";

if (numero % 2 === 0) {
    divisible = 2;
} else if (numero % 3 === 0) {
    divisible = 3;
} else if (numero % 5 === 0) {
    divisible = 5;
} else if (numero % 7 === 0) {
    divisible = 7;
}

if (divisible !== "") {
    document.write( `${numero} es divisible por ${divisible}.`);
} else {
    document.write(`${numero} no es divisible por 2, 3, 5 ni 7`);
}

