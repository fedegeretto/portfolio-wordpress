// ABRIR Y CERRAR MENÚ
const abrirMenu = document.querySelector("#abrir-menu");
const cerrarMenu = document.querySelector("#cerrar-menu");
const navegacion = document.querySelector("#navegacion")

abrirMenu.addEventListener("click", () => {
  navegacion.classList.add("activo")
})

cerrarMenu.addEventListener("click", () => {
  navegacion.classList.add("cerrar")
  setTimeout(() => {
    navegacion.classList.remove("activo")
    navegacion.classList.remove("cerrar")
  }, 300);
})

document.addEventListener("click", (event) => {
  if (!navegacion.contains(event.target) && !abrirMenu.contains(event.target)) {
      navegacion.classList.remove("activo");
  }
});

const enlacesMenu = document.querySelectorAll(".navegacion li a");
const arrayEnlacesMenu = Array.from(enlacesMenu);
arrayEnlacesMenu.forEach((enlace) => {
  enlace.addEventListener("click", () => {
      navegacion.classList.remove("activo");
  });
});

// ESCRIBIR PALABRAS
const palabras = ["Landing Page", "Ecommerce", "Responsive", "Personalizado"];
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