<?php
require_once __DIR__ . "/../models/RoomModel.php";
require_once __DIR__ . "/ValidatorController.php";
require_once __DIR__ . "/UploadController.php";
require_once __DIR__ . "/../models/PhotoModel.php";

class RoomController{
    public static function create($conn, $data){

        ValidatorController::validate_data($data, ["nome", "numero", "qtd_casal", "qtd_solteiro", "preco", "disponivel"]);

        $result = RoomModel::create($conn, $data);
        if ($result){
            if ($data['fotos']){
                $pictures = UploadController::upload($data['fotos']);
                foreach ($pictures['saves'] as $name){
                    $idPhoto = Photosmodel::create($conn, $name['name']);
                    if ($idPhoto){
                        Photosmodel::createRelationRoom($conn, $result, $idPhoto);
                    }
                }
            }
            return jsonResponse(['message'=>"Quarto criado com sucesso"]);
        }else{
            return jsonResponse(['message'=>"Erro ao criar o quarto"], 404);
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
            return jsonResponse(['message'=>"Erro ao excluir o quarto"], 409);
        }
    }

    public static function update($conn, $id, $data){
        ValidatorController::validate_data($data, ["nome", "numero", "qtd_cama_solteiro", "qtd_cama_casal", "preco", "disponivel"]);
        $result = RoomModel::update($conn, $id, $data);
        if($result){
            return jsonResponse(['message'=> 'Quarto atualizado com sucesso']);
        }else{
            return jsonResponse(['message'=> 'Deu merda'], 403);
        }
    }

    public static function get_available($conn, $data){
        ValidatorController::validate_data($data, ["inicio", "fim", "qtd"]);
        
        $data["inicio"] = ValidatorController::fix_hours($data["inicio"], 14);
        $data["fim"] = ValidatorController::fix_hours($data["fim"], 12);
        
        $result = RoomModel::get_available($conn, $data);
        if($result){
            foreach ($result as & $quarto){
                $quarto['fotos'] = Photosmodel::getByRoomId($conn, $quarto['id']);
            }
            return jsonResponse(['Quartos'=> $result]);
        }else{
            return jsonResponse(['message'=> 'não tem quartos disponiveis'], 401);
        }
        
    }

}

?>