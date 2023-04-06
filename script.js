const btnMostrarMapa = document.getElementById('btnMostrarMapa');
const mapa = document.getElementById('map');

btnMostrarMapa.addEventListener('click', () => {
  if (mapa.classList.contains('oculto')) {
    mapa.classList.remove('oculto');
  } else {
    mapa.classList.add('oculto');
  }
});


/* --- Formulario multi Step --- */

function sig1() {
  document.getElementById("paso2").classList.add("active");
  document.getElementById("paso1").classList.remove("active");
};

function sig2() {
  document.getElementById("paso2").classList.remove("active");
  document.getElementById("paso3").classList.add("active");
};
function sig3() {
  
  document.getElementById("paso3").classList.remove("active");
  document.getElementById("paso4").classList.add("active");

  let nombreCliente = document.getElementById("nombreInput").value;
  let apellidoCliente = document.getElementById("apellidoInput").value;
  let emailCliente = document.getElementById("emailInput").value;
  let telefonoCliente = document.getElementById("telefonoInput").value;
  let provinciaCliente = document.getElementById("provinciaInput").value;
  let localidadCliente = document.getElementById("localidadInput").value;
  let cpCliente = document.getElementById("cpInput").value;
  let sugerenciaCliente = document.getElementById("sugenrenciaInput").value;

  document.getElementById("nombreText").innerHTML = nombreCliente;
  document.getElementById("apellidoText").innerHTML = apellidoCliente;
  document.getElementById("emailText").innerHTML = emailCliente;
  document.getElementById("telefonoText").innerHTML = telefonoCliente;
  document.getElementById("provinciaText").innerHTML = provinciaCliente;
  document.getElementById("localidadText").innerHTML = localidadCliente;
  document.getElementById("cpText").innerHTML = cpCliente;
  document.getElementById("sugerenciasText").innerHTML = sugerenciaCliente;
};

function back1() {
  document.getElementById("paso2").classList.remove("active");
  document.getElementById("paso1").classList.add("active");
};

function back2() {
  document.getElementById("paso3").classList.remove("active");
  document.getElementById("paso2").classList.add("active");
};

function back3() {
  document.getElementById("paso4").classList.remove("active");
  document.getElementById("paso3").classList.add("active");
};

const datosCampos = () => {
  let nombreCliente = document.getElementById("nombreInput").value;
  let apellidoCliente = document.getElementById("apellidoInput").value;
  let emailCliente = document.getElementById("emailInput").value;
  let telefonoCliente = document.getElementById("telefonoInput").value;
  let provinciaCliente = document.getElementById("provinciaInput").value;
  let localidadCliente = document.getElementById("localidadInput").value;
  let cpCliente = document.getElementById("cpInput").value;
  let sugerenciaCliente = document.getElementById("sugenrenciaInput").value;

  document.getElementById("nombreText").innerText = nombreCliente;
  document.getElementById("apellidoText").innerText = apellidoCliente;
  document.getElementById("emailText").innerText = emailCliente;
  document.getElementById("telefonoText").innerText = telefonoCliente;
  document.getElementById("provinciaText").innerText = provinciaCliente;
  document.getElementById("localidadText").innerText = localidadCliente;
  document.getElementById("cpText").innerText = cpCliente;
  document.getElementById("sugerenciasText").innerText = sugerenciaCliente;
}

/* --- Fin Formulario Multi Step --- */