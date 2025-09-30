<?php

    require_once __DIR__ .'/controlles/AuthController.php';
    require_once __DIR__ .'/controlles/RoomController.php';
    require_once __DIR__ .'/controlles/PasswordController.php';
    require_once __DIR__ .'/helpers/token_jwt.php';
    require_once __DIR__ .'/models/RoomModel.php';
    require_once __DIR__ .'/controlles/ClientController.php';
    require_once __DIR__ .'/controlles/AdicionalController.php';
/*
    $data = [
        "nome" => "Quarto Supremo",
        "numero" => 250,
        "qtd_solteiro" => 1,
        "qtd_casal" => 1,
        "preco" => 350,
        "disponivel" => 1
    ];*/   

   // $data = [
    //    "nome" => "Lua",
    //    "preco" => 200,
    //];

    RoomController::getAll($conn);

   // AuthControlle::login($conn, $data);



    //echo PasswordController::generateHash($data['password']);

    //$hash = '$2y$10$n19WuvfOOY9AjMl978VYN.QG45uEph5.GsbB5Rv63CC3MZMXaRUIm';
   // echo "<br>";
   // echo PasswordController::validateHash($data['password'], $hash);

?>
