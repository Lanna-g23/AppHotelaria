<?php 
require_once __DIR__ ."/../controlles/PasswordController.php";
require_once __DIR__ ."models/RoomModel.php";

class OrderModel{
    public static function create($conn, $data) {
        $sql = "INSERT INTO pedidos (usuario_id, cliente_id, pagamento) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("iis",
            $data["usuario_id"],
            $data["cliente_id"],
            $data["pagamento"]
        );
        $resultado = $stmt->execute();
        if ($resultado) {
            return $conn->insert_id;
    }
    return false;
}

    public static function getAll($conn) {
        $sql = "SELECT * FROM pedidos";
        $result = $conn->query($sql);
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public static function getById($conn, $id) {
        $sql = "SELECT * FROM pedidos WHERE id= ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        return $stmt->get_result()->fetch_assoc();
    }
    public static function delete($conn, $id){
        $sql = "DELETE FROM pedidos WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        return $stmt->execute();
    }
    public static function update($conn, $data) {
    }

    public static function createOrder($conn, $data) {

        $usuario_id = $data['usuario_id'];
        $cliente_id = $data['cliente_id'];
        $pagamento = $data['pagamento'];
        $reservas = $data['reservas'];
        $reservou = false;

        $conn->begin_transaction(MYSQLI_TRANS_START_READ_WRITE);

        try {
            $order_id = self::create($conn, [
                "usuario_id" => $usuario_id,
                "cliente_id" => $cliente_id,
                "pagamento" => $pagamento,
            ]);
            if (!$order_id){
                throw new RuntimeException("Erro ao criar o pedido");
            }

            foreach ($data['quartos'] as $quartos) {
                $id = $quartos["id"];
                $inicio = $quartos["inicio"];
                $fim = $quartos["fim"];

                if (!RoomModel::lockById($conn, $id)){
                    $reservas[] = "Quarto {$id} indisponivel!";
                    continue;
                }

            }

        } catch (\Throwable $th) {
            try {
                $conn->rollback();
            } catch (\Throwable $th2) {}
            throw $th;
        }
    }
}
?>