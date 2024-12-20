
<?php
   $service = "localhost";
   $servarname  = "root";
   $password = "kamal12345";
   $mysql = mysqli_connect($service,$servarname,$password,"ultimate_tame");
   if(!$mysql){
    echo 'not connected';
   }
   $nationalities = [];

   
    $query = " SELECT   *   from nationalities";
    $result = mysqli_query($mysql, $query);
    $nationalities = [];
    while($row = mysqli_fetch_assoc($result)){
    $nationalities[] = $row ;
   }

  

   $query = "SELECT  *  from clubs";
   $result1 = mysqli_query($mysql,$query);
   $Clubs = [] ;
    while($row = mysqli_fetch_assoc($result1)){
        $Clubs[] =  $row;
    }
   $query = "SELECT  *  from players";
   $result1 = mysqli_query($mysql,$query);
   $players = [];
   while($row = mysqli_fetch_assoc($result1)){
    $players[]  =  $row ;
   }
   $query = "SELECT  *  from detail_gks";
   $result1 = mysqli_query($mysql,$query);
   $details_gk = [];
   while($row = mysqli_fetch_assoc($result1)){
    $details_gk[]  =  $row ;
   }
   $query = "SELECT  *  from detail_players";
   $result1 = mysqli_query($mysql,$query);
   $detail_players = [];
   while($row = mysqli_fetch_assoc($result1)){
    $detail_players[] =  $row;
   }
   $query = "SELECT  players.id,   players.name , players.rating , players.position_player,  players.photo ,
 nationalities.natio_name , nationalities.flag  ,clubs.club_name ,clubs.logo   , detail_players.pace ,  detail_players.shooting,  detail_players.passing,   detail_players.dribbling,
 detail_players.defending , detail_players.physical
   from players inner join nationalities on players.id_nationality = nationalities.id 
join clubs ON  players.id_club = clubs.id JOIN detail_players on  players.id_detail_player = detail_players.id ;";
   $result = mysqli_query($mysql,$query);
   $playersAll = [];
   while($row = mysqli_fetch_assoc($result)){
    $playersAll[] =  $row;
   }
   $query = "SELECT * from  detail_players";
     $result = mysqli_query($mysql,$query);
     $playersdetails = [];
     while($row = mysqli_fetch_assoc($result)){
      $playersdetails[] =  $row;
     }
//    function formValidation(){
//     if(isset($_POST['name'])){
        
//     }
//    }
//    function add(){
//     foreach($nationalities as natio){

//     }
//     if($_POST['name'] )
//     $query = "INSERT INTO    detail_players";
//    }











