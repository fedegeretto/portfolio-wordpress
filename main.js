// ESCRIBIR PALABRAS
const palabras = ["Landing Page", "Ecommerce", "Institucional", "Personalizado"];
const maquinaDeEscribir = document.getElementById("maquina-de-escribir");

function escribirPalabra(palabra) {
    let index = 0;
    const intervalId = setInterval(() => {
        maquinaDeEscribir.textContent = palabra.slice(0, index);
        index++;
    if(index > palabra.length){
      clearInterval(intervalId);
      setTimeout(() => {
        maquinaDeEscribir.textContent = "";
        escribirSiguientePalabra();
      }, 1000);
    }
  }, 100);
}

let indicePalabrasActual = 0;
function escribirSiguientePalabra() {
  const indicePalabra = palabras[indicePalabrasActual];
  indicePalabrasActual = (indicePalabrasActual + 1) % palabras.length;
  escribirPalabra(indicePalabra);
}

escribirSiguientePalabra();


  // Obtener el enlace
  var link = document.getElementById('mobile-link');

  // Función para activar el enlace después de 2 segundos
  function activateLink() {
    setTimeout(function() {
      link.click(); // Simular el clic en el enlace
    }, 2000); // Retrasar la activación en 2 segundos (2000 ms)
  }

  // Agregar evento de clic al enlace
  link.addEventListener('click', activateLink);

