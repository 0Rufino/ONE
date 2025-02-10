//DESAFIO 1
/* 
let nombre = prompt("Por favor, ingresa tu nombre de usuario:");
let edad = prompt("Por favor, ingresa tu edad:");

let numeroDeVentas = 50;
let saldoDisponible = 1000;
let mensajeDeError = "¡Error! Completa todos los campos.";

alert("¡Bienvenida y bienvenido a nuestro sitio web!");

alert(mensajeDeError);

if (edad >= 18) {
  alert("¡Puedes obtener tu licencia de conducir!");
} */



//DESAFIO 2
/* 
let diaSemana = prompt("Por favor, ingresa el día de la semana (lunes, martes, miércoles, jueves, viernes, sábado o domingo):");

if (diaSemana == "Sabado" || diaSemana == "Domingo") {
  alert("Buen fin de semana");
}else{
  alert("Buena Semana");
}
///////////////////////////////////////////////////////////////
let numero = prompt("Por favor, ingresa un número:");

if (numero > 0) {
  alert("El número es positivo");
} else if (numero < 0) {
  alert("El número es negativo");
} else {
  alert("El número es cero");
}

///////////////////////////////////////////////////////////////
let puntuacion = prompt ("Ingrese un numero:")

if (puntuacion >= 100){
  alert("¡Felicidades, has ganado!");
}else{
  alert("Intentalo nuevamente para ganar.");
}

///////////////////////////////////////////////////////////////

let saldo = 200;

alert("Bienvenido a tu cajero automático");

let dineroIngresado = prompt("Por favor, ingresa la cantidad de dinero que deseas ingresar:");

saldo = saldo + parseInt(dineroIngresado);

alert(`Tu nuevo saldo es: ${saldo}`);

////////////////////////////////////////////////////////////////

let nombre = prompt ("Por favor, ingresa tu nombre:");

alert(`¡Hola, ${nombre}! Bienvenido a nuestro sitio web!`); */



//DESAFIO 3
/* 
let contador = 1;
console.log('Contador progresivo');
while (contador <= 10) {
  console.log(contador);
  contador++;
}
///////////////////////////////////////////////////////////////
let contador2 = 10;
console.log('\nContador regresivo');
while (contador2 >= 1) {
  console.log(contador2);
  contador2--; 
} 
///////////////////////////////////////////////////////////////
let numeroUsuario = parseInt(prompt("Ingrese un numero:"));
console.log('\nContador regresivo 2');
while (numeroUsuario != 0) {
  numeroUsuario--;
  console.log(numeroUsuario);
}
///////////////////////////////////////////////////////////////
let numeroUsuario2 = parseInt(prompt("Ingrese un numero:"));
console.log('\nContador progresivo 2');
let contador3 = 0;
while (contador3 != numeroUsuario2) {
  console.log(contador3);
  contador3++;
} */


//DESAFIO 4
/* 
console.log('Bienvenidos');

let nombre = "Orlando";
console.log(`¡Hola, ${nombre}!`);

alert (`¡Hola, ${nombre}!`);

///////////////////////////////////////////////////////////////

let lenguajeFavorito = prompt("¿Cuál es tu lenguaje de programación favorito?");
console.log(`Tu lenguaje de programación favorito es: ${lenguajeFavorito}`);

///////////////////////////////////////////////////////////////

let valor1 = Math.floor(Math.random() * 100);
let valor2 = Math.floor(Math.random() * 100);
let resultado1 = valor1 + valor2;

console.log(`El valor de la suma de ${valor1} + ${valor2} es: ${resultado1}`);

///////////////////////////////////////////////////////////////

let valor3 = Math.floor(Math.random() * 100);
let valor4 = Math.floor(Math.random() * 100);
let resultado2 = valor1 - valor2;

console.log(`El valor de la diferencia de ${valor3} - ${valor4} es: ${resultado2}`);

///////////////////////////////////////////////////////////////

let edad = prompt("Por favor, ingresa tu edad:");

if (edad >= 18) {
  console.log("¡Puedes obtener tu licencia de conducir!");
} else {  
  console.log("¡Aún no puedes obtener tu licencia de conducir!");
}

///////////////////////////////////////////////////////////////

let numero = prompt("Por favor, ingresa un número:");

if (numero > 0) {
  console.log("El número es positivo");  
} else if (numero < 0) {
  console.log("El número es negativo");   
} else {
  console.log("El número es cero");  
}

///////////////////////////////////////////////////////////////
let contador = 1;

while (contador < 11) {
  console.log(contador);
  contador++;     
}

///////////////////////////////////////////////////////////////
let nota = Math.floor(Math.random() * 10);

if (nota >= 7) {
  console.log("¡Aprobado!");
} else {
  console.log("¡Reprobado!");
}

///////////////////////////////////////////////////////////////

let numeroAleatorio = Math.floor(Math.random() * 10)+1;
console.log(`El número aleatorio es: ${numeroAleatorio}`);

///////////////////////////////////////////////////////////////
let numeroAleatorio2 = Math.floor(Math.random() * 1000)+1;
console.log(`El número aleatorio es: ${numeroAleatorio2}`); */