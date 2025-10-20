<?php
    require_once __DIR__ . "/../models/UserModel.php";
    require_once __DIR__ . "/../helpers/token_jwt.php";
    require_once __DIR__ . "/../models/ClientModel.php";
    require_once __DIR__ . "/../controlles/ValidatorController.php";
    require_once __DIR__ . "/../controlles/PasswordController.php";
   
    class AuthController{
        public static function login($conn, $data){
            ValidatorController::validate_data($data, ["email, senha"]);
            
            $data['email'] = trim($data['email']);
            $data['senha'] = trim($data['password']);

            //confimar se tem algum vazio
            if(empty($data['email']) || empty($data['password'])){
                return jsonResponse([
                    "status"=>"Erro",
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
                    "message" => "credenciais invalidas!!"], 404);
                }

            }
    public static function loginClient($conn, $data){
      ValidatorController::validate_data($data, ["email, password"]);
        // Confirmar se tem algum campo vazio

        $data['email'] = trim($data['email']);
        $data['senha'] = trim($data['password']);

        if (empty($data['email']) || empty($data['password'])) {
            return jsonResponse(
                [
                    "status" => "Erro",
                    "message" => "Preencha todos os campos"

                ],400);
        }

        $user = ClientModel::validateUserLogin($conn, $data['email'], $data['password']);
        if ($user) {
            $token = createToken($user);
            return jsonResponse(["token" => $token]);
        } else {
            return jsonResponse(
                [
                    "reposta" => "Erro",
                    "message" => "Credenciais invalidas"

                ],401);
        }
    }
}
?>