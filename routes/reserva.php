<?php
require_once __DIR__ . "/../controlles/ReservationController.php";

if ($_SERVER['REQUEST_METHOD'] === "GET") {
    $data = json_decode(file_get_contents('php://input'), true);
    $id = $data["id"] ?? null;

    if (isset($id)) {
        ReservationController::getByPe($conn, $id);
    } else {
        return jsonResponse(['message'=> 'Deu merda'], 400);
    }
}

elseif ($_SERVER['REQUEST_METHOD'] === "POST") {
    $data = json_decode(file_get_contents('php://input'), true);
    $id = $data['id'] ?? null;
    ReservationController::create($conn, $data);
}

else {
    jsonResponse([
        'status' => 'Erro',
        'message' => 'Metodo não permitido',
    ], 404);
}
?>