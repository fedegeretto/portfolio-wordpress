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

function openModal(image) {
  var modal = document.getElementById('modal');
  var modalImage = document.getElementById('modal-image');
  
  modalImage.src = image.src;
  modal.style.display = 'block';
}

function closeModal() {
  var modal = document.getElementById('modal');
  var modalImage = document.getElementById('modal-image');

  modalImage.src = '';
  modal.style.display = 'none';
}
