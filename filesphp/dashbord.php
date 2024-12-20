<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="php.css"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

</head>
<body>
    <div class="admin">
    <p class="textadmin">Admin V2 </p>
    </div>
    <?php
    include("data.php");
    ?>
    <div class="full-container">
    <div >
    <div class="Dash-nav">
        <h4 class="tags">
          HOME
        </h4>
        <a href="header.php">
          
          <h5 class="tags">
            PLAYERS
          </h5>
        </a>
        <button type="button" id="boutton"class="btn btn-" data-bs-toggle="modal" data-bs-target="#exampleModal">
       <h5> ADD Nationality </h5>
       </button>
       <button  class="btn btn-" id="boutton" data-bs-toggle="modal" data-bs-target="#exampleModal1">
       <h5>Add Player</h5>
      </button>
    </div>
    </div>
    <div>
    <div><p class="Dashboard">Dashboard</p></div>
    <div class="allcalcullinfo">
      <div class="smallcontainer">
        <img class="team1image"  src="https://cdn1.iconfinder.com/data/icons/soccer-77/64/GOALKEEPER-sports_and_competition-goalkeeping-football_player-soccer_player-1024.png" alt="">
      <p class="counted-value" > 
        <?php echo count($nationalities); ?>
      </p>
      </div>
      <div class="smallcontainer" >
      <img class="team1image" src="https://cdn3.iconfinder.com/data/icons/soccer-14/33/soccer_team-1024.png" alt="">

      <p class="counted-value"> 
        <?php echo count($Clubs); ?>
      </p>
      </div>
      <div class="smallcontainer">
      <img class="team1image" src="https://getdrawings.com/free-icon-bw/nationality-icon-8.png" alt="">
      <p class="counted-value"> 
       
        <?php echo count($nationalities); ?>
      </p>
      </div>
      <div class="smallcontainer">
        <img class="team1image" src="https://cdn.icon-icons.com/icons2/2070/PNG/512/soccer_player_icon_125840.png" alt="">
      <p class="counted-value"> 
        <?php echo count($playersAll); ?>
      </p>
      </div>
    </div>
    <div class="container">
        <div>
        </div>
       <div class="club">
        <?php foreach($Clubs as $club){ ?>
            <div class="the-club">
            <img class="club-image" src="<?php echo $club['logo'];?>" alt="">
            <p class="club-name"><?php echo $club['club_name']  ; ?></p>
            <h1>X</h1>
        </div> <?php } ?>
       </div>
       <div class="nationalities">
       <?php  foreach($nationalities as $natinalitie){ ?>
            <div class="the-nationalitie">
            <img class="nationalitie-image"  onclick="showplayernatio(this)" src="<?php echo $natinalitie['flag'];?>" alt="">
            <p class="nationalitie-name"><?php echo $natinalitie['natio_name']  ;?></p>
          
        </div> <?php } ?>
    
       </div>
       <div id="players-natio">
        <?php 
        foreach($playersAll as $player){ ?>
            <div class="playerInfo"><div class="playername"> <img class="player-image1" src="<?php echo $player['photo']?>" alt="">
             <h4 class="textinfo"><?php  echo $player['name'];?></h4> </div> <h4 class="position" ><?php echo $player['position_player'] ?></h4>
         <img class="club-image1" src="<?php echo $player['logo']?>" alt=""></div>
        <?php } ?>
        <!-- Button trigger modal -->
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form action="" method="POST">
       <label for="">Natinality name  : </label>
       <input type="text" name="nationame">
       <label for="">Flag  : </label>
       <input type="text" name="flag">
       
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary">ADD New Nationality</button>
        </form>
      </div>
    </div>
  </div>
</div>
<?php 
function addnationality(){
  global $nationalities , $mysql ;        
          if(isset($_POST['flag'])){
          foreach($nationalities as $natio){
              if($natio['natio_name'] != $_POST['nationame'] ){
                $name = $_POST['nationame'];
                $flag = $_POST['flag'] ;
                  $query = "INSERT INTO nationalities (natio_name , flag) values ('$name', '$flag');";
                  $result = mysqli_query($mysql,$query);
                 
              }
            
          }
      }
         
           
      

}

?>
    
       

       </div>
       <div>
       
       </div>
    </div>
    </div>
    </div>
<!-- Button trigger modal -->


