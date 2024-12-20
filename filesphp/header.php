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
        <a href="dashbord.php"><h4 class="tags">
          HOME
        </h4></a>
        <h5 class="tags">
            PLAYERS
        </h5>
       
    </div>
    </div>
    <div>
    <div><p class="Dashboard">Dashboard</p></div>
    <div>
    <table id="customers">
  <tr>
    <th>ID</th>
    <th></th>
    <th>Name </th>
    <th>Rating</th>
    <th>Position </th>
    <th>Club</th>
    <th>Nationality</th>
    <th>Pace</th>
    <th>Shooting</th>
    <th>Passing</th>
    <th>Dribbling</th>
    <th>Defending</th>
    <th>Physical</th>
    <th>Modify</th>
    <th>Delet</th>
  </tr>
  <?php foreach($playersAll as $player){ ?>
  <tr>
        <td><?php  echo $player['id'] ?></td>
        <td><img class="player-image1" src="<?php echo $player['photo'] ?>" alt=""></td>
        <td id="name"><?php  echo $player['name'] ?></td>
        <td><?php echo $player['rating'] ?></td>
        <td><?php echo $player['position_player'] ?></td>
        <td><?php echo $player['club_name'] ?></td>
        <td><?php  echo $player['natio_name'] ?></td>
        <td><?php echo $player['pace'] ?></td>
        <td><?php echo $player['shooting'] ?></td>
        <td><?php echo $player['passing'] ?></td>
        <td> <?php echo $player['dribbling'] ?></td>
        <td><?php echo $player['defending'] ?></td>
        <td><?php echo $player['physical'] ?></td>
        <td>
          
          <button class="btn btn-" id="boutton" data-bs-toggle="modal" data-bs-target="#exampleModal1">Modify</button>
  </td>
    </td>
        <td><form action="delete.php" method="post"><input type="hidden" name="idplayer" value="<?php echo $player['id'] ?>">
    <input type="submit" name="submit" value="x" ></form></td>
        <?php } ?>
    
  </tr>
  </table>
    </div>
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
      </div>
    </div>
  </div>
</div>
<?php
if(isset($_POST['submit'])){ ?>
  <script>
    document.getElementById("exampleModal1").style.display = "block";
  </script>
<?php } ?> 
        <script>
          function modifyplayers(){

          }
            
        
                


            
        </script>
    </body>
    </html>