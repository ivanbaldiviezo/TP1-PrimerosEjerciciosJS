/*9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:

input: Hola mundo       Output: oauo
*/

let frase = prompt("Ingrese una frase:");
let vocales = "";
frase = frase.toLowerCase();

for (let i = 0; i < frase.length; i++) {
  let vocal = frase.charAt(i);
  if (vocal === 'a' || vocal === 'e' || vocal === 'i' || vocal === 'o' || vocal === 'u') {
    vocales += vocal;
  }
}

if (vocales.length > 0) {
  document.write("Las vocales en la frase son: " + vocales);
}else{
    document.write("No se encontraron vocales en la frase.");
}