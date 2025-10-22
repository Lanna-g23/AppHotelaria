<?php
    require_once __DIR__ . "/../models/ClientModel.php";
    require_once __DIR__ . "/../helpers/token_jwt.php";
    require_once "PasswordController.php";
    require_once __DIR__ . "/AuthController.php";

    class ClientController{
        public static function create($conn, $data){
            ValidatorController::validate_data($data, ["email, senha", "cpf", "telefone"]);
            
            $login = [
                "email" => $data['email'],
                "senha" => $data['password']];
            $data['password'] = PasswordController::generateHash($data['password']);
            $result = ClientModel::create($conn, $data);
            if($result){
                AuthController::loginClient($conn, $login);
            }else{
                return jsonResponse(['message'=> 'Deu Error'], 404);
            }
        }

        public static function getAll($conn){
            $clientList = ClientModel::getAll($conn);
            return jsonResponse($clientList);
        }

        public static function getBydId($conn, $id){
            $listId = ClientModel::getById($conn, $id);
            return jsonResponse($listId);
        }

        public static function delete($conn, $id){
            $result = ClientModel::delete($conn, $id);
            if($result){
                return jsonResponse(["message"=> "Cliente foi deletado com sucesso"]);
            }else{
                return jsonResponse(["message"=> "Falha no deletar"],404);
            }
        }
        public static function update($conn, $id, $data){
            $result = ClientModel::update($conn, $id, $data);
            if($result){
                return jsonResponse(["message"=> "Cliente foi atualizado com sucesso"]);
            }else{
                return jsonResponse(["message"=> "Falha ao atualizar o cliente"], 404);
            }
        }   
    }
?>