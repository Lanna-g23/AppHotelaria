<?php
    require_once __DIR__ . "/../models/OrderModel.php";

    class PedidosController{
        public static function create($conn, $data){
            ValidatorController::validate_data($data, ["usuario_id", "cliente_id", "pagamento"]);
            $result = OrderModel::create($conn, $data);
            if($result){
                return jsonResponse(['message'=> 'Pedido criado com sucesso']);
            }else{
            return jsonResponse(['message'=> 'Deu merda'], 404);
            }
        }
        
        public static function getAll($conn) {
            $list = OrderModel::getAll($conn);
            return jsonResponse($list);
        }

        public static function getById($conn, $id) {
            $result = OrderModel::getById($conn, $id);
            return jsonResponse($result);
        }
}
?>