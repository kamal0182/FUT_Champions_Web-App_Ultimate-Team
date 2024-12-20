<?php
include("data.php");
if(isset($_POST['submit'])){
    $id = $_POST['idplayer'];
    
    $query = "DELETE    from players where id = $id ";
   $result1 = mysqli_query($mysql,$query);
   require_once("header.php");
   
}


?>