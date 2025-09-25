<?php
    $title = "Home";

    require_once '../config/database.php';
<<<<<<< HEAD
    require_once '../controlles/AuthController.php';
=======
    require_once '../controllers/AuthController.php';
>>>>>>> 27e06b41d1d2d52b11bd88228369c26bf1bc5d5b
      
    $data = [ 
        "email"=>"lanna@email.com",
        "senha"=>"3131"
    ];

    AuthController::login($conn, $data);
?>
    <h1>Home</h1>
    
<?php
    require_once 'utils/rodape.php';
?>