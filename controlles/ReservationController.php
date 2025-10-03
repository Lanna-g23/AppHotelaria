<?php
    require_once __DIR__ . "/../models/ReservationModel.php";

class ReservationController{
    public static function create($conn, $data){
        ValidatorController::validate_data($data, ["pedido_id, quarto_id, adicional_id, inicio, fim"]);
            $data["inicio"] = ValidatorController::fix_hours($data['inicio'], 14);
            $data["fim"] = ValidatorController::fix_hours($data["fim"], 12);

            $result = ReservationModel::create($conn, $data);
            if($result){
                return jsonResponse(['message'=> 'Reserva foi criada com sucesso']);
            }else{
            return jsonResponse(['message'=> 'Deu merda'], 400);
            }
        }

        public static function getByPe($conn, $id) {
            $result = ReservationModel::getByPe($conn, $id);
            return jsonResponse($result);
        }
}
?>