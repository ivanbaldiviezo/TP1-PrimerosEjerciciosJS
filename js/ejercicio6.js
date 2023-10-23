/* 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 

input: 15 , 3              Output: El 15 es el número más grande
*/

let numero1 = parseInt(prompt('Ingrese un primer numero'));
let numero2 = parseInt(prompt('Ingrese un segundo numero'));

if(numero1 > numero2){
    document.write(numero1 + ' es mayor a ' + numero2)
}
if(numero1 < numero2){
    document.write(numero2 + ' es mayor a ' + numero1)
}