<?php
require_once __DIR__ . "/../controlles/OrderController.php";

if ($_SERVER['REQUEST_METHOD'] === "GET") {
    $data = json_decode(file_get_contents('php://input'), true);
    $id = $data["id"] ?? null;
    //$id = $segments[2] ?? null;

    if (isset($id)) {
        OrderController::getById($conn, $id);
    } else {
        OrderController::getAll($conn);
    }
}elseif($_SERVER['REQUEST_METHOD'] === "POST") {
    $opcao = $segments[2] ?? null;
    $data = json_decode(file_get_contents('php://input'), true);

    if($opcao == "reserva") {
        OrderController::createOrder($conn, $data);
    }else{
        OrderController::create($conn, $data);
    }
}
else {
    jsonResponse([
        'status' => 'erro',
        'message' => 'Metodo não permitido',
    ], 400);
}

?>