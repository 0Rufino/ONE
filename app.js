let numeroSecreto = 0;
let intentos = 0;
let numeroSorteado = [];
let vidas = 0;
let rango = 0;



function condicionesIniciales(){
  
  asignarTextoElmento('h1', 'Juego del numero secreto');
  alert("¡Bienvenido, al Juego del numero secreto!");
  alert("-El juego consiste en adivinar un numero secreto entre 1 y el numero que tu elijas.\n-Tendras un minimo de 5 oportunidades para adivinar el numero secreto.\n-Cada vez que ingreses un numero se te dara una pista de la cercania del numero secreto.\n\n¡Buena suerte!");
  rango = parseInt(prompt('Por favor ingresa el numero maximo para el rango del juego:'));
  asignarTextoElmento('p', `Introduce un numero del 1 al ${rango}`);

  document.getElementById('valorUsuario').setAttribute('max', rango);

  vidas = Math.max(5, Math.ceil((rango - 20) / 10) + 5);
  console.log(vidas);

  intentos = 1;
  numeroSecreto = generarNumeroSecreto();
}

function asignarTextoElmento(elemento, texto, tiempo = null){
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  if (tiempo) {
    setTimeout(() => {
      elementoHTML.innerHTML = '';
    }, tiempo);
  }
  return;
}

function generarNumeroSecreto() {
  let numeroSecreto = Math.floor(Math.random() * rango) + 1;

  if (numeroSorteado.length === rango) {
    asignarTextoElmento('p', 'El juego ha terminado, Ya se sortearon todos los números, Muchas gracias por participar');
    document.getElementById('intentar').setAttribute('disabled', true); 
  } else {
    if (numeroSorteado.includes(numeroSecreto)) {
      return generarNumeroSecreto();
    } else {
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

  if (numeroUsuario < 1 || numeroUsuario > rango) {
    asignarTextoElmento('p', `El numero ingresado es mayor al rango establecido`, 3000);
    cleanInput();
    return;
  } else {
    intentos++;
    if (numeroUsuario === numeroSecreto) {
      asignarTextoElmento('p', `Felicidades, Acertaste el numero secreto ${numeroSecreto} en ${intentos} ${intentos == 1 ? 'intento.' : 'intentos.'}`);
      document.getElementById('reiniciar').removeAttribute('disabled');
      return;
    } else {
      vidas--;
      if (vidas == 0) {
        asignarTextoElmento('p', `¡JUEGO FINALIZADO!\nTe has quedado sin vidas.\n\nEl numero secreto era: ${numeroSecreto}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        return;
      } else {
        let muyCerca = Math.ceil(rango * 0.03); // 3% del rango
        let cerca = Math.ceil(rango * 0.08); // 8% del rango
        let caliente = Math.ceil(rango * 0.14); // 14% del rango
        let tibio = Math.ceil(rango * 0.30); // 30% del rango

        if (numeroUsuario >= numeroSecreto - muyCerca && numeroUsuario <= numeroSecreto + muyCerca) {
          asignarTextoElmento('p', 'Te estas Achicharrando', 3000);
        } else if (numeroUsuario >= numeroSecreto - cerca && numeroUsuario <= numeroSecreto + cerca) {
          asignarTextoElmento('p', 'Te estas quemando', 3000);
        } else if (numeroUsuario >= numeroSecreto - caliente && numeroUsuario <= numeroSecreto + caliente) {
          asignarTextoElmento('p', 'Estas caliente', 3000);
        } else if (numeroUsuario >= numeroSecreto - tibio && numeroUsuario <= numeroSecreto + tibio) {
          asignarTextoElmento('p', 'Estas tibio', 3000);
        } else {
          asignarTextoElmento('p', 'Estas frio', 3000);
        }
        cleanInput();
        return;
      }
    }
  }
}

function nuevoJuego(){
  cleanInput();
  document.getElementById('reiniciar').setAttribute('disabled', true);
  condicionesIniciales();
}

condicionesIniciales();