<!-- Modal -->
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">ADD Player</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="input">
                    <form action="Ajoute.php" method="post">
                      <label for="">Name: </label>
                      <input type="text" name="name" id="">
                      <label for="">Rating : </label>
                      
                      <input type="number" name="Rating" id="">
                      <label for="">Player Photo : </label>
                      <input type="url" name="image">
                      <label for="">Club : </label>
                      <select name="club" id="">
                        <?php  foreach($Clubs as $club){ ?>
                          <option value="<?php echo $club['club_name']?>"><?php echo $club['club_name']?></option>

                        <?php } ?>
                      </select>
                      <label for="">Nationality : </label>
                      <select name="Nationality" id="">
                      <?php foreach($nationalities as $natio){ ?>
                          <option  value="<?php echo $natio['natio_name'] ?>"><?php echo $natio['natio_name']?></option>
                          <?php } ;?>
                      </select>
                      <select name="position" id="positionshowsed" onclick="positionplayer()">
                      <?php $position = [ 'CB', 'LB', 'RB', 'CDM', 'CM', 'CAM', 'RM', 'LM', 'RW', 'LW', 'ST' ,'GK']; foreach($position as $player){ ?>
                          <option  value="<?php echo $player?>"><?php echo $player?></option>
                          <?php } ;?>
                      </select>
                      <div id="switchposition">    
                        <label for="pace">pace : </label>
                        <input type="number"  name="pace" />
                        <label for="Shooting">Shooting : </label>
                        <input type="number"  name="Shooting" />
                        <label for="passing">passing : </label>
                        <input type="number"  name="passing"/>
                        <label for="dribbling">dribbling : </label>
                        <input type="number"  name="dribbling" />
                        <label for="defending">defending : </label>
                        <input type="number"  name="defending"/>
                        <label for="physical"> physical : </label>
                        <input type="number"  name="physical" />  
                        </div>
                        </div>         
                               
                    </div>
                    
                 </div>
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <a href="header.php"><input type="submit" name="submit"  value="ADD PLAYER"></a>
        </form>
        
      </div>
    </div>
  </div>
</div>
   <script>
    function showplayernatio(nationalitiy){
        let namenatio = nationalitiy.nextElementSibling.innerHTML;
        <?php
        foreach($playersAll as $player){ ?>
        if(namenatio == "<?php echo $player['natio_name'] ?>"){
            document.getElementById("players-natio").innerHTML = 
            `<div class="playerInfo"><div class="playername"> 
            <img class="club-image1" src="<?php echo $player['photo']?>" alt="">
             <h4 class="textinfo"><?php  echo $player['name'];?></h4> </div> <h4 class="textinfo" >
             <?php echo $player['position_player'] ?></h4>
         <img class="club-image" src="<?php echo $player['logo']?>" alt=""></div>`;
        }
        <?php }; ?>
        console.log(<?php echo count($nationalities); ?>)
    }
    function positionplayer(){
      console.log("kascasc");
    let positon ; 
    if(document.getElementById("positionshowsed").value == "GK"){
         positon = `
                        <label for="Diving">Diving : </label>
                        <input type="range"  name="" min="0" max="100"  step="10"/>
                        <label for="Handling">Handling : </label>
                        <input type="range"  name="" min="0" max="100"  step="10"/>
                        <label for="kicking">Kicking : </label>
                        <input type="range"  name="" min="0" max="100"  step="10"/>
                        <label for="reflexes">Reflexes : </label>
                        <input type="range" name="" min="0" max="100"step="10"/>
                        <label for="speed">speed : </label>
                        <input type="range" name="" min="0" max="100" step="10"/>
                        <label for="positioning">positioning : </label>
                        <input type="range"  name="" min="0" max="100" step="10"/>` 
                        document.getElementById("switchposition").innerHTML = positon
    }
    // else {
    //     positon = `<label for="pace">pace : </label>
    //     <input type="range"  name="" min="0" max="100"  step="10"/>
    //     <label for="Shooting">Shooting : </label>
    //     <input type="range"  name="" min="0" max="100"  step="10"/>
    //     <label for="passing">passing : </label>
    //     <input type="range"  name="" min="0" max="100"  step="10"/>
    //     <label for="dribbling">dribbling : </label>
    //     <input type="range"  name="" min="0" max="100"step="10"/>
    //     <label for="defending">defending : </label>
    //     <input type="range"  name="" min="0" max="100" step="10"/>
    //     <label for="physical"> physical : </label>
    //     <input type="range"  name="" min="0" max="100" step="10"/>  `
    //     document.getElementById("switchposition").innerHTML = positon

    // }
}
       
          
   </script>
</body>
</html>