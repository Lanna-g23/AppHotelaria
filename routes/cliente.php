<?php
    require_once __DIR__ . "/../controlles/ClienteController.php";

    if($_SERVER['REQUEST_METHOD'] === "GET"){
        $data = json_decode(file_get_contents('php://input'), true);
        $id = $data['id'] ?? null;
        if(isset($id)){
            ClienteController::getBydId($conn,$id);
        }else{
<<<<<<< HEAD
            ClienteController::listarTodos($conn);
=======
            ClienteController::getAll($conn);
>>>>>>> 27e06b41d1d2d52b11bd88228369c26bf1bc5d5b
        }
    }
    elseif($_SERVER['REQUEST_METHOD'] === "PUT"){
        $data = json_decode(file_get_contents("php://input"), true);
        $id = $data["id"] ?? null;
<<<<<<< HEAD
        ClienteController::update($conn, $id, $data);
=======
        ClienteController::update($conn,$id, $data);
>>>>>>> 27e06b41d1d2d52b11bd88228369c26bf1bc5d5b
    }

    elseif($_SERVER['REQUEST_METHOD'] === "DELETE"){
        $data = json_decode(file_get_contents("php://input"), true);
        $id = $data["id"] ?? null;
<<<<<<< HEAD
        ClienteController::delete($conn, $id);
=======
        ClienteController::delete($conn,$id);
>>>>>>> 27e06b41d1d2d52b11bd88228369c26bf1bc5d5b
    }

    elseif($_SERVER['REQUEST_METHOD'] === "POST"){
        $data = json_decode(file_get_contents("php://input"), true);
<<<<<<< HEAD
        ClienteController::create($conn, $data);
=======
        ClienteController::create( $conn, $data);
>>>>>>> 27e06b41d1d2d52b11bd88228369c26bf1bc5d5b
    }
?>