<?php
require_once  __DIR__ . "/../models/AdditionalModel.php";

class AdditionalController{
        public static function create($conn, $data){
            $result = AdditionalModel::create($conn, $data);
            if($result){
                return jsonResponse(['message'=> 'Adicionais foi criados com sucesso']);
            }else{
                return jsonResponse(['message'=> 'Deu Erro'], 400);
            }
        }
        public static function getAll($conn){
            $additionaList = AdditionalModel::getAll($conn);
            return jsonResponse($additionaList);
        }

        public static function getById($conn, $id){
            $listId = AdditionalModel::getById($conn, $id);
            return jsonResponse($listId);
        }

        public static function delete($conn, $id){
            $result = AdditionalModel::delete($conn, $id);
            if($result){
                return jsonResponse(['message'=> 'Adicionais foi deletado com sucesso']);
            }else{
                return jsonResponse(['message'=> 'Erro'],404);
            }
        }

        public static function update($conn, $id, $data){
            $resul = AdditionalModel::update($conn, $id, $data);
            if($resul){
                return jsonResponse(['message'=> 'Adicional foi atualizado com sucesso.']);
            }else {
                return jsonResponse(['message'=> 'Erro'],404);
            }
        }

    }
?>