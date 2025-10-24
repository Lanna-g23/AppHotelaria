<?php

class RoomModel{
    public static function create($conn, $data){
        $sql = "INSERT INTO quartos (nome, numero, qtd_cama_solteiro, qtd_cama_casal, preco, disponivel) VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("siiidi", 
            $data["nome"],
            $data["numero"],
            $data["qtd_solteiro"],
            $data["qtd_casal"],
            $data["preco"],
            $data["disponivel"]
        );

        if ($stmt->execute()){
            return $conn->insert_id;
        }
        return false;
    }

    public static function getAll($conn){
        $sql = "SELECT * FROM quartos";
        $result = $conn->query($sql);
        return $result->fetch_all(MYSQLI_ASSOC);
    }

    public static function getById($conn, $id){
        $sql = "SELECT * FROM quartos WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        return $stmt->get_result()->fetch_assoc();
    }

    public static function delete($conn, $id){
        $sql = "DELETE FROM quartos WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        return $stmt->execute();
}
public static function update($conn, $id, $data){
        $sql = "UPDATE quartos SET nome = ?, numero = ?, qtd_cama_solteiro = ?, qtd_cama_casal = ?, preco = ?, disponivel = ? WHERE id = ?";

        $stmt = $conn->prepare($sql);
        $stmt->bind_param("siiidii", 
            $data["nome"],
            $data["numero"],
            $data["qtd_solteiro"],
            $data["qtd_casal"],
            $data["preco"],
            $data["disponivel"],
            $id
        );
        return $stmt->execute();
    }

    public static function get_available($conn,$data){
        $sql = "SELECT *
        FROM quartos
        WHERE quartos.disponivel = 1
        AND (quartos.qtd_cama_casal * 2 + quartos.qtd_cama_solteiro) >= ? AND NOT EXISTS ( SELECT 1 FROM reservas r WHERE r.quarto_id = quartos.id AND r.inicio < ? AND r.fim > ?)";
        
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("iss", 
            $data["qtd"],
            $data["inicio"],
            $data["fim"],
        );
        $stmt->execute();
        return $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    }

    public static function lockById($conn, $id){
        $sql = "SELECT id FROM quartos WHERE id = ? FOR UPDATE";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $result = $stmt->get_result();
        $row = $result && $result->num_rows > 0;
        $stmt->close();
        return $row;
    }
}

?>