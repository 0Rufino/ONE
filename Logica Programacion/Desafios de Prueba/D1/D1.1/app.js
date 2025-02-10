titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafio';

function mostrarEnConsola() {
  console.log('El botón fue presionado');
}

function preguntaAlUsuario() {
  let ciudad = prompt('¿Menciona una ciudad de Brasil?');
  alert(`Estuve en ${ciudad} y me acordé de ti`);
}

function mostrarAlerta() {
  alert('Yo amo JS"');
}

function sumar() {
  let numero1 = parseInt(prompt('Ingrese un numero'));
  let numero2 = parseInt(prompt('Ingrese un numero'));

  alert(`El resultado de la suma de los numeros es: ${numero1+numero2}`);
}