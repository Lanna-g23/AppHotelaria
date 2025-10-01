<?php
    require_once __DIR__ . "/../models/ClientModel.php";
    require_once __DIR__ . "/../helpers/token_jwt.php";
    require_once "PasswordController.php";

    class ClientController{
        public static function create($conn, $data){
            $data['senha'] = PasswordController::generateHash($data['senha']);
            
            $result = ClientModel::create($conn, $data);
            if($result){
                return jsonResponse(['message'=> 'Cliente foi criado com sucesso']);
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
        public static function loginClient($conn, $data) {
        $data['email'] = trim($data['email']);
        $data['password'] = trim($data['password']);
        
        if (empty($data['email']) || empty($data['password'])) {
            return jsonResponse([
                "status" => "erro",
                "message" => "Preencha todos os campos!"
            ], 401);
        }
 
        $client = ClientModel::clientValidation($conn, $data['email'], $data['password']);
        if ($client) {
            $token = createToken($client);
            return jsonResponse([ "token" => $token ]);
        } else {
            return jsonResponse([
                "status" => "erro",
                "message" => "Credenciais inválidas!"
            ], 401);
        }
    }

        
    }
?>