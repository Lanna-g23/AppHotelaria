<?php

    require_once __DIR__ ."/controlles/AuthController.php";
    require_once __DIR__ ."/controlles/PasswordController.php";

    $data = [
        "email"=>"lanna@email.com",
        "password"=>"3131"
    ];

   // AuthControlle::login($conn, $data);



    echo PasswordController::generateHash($data['password']);

    $hash = '$2y$10$n19WuvfOOY9AjMl978VYN.QG45uEph5.GsbB5Rv63CC3MZMXaRUIm';
    echo "<br>";
    echo PasswordController::validateHash($data['password'], $hash);

?>