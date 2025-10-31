<?php
require_once __DIR__ . "/jwt/jwt_include.php";

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

function createToken($user){
    $payload = [
        "iss" => "appHotelaria", //nome do token
        "iat" => time(),
        "exp" => time() + (60 * (60 * 1)),
        "sub" => $user
    ];
    return JWT::encode($payload, SECRET_KET, "HS256");
}

function validateToken($token){
    try{
        $key = new Key(SECRET_KET, "HS256");
        $decode = JWT::decode($token, $key);
        $result = json_decode( json_encode($decode->sub) , true);
        return $result;
    }catch(Exception $error){
        return false;
    }
}
function validateTokenAPI($typeRole){
    $headers = getallheaders();
    if( !isset($headers["Authorization"])){
        jsonResponse(['message'=> "Token ausente"],401);
        exit;
}
    $token = str_replace("Bearer ", "", $headers["Authorization"]);
    $user = validateToken($token);
    if(!$user){
        jsonResponse(['message'=> "Token invalido"], 401);
        exit;
    }
    //aqui vai a rota do validar o cargo
    if($user['roles'] != $typeRole){
        jsonResponse(['message'=> "Usuario não autorizado!"],401);
        exit;
    }
    return $user;
}

?>