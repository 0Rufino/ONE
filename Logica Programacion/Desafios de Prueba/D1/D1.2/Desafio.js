//DESAFIO 2

/* function mostrarEnConsola() {
  console.log("¡Hola, Mundo!");
}

function saludar(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}

function numerador(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

function numeroMayor(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return "Los números son iguales";
  }
}

function sqr(x){
  return x*x;
}

let cuadrado = x => x * x; */

////////////////////////////////////////////////////////////////

//DESAFIO 3
/* 
// Crear una funcion que calcule el indice de masa corporal de una persona
// Formula: IMC = peso(Kg) / (altura²(m)).
function IMC(peso, altura) {
  return peso / (altura * altura);
}

// Crear una funcion que calcule el valor factorial de un numero

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
} 

//Funcion que convierta dorlares a reales
function convDolarReal(dolar){
  return dolar * 4.80;

}

// funcion que muestre el area y el perimetro de una sala rectangular.
function dimensiones(largo, ancho){
  let area = largo * ancho;
  let perimetro = (largo + ancho) * 2;

  return area, perimetro;
}

// funcion que muestre el area y el perimetro de una sala circular.

function dimensionesCirculo(radio){
  let area = 3.14 * radio * radio;
  let perimetro = 2 * 3.14 * radio;

  return area, perimetro;
}

// crea una funcion que muestre en pantalla la tabla de multiplicar de un numero.

function tablaMultiplicar(num){
  for (let i = 1; i <= 12; i++){
    console.log(`${num} * ${i} = ${num * i}`);
  }
}
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////

let listaGenerica = [];

let lenguajesProgramacion = ['C','C#','C++','JavaScript','Java','Python','Ruby'];

lenguajesProgramacion.push('PHP','GoLang','Kotlin','Swift');

function mostrarLenguajes(){
  for (let i = 0; i < lenguajesProgramacion.length; i++){
    console.log(lenguajesProgramacion[i]);
  }
}

function mostrarLenguajesInverso(){
  console.log(' ')
  for (let i = lenguajesProgramacion.length - 1; i >= 0; i--){
    console.log(lenguajesProgramacion[i]);
  }
}


///////////////////////////////////////////////////////////////
let numeros = [432,43,54,65,0,43,65,734,654,732,987,1];

function promedio(lista){
  let numerador = 0;
  for (let i = 0; i < lista.length; i++){
    numerador += lista[i];
  }
  return numerador/lista.length;
}

function grandeChiquito(){
  let listaOrdenada = numeros.sort();
  let grande = listaOrdenada[listaOrdenada.length-1]
  let chiquito = listaOrdenada[0];

  return listaOrdenada;
}

function posicion(num){
  for (let i = 0; i < numeros.length; i++){
    if (numeros[i] == num){
      return i;
    }
    else {
      return -1;
    }
  }
}

function sumaListas(listaA, listaB){
  let sumaListas = [];
  if (listaA.length == listaB.length){
    for (let i = 0; i < listaA.length; i++){
      sumaListas.push(listaA[i] + listaB[i]);
    }
    return sumaListas;
  }else {
    return 'Las listas no tienen la misma longitud';
  }

  /////////////// ALTERNATIVA //////////////////////////
//return lista1.map((num, index) => num + lista2[index]);

}

function cuadradoLista(lista){
  let cuadrado = [];
  for (let i = 0; i < lista.length; i++){
    cuadrado.push(lista[i] * lista[i]);
  }
  return cuadrado;

  /////////////// ALTERNATIVA //////////////////////////
  //return lista.map(num => num ** 2);
}
///////////////////////////////////////////////////////////////




