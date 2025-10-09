<?php

use LDAP\Result;
require_once __DIR__ . "/../models/OrderModel.php";
require_once "ValidatorController.php";

class OrderController {
    public static function create($conn, $data){
        ValidatorController::validate_data($data, ["cliente_id", "pagamento", "quartos"]);
        $result = OrderModel::create($conn, $data);
        if ($result) {
            return jsonResponse(['message' => 'Pedido criado com sucesso']);
        } else {
            return jsonResponse(['message' => 'Deu merda'], 400);
        }
    }
    public static function getAll($conn){
        $list = OrderModel::getAll($conn);
        return jsonResponse($list);
    }

    public static function getById($conn, $id){
        $result = OrderModel::getById($conn, $id);
        return jsonResponse($result);
    }

    public static function createOrder($conn, $data){
        $data ["usuario_id"] = isset($data['usuario_id']) ? $data['usuario_id'] :null;
        
        ValidatorController::validate_data($data, ["cliente_id", "pagamento", "quartos"]);

        foreach ($data['quartos'] as $quartos) {
            ValidatorController::validate_data($quartos, ["id", "inicio", "fim"]);
        }
        if (count($data["quartos"]) == 0) {
            return jsonResponse(["message"=> 'Não existe reservas'], 400);
    }
}
}

?>