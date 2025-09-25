<?php
<<<<<<< HEAD
    require_once __DIR__ . "/../models/UserModel.php";
    require_once __DIR__ . "/../helpers/token_jwt.php";
    require_once "PasswordController.php";
=======
    require_once "PasswordController.php";

    require_once __DIR__ . "/../models/UserModel.php";
    require_once __DIR__ . "/../helpers/token_jwt.php";
<<<<<<< HEAD
    require_once "PasswordController.php";
=======
>>>>>>> 621906bcdeb47591c987f029762fd38643463df6
>>>>>>> 27e06b41d1d2d52b11bd88228369c26bf1bc5d5b


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
        $token = createToken($user);
        return jsonResponse(["token" => $token]);
    }else{
        return jsonResponse([   
                "reposta" => "Erro",
                "message" => "Credenciais invalidas !!" 
            ], 401);
        }
    }
}

?>