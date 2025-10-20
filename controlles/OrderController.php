<?php

require_once __DIR__ . "/../models/OrderModel.php";
require_once __DIR__ . "/../controlles/ValidatorController.php";

class OrderController {
    public static function create($conn, $data){

        //corrir 
        ValidatorController::validate_data($data, ["usuario_id", "cliente_id", "pagamento"]);
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
        $data['usuario_id'] = isset($data['usuario_id']) ? $data['usuario_id'] :null;
        ValidatorController::validate_data($data, ["cliente_id", "pagamento", "quartos"]);

        foreach ($data['quartos'] as $quarto) {
            ValidatorController::validate_data($quarto, ["id", "inicio", "fim"]);
            $quarto['inicio'] = ValidatorController::fix_hours($quarto['inicio'], 14);
            $quarto['fim'] = ValidatorController::fix_hours($quarto['fim'], 12);
    }
    if(count($data['quartos']) == 0){
            jsonResponse(['message'=> 'Não existe existentes'], 400);
            exit;
        }
        try {
            $resultado = OrderModel::createOrder($conn, $data);
            return jsonResponse(['message' => $resultado]);
            
        } catch (\Throwable $error) {
            return jsonResponse(['message'=>$error->getMessage()], 500);
        }
    }
}
?>