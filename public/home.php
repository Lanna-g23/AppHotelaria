<?php
    $title = "Home";

    require_once '../config/database.php';
    require_once '../controlles/AuthController.php';
      
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