let eventos = [];


let invitados = [];

let form = document.getElementById("invitadoData");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let nombre = document.getElementById('nombre').value;
  let edad = parseInt(document.getElementById('edad').value);
  let genero = document.getElementById('genero');
  if (genero.value === 'm') {
    genero = 'Masculino'
  } else if (genero.value === 'f') {
    genero = 'Femenino'
  } else {
    genero = 'No está seguro'
  }
  let colaboracion = parseInt(document.getElementById('colaboracion').value);
  if (checkAge(edad)) {
    invitados.push(new Invitado(nombre, edad, genero, colaboracion))
    drawTable();
    showToast();
  } else {
    alert('Tu edad no está permitida.')
  }
})



if (localStorage.getItem("jsonInvitados")) {
  // transformo el objeto a Json
  invitados = JSON.parse(localStorage.getItem("jsonInvitados"));
  drawTable();
  //despues de acceder al dato. la accedo al boton cerrar sesion
}

function checkAge(age) {
  if ((age >= 18) && (age <= 100)) {
    return true;
  } else {
    return false;
  }
}

function Invitado(nombre, edad, genero, colaboracion) {
  this.nombre = nombre;
  this.edad = edad;
  this.genero = genero;
  this.colaboracion = colaboracion;
}

function drawTable() {
  // Dibujando en el HTML
  const table = document.querySelector('table');
  let data = `<tr>
<th>Nombre</th>
<th>Edad</th>
<th>Género</th>
<th>Colaboración</th>
</tr>`;

  for (let invitado of invitados) {
    data += `<tr>
  <td>${invitado.nombre}</td>
  <td>${invitado.edad}</td>
  <td>${invitado.genero}</td>
  <td>${invitado.colaboracion}</td>
</tr>`
  }
  table.innerHTML = data;
}

let btnAddToJSON = document.getElementById('addToJSON');
btnAddToJSON.addEventListener('click', function (e) {
  e.preventDefault();
  let JSONInvitados = JSON.stringify(invitados);
  localStorage.setItem('jsonInvitados', JSONInvitados);
  showSwal('Agregado a la base de datos', 'Fue agregado correctamente', 'success')
});

let btnDeleteJSON = document.getElementById('deleteJSON');
btnDeleteJSON.addEventListener('click', function (e) {
  e.preventDefault();
  showSwal('Eliminar de la base de datos', 'Fue eliminado correctamente', 'error')
});

function showToast() {
  Toastify({
    text: "Se agregó un nuevo invitado.",
    duration: 3000,
    gravity: "top",
    position: "right",
    stopOnFocus: false,
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
    onClick: function () { } // Callback after click
  }).showToast();
}

function showSwal(title, msj, type) {
  Swal.fire({
    title: title,
    text: msj,
    icon: type,
    confirmButtonText: 'Aceptar'
  }).then((result) => {
    if ((result['isConfirmed']) && (type === 'error')) {
      localStorage.clear();
      location.reload();
    }
  });
}



getCurrentDolar();