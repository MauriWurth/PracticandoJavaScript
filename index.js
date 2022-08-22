let invitados = 0;
let edadInvitados;

while (invitados >= 0) {
  if (prompt('¿Deseas agregar invitados?').toLowerCase() === 'si') {

    let edadIngresada = prompt('Ingrese la edad');

    if ((edadIngresada >= 18) && (edadIngresada <= 100)) {
      // invitados == invitados + 1;
      invitados++;
      alert('Invitación creada correctamente.')

    } else {
      alert('Tu edad no está permitida.')
    }

  } else {
    break;
  }
}

alert('Tienes ' + invitados + ' invitados.');