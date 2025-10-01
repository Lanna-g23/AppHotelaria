<?php
require_once __DIR__ . "/../models/RoomModel.php";
require_once "ValidatorController.php";

class RoomController{
    public static function create($conn, $data){

        $camposObrigatorios = ["nome", "numero", "qtd_cama_casal", "qtd_cama_solteiro", "preco", "disponivel"];
        $erros = [];

        foreach ($camposOb as $campo) {
            if (!isset($data[$campo]) || empty($data[$campo])) {
                $erros[] = $campo;
            }
        }

        if (!empty($erros)) {
            return jsonResponse(['message' => 'Erro, falta o comando: ' . implode(',', $erros)], 404);
        }
        
        $result = RoomModel::create($conn, $data);
        if ($result){
            return jsonResponse(['message'=>"Quarto criado com sucesso"]);
        }else{
            return jsonResponse(['message'=>"Erro ao criar o quarto"], 400);
        }
    }

    public static function getAll($conn){
        $roomList = RoomModel::getAll($conn);
        return jsonResponse($roomList);
    }

      public static function getById($conn, $id){
        if( empty($id) ){
            return jsonResponse(['message'=>"Erro, Falta o campo: id"], 405);
        }

        $buscarId = RoomModel::getById($conn, $id);
        return jsonResponse($buscarId);
    }

     public static function delete($conn, $id){
        if( empty($id) ){
            return jsonResponse(['message'=>"Erro, Falta o campo: id"], 406);
        }

        $result = RoomModel::delete($conn, $id);
        if ($result){
            return jsonResponse(['message'=>"Quarto excluido com sucesso"]);
        }else{
            return jsonResponse(['message'=>"Erro ao excluir o quarto"], 409);
        }
    }

    public static function update($conn, $id, $data){
        $result = RoomModel::update($conn, $id, $data);
        if($result){
            return jsonResponse(['message'=> 'Quarto atualizado com sucesso']);
        }else{
            return jsonResponse(['message'=> 'Deu merda'], 403);
        }
    }

    public static function get_available($conn, $data){
        $result = RoomModel::get_available($conn, $data);
        if($result){
            return jsonResponse(['Quartos'=> $result]);
        }else{
            return jsonResponse(['message'=> 'asdasdasd'], 401);
        }
    }

}

?>