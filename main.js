// Autores: Diego Padilla, Tomas Sarmiento, Ashley Francisco Pattrick
readline = require("readline-sync");
console.log("Hola Mundo");

let numero1, numero2;

numero1 = 0;
numero2 = readline.questionInt("Ingrese un numero: ");
console.log("El numero ingresado es: " + numero2);
numero1 = numero2 * 2;
console.log("El doble del numero ingresado es: " + numero1);
console.log("Fin del programa");
