let invitados = [];

while (invitados.length >= 0){
  if (prompt('¿Deseas agregar invitados?').toLowerCase() === 'si') {

    let nombreIngresada = prompt('Ingrese el nombre:');
    let edadIngresada = parseInt(prompt('Ingrese la edad:'));
    let generoIngresada = prompt('Ingrese el género:');
    let colaboracionIngresada = parseInt(prompt('Ingrese la colaboración:'));


    if (checkAge(edadIngresada)) {
      invitados.push(new Invitado(nombreIngresada,edadIngresada,generoIngresada,colaboracionIngresada))
      alert('Invitación creada correctamente.')
    } else {
      alert('Tu edad no está permitida.')
    }

   } else {
    break;
  }
    
}



let termino;
if (invitados.length === 1){
  termino = 'mesa'
} else {
  termino = 'mesas'
}
console.table(invitados);
console.log(`Se van a necesitar en total ${Math.ceil(invitados.length/6)} ${termino}.`);
const totalColaboracion = invitados.reduce(
  (previousValue, currentValue) => previousValue + currentValue.colaboracion,
  0
);



console.log(`total colaboración ${totalColaboracion} `);

function checkAge(age){
  if ((age >= 18) && (age <= 100)) {
    return true;
  } else {
    return false;
  }
}

function Invitado(nombre, edad, genero, colaboracion){
  this.nombre = nombre;
  this.edad = edad;
  this.genero = genero;
  this.colaboracion = colaboracion;
}