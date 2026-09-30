const contactos = [];

const nombreInput = document.getElementById("nombre");
const telefonoInput = document.getElementById("telefono");
const btnAgregar = document.getElementById("btnAgregar");
const listaContactos = document.getElementById("listaContactos");
const contador = document.getElementById("contador");
const buscarInput = document.getElementById("buscar");

btnAgregar.addEventListener("click", function () {


const nombre = nombreInput.value.trim();
const telefono = telefonoInput.value.trim();

if (nombre === "" || telefono === "") {
    return;
}

contactos.push({
    nombre: nombre,
    telefono: telefono
});

mostrarContactos();
actualizarContador();

nombreInput.value = "";
telefonoInput.value = "";


});

function mostrarContactos(lista = contactos) {


listaContactos.innerHTML = "";

lista.forEach(function (contacto) {

    const elemento = document.createElement("div");

    elemento.classList.add("contacto");

    elemento.innerHTML = `
        <div class="datos-contacto">
            <h3>${contacto.nombre}</h3>
            <p>${contacto.telefono}</p>
        </div>

        <button class="btn-eliminar">
            Eliminar
        </button>
    `;

    const btnEliminar = elemento.querySelector(".btn-eliminar");

    btnEliminar.addEventListener("click", function () {

        const indice = contactos.indexOf(contacto);

        contactos.splice(indice, 1);

        mostrarContactos();
        actualizarContador();
    });

    listaContactos.appendChild(elemento);
});


}

function actualizarContador() {


contador.textContent = contactos.length;


}

buscarInput.addEventListener("input", function () {


const textoBusqueda = buscarInput.value.toLowerCase().trim();

const contactosFiltrados = contactos.filter(function (contacto) {

    return contacto.nombre.toLowerCase().includes(textoBusqueda);

});

mostrarContactos(contactosFiltrados);


});
