/* 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 

input: 15 , 3              Output: El 15 es el número más grande
*/

let numero1 = parseInt(prompt("Ingrese un primer numero"));
let numero2 = parseInt(prompt("Ingrese un segundo numero"));

if (numero1 > numero2) {
  document.write("El " + numero1 + " es el número más grande");
} else if (numero2 > numero1) {
  document.write("El " + numero2 + " es el número más grande");
} else {
  document.write("Los números ingresados son iguales (" + numero2 + ")");
}

