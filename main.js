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



  // Obtener el contenedor de imagen y el enlace
  var imageContainer = document.querySelector('.image-container');
  var link = document.getElementById('mobile-link');

  // Variable para controlar el estado del enlace
  var linkActivated = false;

  // Función para activar el enlace después de 3 segundos
  function activateLink() {
    if (!linkActivated) {
      linkActivated = true;
      setTimeout(function() {
        link.style.pointerEvents = 'auto'; // Habilitar el enlace
      }, 3000); // Retrasar la activación en 3 segundos (3000 ms)
    }
  }

  // Agregar eventos de hover y touchstart al contenedor de imagen
  imageContainer.addEventListener('mouseover', activateLink);
  imageContainer.addEventListener('touchstart', activateLink);


