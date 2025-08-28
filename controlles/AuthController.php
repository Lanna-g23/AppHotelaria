<?php

    require_once __DIR__ . "/../models/UserModel.php";
    require_once "PasswordController.php";


    class AuthControlle{
        public static function login($conn, $data){
            $data['email'] = trim($data['email']);
            $data['password'] = trim($data['password']);

            //confimar se tem algum vazio
            if(empty($data['email']) || empty($data['password'])){
                return jsonResponse([
                    "status"=>"erro",
                    "message"=>"Preencha todos os campos!!!"
                ], 401);
            }

    $user = UserModel::validateUser($conn, $data['email'], $data['password']);
    if($user){
        return jsonResponse(
            [
                "id"=>$user['id'],
                "nome"=>$user['nome'],
                "email"=>$user['email'],
                "cargo"=>$user['roles']
            ]
        );
    }else{
        return jsonResponse(
            ["resposta"=>"informações incorreta"], 401);
        }
    }
}

?>