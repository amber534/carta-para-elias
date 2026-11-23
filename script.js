const boton = document.getElementById("abrirCarta");
const carta = document.getElementById("carta");
const sobre = document.getElementById("sobre");

boton.addEventListener("click", function() {

    sobre.classList.add("abierto");

    boton.disabled = true;

    setTimeout(function() {
        carta.classList.remove("oculta");
        sobre.style.display = "none";
    }, 1000);

});
const fechaInicio = new Date(2026, 10, 21);

function actualizarContador() {
    const hoy = new Date();

    const inicio = new Date(
        fechaInicio.getFullYear(),
        fechaInicio.getMonth(),
        fechaInicio.getDate()
    );

    const fechaActual = new Date(
        hoy.getFullYear(),
        hoy.getMonth(),
        hoy.getDate()
    );

    const diferencia = fechaActual - inicio;
    const dias = Math.max(0, Math.floor(diferencia / (1000 * 60 * 60 * 24)));

    document.getElementById("diasJuntos").textContent = dias;
}

actualizarContador();