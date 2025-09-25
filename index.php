<?php
require_once "config/database.php";
require_once "helpers/response.php";


if($erroDB){
    echo "erro na conexao";
    exit;
}


$uri = Strtolower(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));
$method = $_SERVER['REQUEST_METHOD'];

$baseFolde = Strtolower(basename(dirname(__FILE__)));
$uri = str_replace("/$baseFolde","", $uri);
$segments = explode("/", trim($uri, "/") );

$route = $segments[0] ??  null;
$subRoute = $segments[1] ??  null;


if($route != "api"){

    /*vão fica mudando*/ 
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 27e06b41d1d2d52b11bd88228369c26bf1bc5d5b
    require __DIR__ . "/public/index.html";

   //vão fica mudando
   //require "teste.php";
<<<<<<< HEAD
=======
=======
   //require __DIR__ . "/public/index.html";

   //vão fica mudando
   require "teste.php";
>>>>>>> 621906bcdeb47591c987f029762fd38643463df6
>>>>>>> 27e06b41d1d2d52b11bd88228369c26bf1bc5d5b

    exit;
}
//back-end para rotas de requição (endpoint)
elseif ($route === "api"){
<<<<<<< HEAD
    if (in_array($subRoute, ["login", "rooms", "cliente", "adicional", "reserva", "pedido"])){
        require "routes/${subRoute}.php";
    }else{
    
        return jsonResponse(['message'=>'Rota da API não encontrada'], 404);
    }    
    exit;
    }else{
        echo "404 pagina não encontrada";
        exit;
    }
=======
    if (in_array($subRoute, ["login", "rooms", "cliente", "adicional"] )){
        require "routes/${subRoute}.php";
    }else{
        return jsonResponse(['message'=>'Rota da API não encontrada'], 404);
    }    
    exit;
}else{
    echo "404 pagina não encontrada";
    exit;
}
>>>>>>> 27e06b41d1d2d52b11bd88228369c26bf1bc5d5b

?>