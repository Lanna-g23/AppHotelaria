<?php
    require_once __DIR__ . "/../models/ClientModel.php";

    class ClienteController{
        public static function create($conn, $data){
<<<<<<< HEAD
            $data['senha'] = PasswordController::generateHash($data['senha']);

=======
>>>>>>> 27e06b41d1d2d52b11bd88228369c26bf1bc5d5b
            $result = ClientModel::create($conn, $data);
            if($result){
                return jsonResponse(['message'=> 'Cliente criado com sucesso']);
            }else{
                return jsonResponse(['message'=> 'Deu merda'], 400);
            }
        }

<<<<<<< HEAD
        public static function listarTodos($conn){
            $clienteList = ClientModel::listarTodos($conn);
            return jsonResponse($clienteList);
=======
        public static function getAll($conn){
            $listaClientes = ClientModel::getAll($conn);
            return jsonResponse($listaClientes);
>>>>>>> 27e06b41d1d2d52b11bd88228369c26bf1bc5d5b
        }

        public static function getBydId($conn, $id){
            $listarporId = ClientModel::getById($conn, $id);
            return jsonResponse($listarporId);
        }

        public static function delete($conn, $id){
            $result = ClientModel::delete($conn, $id);
            if($result){
                return jsonResponse(['message'=> 'Cliente deletado com sucesso']);
            }else{
                return jsonResponse(['message'=> 'Falha ao deletar'],400);
            }
        }
        public static function update($conn, $id, $data){
            $result = ClientModel::update($conn, $id, $data);
            if($result){
                return jsonResponse(['message'=> 'Cliente atualizado com sucesso']);
            }else{
                return jsonResponse(['message'=> 'Falha ao atualizar o cliente'], 400);
            }
        }
    }
?>