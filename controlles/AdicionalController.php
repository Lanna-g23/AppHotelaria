<?php
require_once  __DIR__ . "/../models/AdicionalModel.php";
require_once  __DIR__ . "/../models/AdditionalModel.php";

class AdicionalController{
        public static function create($conn, $data){
            $result = AdicionalModel::create($conn, $data);
            $result = AdditionalModel::create($conn, $data);
            if($result){
                return jsonResponse(['message'=> 'Adicionais criados com sucesso']);
            }else{
                return jsonResponse(['message'=> 'Deu merda'], 400);
            }
        }
        
        public static function listarTodos($conn){
            $listarAdicional = AdicionalModel::listarTodos($conn);

        public static function getAll($conn){
            $listarAdicional = AdicionalModel::getAll($conn);
            $listarAdicional = AdditionalModel::getAll($conn);
            return jsonResponse($listarAdicional);
        }

        public static function getById($conn, $id){
            $listarporId = AdicionalModel::getById($conn, $id);
            $listarporId = AdditionalModel::getById($conn, $id);
            return jsonResponse($listarporId);
        }

        public static function delete($conn, $id){
            $result = AdicionalModel::delete($conn, $id);
            $result = AdditionalModel::delete($conn, $id);
            if($result){
                return jsonResponse(['message'=> 'Adicionais deletado com sucesso']);
            }else{
                return jsonResponse(['message'=> 'deu erro'],404);
            }
        }

        public static function update($conn, $id, $data){
            $result = AdicionalModel::update($conn, $id, $data);
            $result = AdditionalModel::update($conn, $id, $data);
            if($result){
                return jsonResponse(['message'=> 'Adicional atualizado com sucesso.']);
            }else {
                return jsonResponse(['message'=> 'Deu erro'],404);
            }
        }
    }
?>
