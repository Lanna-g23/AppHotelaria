<?php
    require_once "../config/database.php";
    require_once "../controlles/AuthController.php";
    $title = "Home";

    $data = [
        "email"=>"lanna@email.com",
        "password"=>"3131"
    ];

    AuthControlle::login($conn, $data);

?>

    <h1>Home</h1>

<?php
    require_once 'utils/rodape.php'
?>
