let numeroSecreto = 0;
let intentos = 0;
let rango = 10 // prompt{'Por favor ingresa el numero maximo para el rango del juego:'};
let numeroSorteado = [];

condicionesIniciales();

function asignarTextoElmento(elemento, texto){
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}
function generarNumeroSecreto() {
  let numeroSecreto = Math.floor(Math.random()*rango)+1;

  if (numeroSorteado.length === rango){
    asignarTextoElmento('p', 'El juego ha terminado, Ya se sortearon todos los números, Muchas gracias por participar');
    document.getElementById('intentar').setAttribute('disabled', true); 
  }else {
    if (numeroSorteado.includes(numeroSecreto)) {
      return generarNumeroSecreto();
    }else{
      numeroSorteado.push(numeroSecreto);
      return numeroSecreto;
    }
    
  }
}

function cleanInput(){
  document.querySelector('#valorUsuario').value = '';
}

function verificarIntento(){
  let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

  if (numeroSecreto === numeroUsuario) {
    asignarTextoElmento('p', `¡Acertaste el numero secreto en ${intentos} ${(intentos === 1) ? 'intento!' : 'intentos!'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  }else {
    // El usuario no acerto el numero secreto
    if (numeroSecreto < numeroUsuario) {
      asignarTextoElmento('p', 'El numero secreto es menor');
    }else {
    asignarTextoElmento('p', 'El numero secreto es mayor');
    }
    intentos++;
    cleanInput();
  }
  return;
}
function condicionesIniciales(){
  asignarTextoElmento('h1', 'Juego del numero secreto');
  asignarTextoElmento('p', `Introduce un numero del 1 al ${rango}`);
  intentos = 1;
  numeroSecreto = generarNumeroSecreto();
}

function nuevoJuego(){
  cleanInput();
  document.getElementById('reiniciar').setAttribute('disabled', true);
  condicionesIniciales();
}

