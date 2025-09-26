<?php
    require_once __DIR__ . "/../models/ReservationModel.php";

    class ReservationController{
        public static function create($conn, $data){
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