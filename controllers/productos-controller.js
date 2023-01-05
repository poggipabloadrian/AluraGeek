import { productoServices } from "../services/producto-servicios.js";

const nuevoProducto = (name, price, imageUrl, id) => {
  const card = document.createElement("div");
  const contenido = `
          <div class="producto">
              <img src="${imageUrl}" class="producto-imagen" alt="img">
              <h1 class="producto-nombre"> ${name} </h1>
              <p class="producto-precio">${price}</p>
              <a class="ver-producto" href="../producto.html?id=${id}">Ver Producto</a>
          </div>   
        `
  card.innerHTML = contenido;
  card.dataset.id = id;
  return card;
};

const productos = document.querySelector("[data-product]");

const render = async () => {
  try {
    const listaProductos = await productoServices.listaProductos();
    listaProductos.forEach((elemento) => {
      productos.appendChild(

        nuevoProducto(
          elemento.name,
          elemento.price,
          elemento.imageUrl,
          elemento.id
        )
      );
    });
  } catch (error) {
    console.log(error);
  }
};

render()
