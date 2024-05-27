<?php

// Conexión a la base de datos
$db = new PDO("mysql:host=localhost;dbname=pasteleria", "root", "0306000");

// Valida los datos recibidos
if ($_POST) {
    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $edad = $_POST["edad"];
    $telefono = $_POST["telefono"];
    $correo = $_POST["correo"];
    $contraseña = $_POST["contraseña"];

    // Comprueba que los datos son correctos
    if (empty($nombre)) {
        echo "El campo 'Nombre' es obligatorio.";
        exit;
    }

    if (empty($apellido)) {
        echo "El campo 'Apellido' es obligatorio.";
        exit;
    }

    if (empty($edad)) {
        echo "El campo 'Edad' es obligatorio.";
        exit;
    }

    if (empty($telefono)) {
        echo "El campo 'Teléfono' es obligatorio.";
        exit;
    }

    if (empty($correo)) {
        echo "El campo 'Correo' es obligatorio.";
        exit;
    }

    if (empty($contraseña)) {
        echo "El campo 'Contraseña' es obligatorio.";
        exit;
    }

    // Guarda la información en la base de datos
    $query = "INSERT INTO clientes (nombre, apellido, edad, telefono, correo, contraseña) VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = $db->prepare($query);
    $stmt->execute(array($nombre, $apellido, $edad, $telefono, $correo, $contraseña));

    // Si el registro es exitoso, muestra un mensaje
    if ($stmt->rowCount() == 1) {
        echo "Registro exitoso.";
    } else {
        echo "Error al registrar el usuario.";
    }
}

?>
