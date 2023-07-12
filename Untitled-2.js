
// Función para guardar un nuevo contacto
function guardarContacto() {
  

  // Obtener los valores del formulario
  var nombre = document.getElementById('nombre').value;
  var telefono = document.getElementById('telefono').value;
  console.log("test");
    // Limpiar los campos del formulario
  document.getElementById('nombre').value = '';
  document.getElementById('telefono').value = '';
  alert("Hola "+ nombre + ", tus datos han sido guardados correctamente");

  

  // Hacer una petición al servidor para guardar el nuevo contacto
  // con los valores proporcionados



  
}

