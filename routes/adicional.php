<?php
    require_once __DIR__ . "/../controlles/AdditionalController.php";
    
    if($_SERVER['REQUEST_METHOD'] === "GET"){
        $data = json_decode(file_get_contents("php://input"), true);
        $id = $data["id"] ?? null;
        if(isset($data)){
            AdditionalController::getById($conn, $id);
        }else{
            AdditionalController::getAll($conn);
        }
    }
    elseif($_SERVER['REQUEST_METHOD'] === "POST"){
        $data = json_decode(file_get_contents("php://input"), true);
        AdditionalController::create($conn, $data);
    }
    elseif($_SERVER['REQUEST_METHOD'] === "PUT"){
        $data = json_decode(file_get_contents("php://input"), true);
        $id = $data["id"] ?? null;
        AdditionalController::update($conn, $id, $data);
    }
    elseif($_SERVER['REQUEST_METHOD'] === "DELETE"){
        $data = json_decode(file_get_contents("php://input"), true);
        $id = $data["id"] ?? null;
        AdditionalController::delete($conn, $id);
    }
?>
