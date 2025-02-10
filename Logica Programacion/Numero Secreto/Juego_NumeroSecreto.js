alert("¡Bienvenido, al Juego del numero secreto!");
alert("-El juego consiste en adivinar un numero secreto entre 1 y el numero que tu elijas.\n-Tendras 5 oportunidades para adivinar el numero secreto.\n-Cada vez que ingreses un numero se te dara una pista de la cercania del numero secreto.\n\n¡Buena suerte!");
let rango = parseInt(prompt("Por favor ingresa el numero maximo para el rango del juego:"));

let numeroSecreto = Math.floor(Math.random() * rango)+1;
console.log(numeroSecreto);

let vidas = Math.ceil(rango / 10);
let intentos = 0;

let numeroUsuario = -1;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Por favor ingresa un numero del 1 al ${rango}:`));
    if (numeroUsuario < 1 || numeroUsuario > rango) {
        alert(`El numero ingresado es mayor al rango establecido`);
        continue;
    }else{
        intentos++;
        if (numeroUsuario === numeroSecreto) {
            alert(`Felicidades,Acertaste el numero secreto ${numeroSecreto} en ${intentos} ${intentos == 1 ?  'intento.' : 'intentos.'}`);
            break;
        } else {
        alert(`No acertaste el numero, te ${vidas == 1 ? 'queda' : 'quedan'} ${vidas} ${vidas == 1 ? 'vida.' : 'vidas.'}`);
            if (vidas == 0) {
                alert(`¡JUEGO FINALIZADO!\nTe has quedado sin vidas.\n\nEl numero secreto era: ${numeroSecreto}`);
                break;
            }else{
                console.log(`\nTu numero fue: ${numeroUsuario}`);
                vidas--;
                
                let muyCerca = Math.ceil(rango * 0.03); // 3% del rango
                let cerca = Math.ceil(rango * 0.08); // 8% del rango
                let caliente = Math.ceil(rango * 0.14); // 14% del rango
                let tibio = Math.ceil(rango * 0.30); // 30% del rango
                
                if (numeroUsuario >= numeroSecreto - muyCerca && numeroUsuario <= numeroSecreto + muyCerca) {
                    alert('Te estas Achicharrando');
                    console.log("Temperatura: Achicharrando");
                } else if (numeroUsuario >= numeroSecreto - cerca && numeroUsuario <= numeroSecreto + cerca) {
                    alert('Te estas quemando');
                    console.log("Temperatura: Quemando");
                } else if (numeroUsuario >= numeroSecreto - caliente && numeroUsuario <= numeroSecreto + caliente) {
                    alert('Estas caliente');
                    console.log("Temperatura: Caliente");
                } else if (numeroUsuario >= numeroSecreto - tibio && numeroUsuario <= numeroSecreto + tibio) {
                    alert('Estas tibio');
                    console.log("Temperatura: Tibio");
                } else {
                    alert('Estas frio');
                    console.log("Temperatura: Frio");
                }
            }
            
        }
    }
    console.log(`Intentos: ${intentos}`);
    console.log(`Vidas: ${vidas}`);
}
