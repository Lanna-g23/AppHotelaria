<?php
require_once __DIR__ . "/../controlles/RoomController.php";

if($_SERVER['REQUEST_METHOD'] === "GET" ){
   // $data = json_decode(file_get_contents('php://input'), true);
    $id = $segments[2] ?? null;

    if (isset($id)){
        if(is_numeric($id)){
            RoomController::getById($conn, $id);
        }else{
            //pode dar error depois
             $data = [
                "data_inicio"=>isset($_GET['inicio']) ? $_GET['inicio'] : null,
                "data_fim"=>isset($_GET['fim']) ? $_GET['fim'] : null,
                "qtd"=>isset($_GET['qtd']) ? $_GET['qtd'] : null];
            RoomController::get_available($conn, ["inicio"=>$inicio, "fim"=>$fim, "qtd"=>$qtd]); 
        }
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
    $id = $data['id'] ?? null;
    RoomController::update($conn, $id, $data);

}

elseif($_SERVER['REQUEST_METHOD'] === "DELETE" ){
    $id = $segments[2] ?? null;

    if (isset($id)){
        RoomController::delete($conn, $id);
    }else{
        jsonResponse(['message' => "ID do quarto é obrigatório"], 400);
    }
}else{
    jsonResponse([
        'status'=>'Erro',
        'message'=>'Método não permitido'
    ], 405);
}

?>