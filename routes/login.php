<?php

require_once __DIR__ . "/../controlles/AuthController.php";


if($_SERVER['REQUEST_METHOD'] === "POST" ){
    $op
    $data = json_decode(file_get_contents('php://input'), true);
    AuthController::login($conn, $data);
}else{
    jsonResponse([
        'status'=>'erro',
        'message'=>'Método não permitido'
    ], 405);
}

?>