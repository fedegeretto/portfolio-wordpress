// ABRIR Y CERRAR MENÚ

const abrirMenu = document.querySelector("#abrir-menu");

const cerrarMenu = document.querySelector("#cerrar-menu");

const navBar = document.querySelector("#navbar");


abrirMenu.addEventListener("click", () => {
    navBar.classList.add("activo");
});

cerrarMenu.addEventListener("click", () => {
    navBar.classList.add("cerrar");

    setTimeout(() => {
        navBar.classList.remove("activo");
        navBar.classList.remove("cerrar");
    }, 300)
});

document.addEventListener("click", (event) => {
  // Verifica si el elemento que se hizo clic está dentro del menú
  if (!navBar.contains(event.target) && !abrirMenu.contains(event.target)) {
      navBar.classList.remove("activo");
  }
});

const enlacesMenu = document.querySelectorAll("#navbar li a");
console.log(enlacesMenu);
const arrayEnlacesMenu = Array.from(enlacesMenu);
const arrayEnlacesMenuCerrar = arrayEnlacesMenu.slice(0, 3)
arrayEnlacesMenuCerrar.forEach((enlace) => {
  enlace.addEventListener("click", () => {
      navBar.classList.remove("activo");
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