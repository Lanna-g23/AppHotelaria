<?php
<<<<<<< HEAD
require_once __DIR__ ."/../controlles/PasswordController.php";
=======
>>>>>>> 27e06b41d1d2d52b11bd88228369c26bf1bc5d5b

class UserModel{

    public static function validateUser($conn, $email, $password){
       // $sql = "SELECT * FROM usuarios WHERE email = ?";

<<<<<<< HEAD
       $sql = "SELECT usuarios.id, usuarios.nome, usuarios.senha, usuarios.email, roles.nome AS roles FROM usuarios JOIN roles ON roles.id = usuarios.role_id WHERE usuarios.email = ?;";
=======
       $sql = "SELECT usuarios.id, usuarios.nome, usuarios.senha, usuarios.email, roles.nome AS roles
FROM usuarios
JOIN roles ON roles.id = usuarios.role_id
WHERE usuarios.email = ?";
>>>>>>> 27e06b41d1d2d52b11bd88228369c26bf1bc5d5b

        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($user = $result->fetch_assoc()){
            if (PasswordController::validateHash($password, $user['senha'])){
                unset($user['senha']);
                return $user;
            }
        }
        return false;
    }
}

?>