<?php
require_once __DIR__ . "/../controlles/RoomController.php";

if($_SERVER['REQUEST_METHOD'] === "GET" ){
<<<<<<< HEAD
    $data = json_decode(file_get_contents('php://input'), true);
    $id = $data["id"] ?? null;
=======
    $id = $segments[2] ?? null;
>>>>>>> 27e06b41d1d2d52b11bd88228369c26bf1bc5d5b

    if (isset($id)){
        RoomController::getById($conn, $id);
    }else{
        RoomController::getAll($conn);
    }
}

elseif($_SERVER['REQUEST_METHOD'] === "POST" ){
    $data = json_decode(file_get_contents('php://input'), true);
    RoomController::create($conn, $data);

}

elseif($_SERVER['REQUEST_METHOD'] === "PUT" ){
    $data = json_decode(file_get_contents('php://input'), true);
<<<<<<< HEAD
    $id = $data['id'] ?? null;
=======
    $id = $data['id'];
>>>>>>> 27e06b41d1d2d52b11bd88228369c26bf1bc5d5b
    RoomController::update($conn, $id, $data);

}

elseif($_SERVER['REQUEST_METHOD'] === "DELETE" ){
<<<<<<< HEAD
    $id = $data["id"] ?? null;
=======
    $id = $segments[2] ?? null;
>>>>>>> 27e06b41d1d2d52b11bd88228369c26bf1bc5d5b

    if (isset($id)){
        RoomController::delete($conn, $id);
    }else{
        jsonResponse(['message' => "ID do quarto é obrigatório"], 400);
    }
<<<<<<< HEAD
}else{
    jsonResponse([
        'status'=>'erro',
        'message'=>'Método não permitido'
    ], 405);
}


=======
}





>>>>>>> 27e06b41d1d2d52b11bd88228369c26bf1bc5d5b
?>