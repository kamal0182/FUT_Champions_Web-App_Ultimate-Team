

<?php 


function addplayer(){
    include ("data.php");

if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $rating = $_POST['Rating'];
    $image = $_POST['image'];
    $club = $_POST['club'];
    $Nationality = $_POST['Nationality'];
    $position = $_POST['position'];
   
    $pace = $_POST['pace'];

    $Shooting =  $_POST['Shooting'];
    $passing = $_POST['passing'];
    $dribbling = $_POST['dribbling'];
    $defending = $_POST['defending'];
    $physical = $_POST['physical'];
    $nplayersdetails = count($playersdetails) + 1;
   
    if($position != "GK"){
        
        foreach($nationalities as $natio){
            if($natio['natio_name'] ==  $Nationality  ) 
            $idnatio = $natio['id'];
        }
        foreach($Clubs as $clubb){
            if($clubb['club_name'] == $club ) 
            $idclub = $clubb['id'];
        }
        
        $query = "INSERT INTO  detail_players values ( '$nplayersdetails' ,  '$pace' , '$Shooting' , '$passing', '$dribbling', '$defending', '$physical' );";
        $result = mysqli_query($mysql,$query);
        $query = "INSERT INTO  players (name , rating , position_player ,  photo, id_nationality , id_club ,id_detail_player ) values ('$name' , '$rating' , 
         '$position' ,  '$image' , '$idnatio',  '$idclub' ,'$nplayersdetails' );";
        $result = mysqli_query($mysql,$query);
        
    }

}
    
}
require_once("dashbord.php");
addplayer();
?> 
