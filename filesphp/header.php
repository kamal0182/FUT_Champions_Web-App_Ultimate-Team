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
        <td>M</td>
        <td ><form action="delete.php" method="post"><input type="hidden" name="idplayer" value="<?php echo $player['id'] ?>">
    <input type="submit" name="submit" value="x" ></form></td>
        <?php } ?>
    
  </tr>
  </table>
    </div>
        <script>
            
        
                


            
        </script>
    </body>
    </html>