<?php
require_once __DIR__ . "/../models/RoomModel.php";

class RoomController{
    public static function create($conn, $data){
        $camposOb = ["nome", "numero", "qtd_cama_solterio", "qtd_cama_casal", "preco", "disponivel"];
        $erros = [];

        foreach ($camposOb as $campo){
            if (!isset($data[$campo]) || empty($data[$campo])){
                $erros[] = $campo;
            }
        }
        if(!empty($erros)){
            return jsonResponse(['message'=> 'Erro, falta o comando: ' . implode(',', $erros)], 404);
        }

        $result = RoomModel::create($conn, $data);
        if($result){
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
        $buscarId = RoomModel::getById($conn, $id);
        return jsonResponse($buscarId);
    }

     public static function delete($conn, $id){
        $result = RoomModel::delete($conn, $id);
        if ($result){
            return jsonResponse(['message'=>"Quarto excluido com sucesso"]);
        }else{
            return jsonResponse(['message'=>"Erro ao excluir o quarto"], 400);
        }
    }

    public static function update($conn, $id, $data){
        $result = RoomModel::update($conn, $id, $data);
        if($result){
            return jsonResponse(['message'=> 'Quarto atualizado com sucesso']);
        }else{
            return jsonResponse(['message'=> 'Deu merda'], 400);
        }
    }

}

?>