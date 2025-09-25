<?php
require_once  __DIR__ . "/../models/AdicionalModel.php";

class AdicionalController{
        public static function create($conn, $data){
            $result = AdicionalModel::create($conn, $data);
            if($result){
                return jsonResponse(['message'=> 'Adicionais criados com sucesso']);
            }else{
                return jsonResponse(['message'=> 'Deu merda'], 400);
            }
        }
<<<<<<< HEAD
        public static function listarTodos($conn){
            $listarAdicional = AdicionalModel::listarTodos($conn);
=======
        public static function getAll($conn){
            $listarAdicional = AdicionalModel::getAll($conn);
>>>>>>> 27e06b41d1d2d52b11bd88228369c26bf1bc5d5b
            return jsonResponse($listarAdicional);
        }

        public static function getById($conn, $id){
            $listarporId = AdicionalModel::getById($conn, $id);
            return jsonResponse($listarporId);
        }

        public static function delete($conn, $id){
            $result = AdicionalModel::delete($conn, $id);
            if($result){
                return jsonResponse(['message'=> 'Adicionais deletado com sucesso']);
            }else{
                return jsonResponse(['message'=> 'deu erro'],404);
            }
        }

        public static function update($conn, $id, $data){
            $result = AdicionalModel::update($conn, $id, $data);
            if($result){
                return jsonResponse(['message'=> 'Adicional atualizado com sucesso.']);
            }else {
                return jsonResponse(['message'=> 'Deu erro'],404);
            }
        }
<<<<<<< HEAD

=======
>>>>>>> 27e06b41d1d2d52b11bd88228369c26bf1bc5d5b
    }
?>