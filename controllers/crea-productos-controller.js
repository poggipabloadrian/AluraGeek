
import { productoServices } from "../services/producto-servicios.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombre = document.querySelector("[data-nombre]").value;
  const url = document.querySelector("[data-url]").value;
  const precio = document.querySelector("[data-precio]").value;
 
  productoServices.crearProducto(nombre, url, precio).then(respuesta => {
    window.location.href = "../screens/index.html";
  })
    .catch((err) => {
      console.log(err);
    });
})





