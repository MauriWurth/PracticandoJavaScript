let invitados = 0;

while (invitados >= 0){
  if (prompt('¿Deseas agregar invitados?').toLowerCase() === 'si') {

    let edadIngresada = parseInt(prompt('Ingrese la edad'));

    if (checkAge(edadIngresada)) {
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

function checkAge(age){
  if ((age >= 18) && (age <= 100)) {
    return true;
  } else {
    return false;
  }
}

