<?php
    require_once __DIR__ . "/../controlles/ClientController.php";

    if( $_SERVER['REQUEST_METHOD'] === "GET" ){
        validateTokenAPI("admin");
        $data = json_decode(file_get_contents('php://input'), true);
        $id = $data['id'] ?? null;
        // $id = $segments[2] ?? null;
        if(isset($id)){
            ClientController::getBydId($conn, $id);
        }else{
            ClientController::getAll($conn);
        }
    }
    elseif( $_SERVER['REQUEST_METHOD'] === "POST" ){
        
        $data = json_decode(file_get_contents("php://input"), true);
        ClientController::create($conn, $data);
    }
    elseif( $_SERVER['REQUEST_METHOD'] === "PUT" ){
        validateTokenAPI("admin");
        $data = json_decode(file_get_contents("php://input"), true);
        $id = $data["id"] ?? null;
        ClientController::update($conn, $id, $data);
    }
    elseif( $_SERVER['REQUEST_METHOD'] === "DELETE" ){
        validateTokenAPI("admin");
        $data = json_decode(file_get_contents("php://input"), true);
        $id = $data["id"] ?? null;
        ClientController::delete($conn, $id);
    }
?>