<?php
    require_once __DIR__ . "/../controlles/AdicionalController.php";
    
    if($_SERVER['REQUEST_METHOD'] === "GET"){
        $data = json_decode(file_get_contents("php://input"), true);
        $id = $data["id"] ?? null;
        if(isset($data)){
            AdicionalController::getById($conn, $id);
        }else{
<<<<<<< HEAD
            AdicionalController::listarTodos($conn);
=======
            AdicionalController::getAll($conn);
>>>>>>> 27e06b41d1d2d52b11bd88228369c26bf1bc5d5b
        }
    }
    
    elseif($_SERVER['REQUEST_METHOD'] === "POST"){
        $data = json_decode(file_get_contents("php://input"), true);
        AdicionalController::create($conn, $data);
    }

    elseif($_SERVER['REQUEST_METHOD'] === "PUT"){
        $data = json_decode(file_get_contents("php://input"), true);
        $id = $data["id"] ?? null;
        AdicionalController::update($conn, $id, $data);
    }

    elseif($_SERVER['REQUEST_METHOD'] === "DELETE"){
        $data = json_decode(file_get_contents("php://input"), true);
        $id = $data["id"] ?? null;
        AdicionalController::delete($conn, $id);
    }
?>