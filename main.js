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

document.addEventListener('DOMContentLoaded', function() {
  var mobileLink = document.getElementById('mobile-link');

  mobileLink.addEventListener('click', function(event) {
    if (window.innerWidth <= 768) { // Verificar si es la versión mobile (puedes ajustar el ancho según tus necesidades)
      event.preventDefault(); // Prevenir la acción por defecto del enlace

      setTimeout(function() {
        window.location.href = mobileLink.getAttribute('href'); // Redirigir después de 2 segundos (puedes ajustar el tiempo según tus necesidades)
      }, 2000);
    }
  });
});
