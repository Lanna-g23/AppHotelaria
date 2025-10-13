<?php

require_once __DIR__ . "/../controlles/AuthController.php";


if($_SERVER['REQUEST_METHOD'] === "POST"){
    $op = $segments[2] ?? null;
    $data = json_decode(file_get_contents("php://input"), true);
    
    if($op == "cliente"){

        AuthController::loginClient($conn, $data); 
    
    }elseif ($op == "funcionario") {
        AuthController::login($conn, $data);
    
    }else{
      jsonResponse(['status'=>'Erro', 'message'=>'rota não foi encontrada']);
    }

    AuthController::login($conn, $data);

}
else{
    jsonResponse([
        'status'=>'Erro',
        'message'=>'Método não permitido'
    ], 404);
}

?>