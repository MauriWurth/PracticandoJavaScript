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
    drawTable()
    alert('Invitación creada correctamente.')
  } else {
    alert('Tu edad no está permitida.')
  }
})

// let termino;
// if (invitados.length === 1) {
//   termino = 'mesa'
// } else {
//   termino = 'mesas'
// }
// console.table(invitados);
// console.log(`Se van a necesitar en total ${Math.ceil(invitados.length / 6)} ${termino}.`);
// const totalColaboracion = invitados.reduce(
//   (previousValue, currentValue) => previousValue + currentValue.colaboracion,
//   0
// );

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

function drawTable(){
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
