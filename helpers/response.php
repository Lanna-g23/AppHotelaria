<?php
<<<<<<< HEAD
=======

>>>>>>> 27e06b41d1d2d52b11bd88228369c26bf1bc5d5b
function jsonResponse($data, $status=200){
    http_response_code($status);
    header("Content-Type: application/json; charset=utf-8");
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
<<<<<<< HEAD
=======

>>>>>>> 27e06b41d1d2d52b11bd88228369c26bf1bc5d5b
}

?>