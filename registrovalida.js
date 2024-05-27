$(document).ready(function() {
  $("#singUp").click(function() {
      if (registrovalidaForm()) {
          // Connect to the MySQL database and save the information
          $.ajax({
              url: "registro.php",
              type: "POST",
              data: {
                  nombre: $("#nombre").val(),
                  apellido: $("#apellido").val(),
                  edad: $("#edad").val(),
                  telefono: $("#telefono").val(),
                  correo: $("#correo").val(),
                  contraseña: $("#contraseña").val()
              },
              success: function(response) {
                  if (response.success) {
                      alert("Registro exitoso. ¡Gracias!");
                      // Reset the form if needed
                      $("#nombre").val("");
                      $("#apellido").val("");
                      $("#edad").val("");
                      $("#telefono").val("");
                      $("#correo").val("");
                      $("#contraseña").val("");
                  } else {
                      // Error registering the user
                      alert(response.error);
                  }
              },
              error: function(error) {
                  alert("Error al enviar los datos");
              }
          });
      }
  });
});

function registrovalidaForm() {
  // Valida que todos los campos del formulario estén llenos
  var camposVacios = false;

  if ($("#nombre").val() == "") {
      camposVacios = true;
      $("#nombre").addClass("error");
  } else {
      $("#nombre").removeClass("error");
  }

  if ($("#apellido").val() == "") {
      camposVacios = true;
      $("#apellido").addClass("error");
  } else {
      $("#apellido").removeClass("error");
  }

  if ($("#edad").val() == "") {
      camposVacios = true;
      $("#edad").addClass("error");
  } else {
      $("#edad").removeClass("error");
  }

  if ($("#telefono").val() == "") {
      camposVacios = true;
      $("#telefono").addClass("error");
  } else {
      $("#telefono").removeClass("error");
  }

  if ($("#correo").val() == "") {
      camposVacios = true;
      $("#correo").addClass("error");
  } else {
      $("#correo").removeClass("error");
  }

  if ($("#contraseña").val() == "") {
      camposVacios = true;
      $("#contraseña").addClass("error");
  } else {
      $("#contraseña").removeClass("error");
  }

  // Devuelve true si todos los campos están llenos
  return !camposVacios;
}
