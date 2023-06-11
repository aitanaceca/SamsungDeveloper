<?php
    //EJECUTAR ARCHIVO SQL ANTES DE PROBAR EL FORMULARIO.
    if ($_POST) {
        $name = $_POST['name'];
        $surname = $_POST['surname'];
        $email = $_POST['email'];
    }

    $hostname="localhost";
    $database="samsung_developer";
    $username="root";
    $password="";
    $table_name="usuario";

    $database_connection = new mysqli($hostname, $username, $password, $database);

    if ($database_connection->connect_error) {
        echo "Error al intentar conectar con la base de datos." . $database_connection->connect_error;
        echo '<script>
            alert("Error al intentar conectar con la base de datos.");
            window.location="/"
        </script>';
    }

    $insert_query="INSERT INTO usuarios (nombre, apellido, email)
        VALUES ('$name', '$surname', '$email')";

    if ($database_connection->query($insert_query) === true) {
        echo "Registro completado.";
        echo '<script>
            alert("Registro completado.");
            window.location="/"
        </script>';
    } else {
        echo "Error: " . $insert_query . "<br>" . $database_connection->error;
        echo '<script>
            alert("Error al crear el registro.");
            window.location="/"
        </script>';
    }

    $database_connection->close();
?>