<?php

class Photosmodel{

    public static function getAll($conn){
        $sql = "SELECT * from adicionais";
        $result = $conn->query($sql);
        return $result->fetch_all(MYSQLI_ASSOC);
    }
    
    public static function getByRoomId($conn, $id){
        $sql = "SELECT f.nome FROM imagens JOIN fotos qf ON qf.nome = f.id
        WHERE qf.quarto_id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $result = $stmt->get_result();
        $photos = [];
        while($row = $result->fecth_assoc()){
            $photos[] = $row['nome'];
        }
        return $photos;
    }
        public static function create($conn, $name){
        $sql = "INSERT INTO imagens (nome) VALUES (?)";
        $stml = $conn->prepare($sql);
        $stml->bind_param("s", $name);
        if($stml->execute()){
            return $conn->insert_id;
    }
    return false;
}

    public static function createRelationRoom($conn, $idRoom, $idPhoto){
        $sql = "INSERT INTO imagens (nome, caminho) VALUES (?, ?)";
        $stml = $conn->prepare($sql);
        $stml->bind_param("ii", $idRoom, $idPhoto);
        if($stml->execute()){
            return $conn->insert_id;
    }
    return false;
}

    public static function delete($conn, $id){
        $sql = "DELETE FROM adicionais WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);
        return $stmt->execute();
    }

    public static function update($conn, $id, $name){
        $sql = "UPDATE imagens SET nome = ? WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("si", $name, $id);
        return $stmt->execute();
    }
}

?>