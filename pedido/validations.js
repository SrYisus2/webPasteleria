function validateForm() {
    var tamaño = document.getElementById("Tamaño").value;
    var sabor = document.getElementById("sabor").value;
    var diseño = document.getElementById("Diseño").value;
    var precio = document.getElementById("Precio").value;
    var envio = document.getElementById("Envio").value;

    // Validación de solo letras para tamaño, sabor y diseño
    var letrasAcentosRegex = /^[A-Za-z\u00C0-\u017F\s]+$/;
    if (!letrasAcentosRegex.test(tamaño)) {
        alert("Por favor, ingrese solo letras para el tamaño del pastel");
        return false;
    }
    if (!letrasAcentosRegex.test(sabor)) {
        alert("Por favor, ingrese solo letras para el sabor del pastel");
        return false;
    }
    if (!letrasAcentosRegex.test(diseño)) {
        alert("Por favor, ingrese solo letras para el diseño del pastel");
        return false;
    }
    
    // Validación de solo números para precio
    var precioRegex = /^\d+(\.\d{1,2})?$/;
    if (!precioRegex.test(precio)) {
        alert("Por favor, ingrese solo números para el precio del pastel");
        return false;
    }
    
    // Validación de 'si' o 'no' para envío
    var envioRegex = /^(si|SI|no|NO)$/;
    if (!envioRegex.test(envio)) {
        alert("Por favor, ingrese 'si' o 'no' para el envío");
        return false;
    }
    
    // Aquí puedes realizar otras acciones como enviar el formulario, etc.
      // Mostrar mensaje de éxito
      alert("Registro exitoso. ¡Gracias!");

      // Restablecer el formulario si es necesario
      document.getElementById("Tamaño").value = "";
      document.getElementById("sabor").value = "";
      document.getElementById("Diseño").value = "";
      document.getElementById("Precio").value = "";
      document.getElementById("Envio").value = "";
  
      
    return true;
}
