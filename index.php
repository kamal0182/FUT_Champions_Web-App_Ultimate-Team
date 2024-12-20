<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="./src/assets/style.css" />
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
  </head>
  <link rel="stylesheet" href="./src/players.json">
  <body>
    <img src="https://www.freelogovectors.net/wp-content/uploads/2018/03/real_madrid_cub_de_futbol-logo.png" alt="">
    <div>

         <h1 class="logo">YOUNES ULTIMATE TEAM</h1>
    </div>
    <div class="area-container">
        <div class="erea">
          <div id="gk" class="player">
              <img class="cardimage" src="./src/assets/Icons/placeholder-card-normal.png" alt="" onclick="showselectedplayer(this)">
              <div id="position">GK</div>
              <div class="plusicon" >
                  <svg class="" width="30%" height="30%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0BB04D"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 12H12M15 12H12M12 12V9M12 12V15" stroke="#0BB04D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z" stroke="#0BB04D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </div>
          </div>
          <div id="cb1" class="player">
                <img class="cardimage" src="./src/assets/Icons/placeholder-card-normal.png" alt=""  onclick="showselectedplayer(this)"  >
                <div id="position">
                    
                </div>
              <div class="plusicon">
                  <svg class="" width="30%" height="30%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0BB04D"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 12H12M15 12H12M12 12V9M12 12V15" stroke="#0BB04D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z" stroke="#0BB04D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </div>
          </div>
          <div id="cb2" class="player" >
              <img class="cardimage" src="./src/assets/Icons/placeholder-card-normal.png" alt="" onclick="showselectedplayer(this)" >
              <div id="position">
              </div>
              <div class="plusicon">
                  <svg class="" width="30%" height="30%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0BB04D"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 12H12M15 12H12M12 12V9M12 12V15" stroke="#0BB04D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z" stroke="#0BB04D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </div>
          </div>
          <div id="rb" class="player">
              <img class="cardimage" src="./src/assets/Icons/placeholder-card-normal.png" alt="" onclick="showselectedplayer(this)">
              <div id="position">
              </div>
              <div class="plusicon">
                  <svg class="" width="30%" height="30%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0BB04D"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 12H12M15 12H12M12 12V9M12 12V15" stroke="#0BB04D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z" stroke="#0BB04D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </div>
        </div>
          <div id="lb" class="player">
              <img class="cardimage" src="./src/assets/Icons/placeholder-card-normal.png" alt="" onclick="showselectedplayer(this)">
              <div id="position">
                
              </div>
              <div class="plusicon">
                  <svg class="" width="30%" height="30%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0BB04D"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 12H12M15 12H12M12 12V9M12 12V15" stroke="#0BB04D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z" stroke="#0BB04D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </div>
          </div>
          <div id="cmf3" class="player">
              <img class="cardimage" src="./src/assets/Icons/placeholder-card-normal.png" alt="" onclick="showselectedplayer(this)">
              <div id="position">
               

              </div>
              <div class="plusicon">
                  <svg class="" width="30%" height="30%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0BB04D"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 12H12M15 12H12M12 12V9M12 12V15" stroke="#0BB04D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z" stroke="#0BB04D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </div>
          </div>
          <div id="cmf1" class="player">
              <img class="cardimage" src="./src/assets/Icons/placeholder-card-normal.png" alt="" onclick="showselectedplayer(this)">
              <div id="position">
              </div>
              <div class="plusicon">
                  <svg class="" width="30%" height="30%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0BB04D"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 12H12M15 12H12M12 12V9M12 12V15" stroke="#0BB04D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z" stroke="#0BB04D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </div>
          </div>
          <div id="cmf2" class="player" >
              <img class="cardimage" src="./src/assets/Icons/placeholder-card-normal.png" alt="" onclick="showselectedplayer(this)">
              <div id="position">

              </div>
              <div class="plusicon">
                  <svg class="" width="30%" height="30%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0BB04D"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 12H12M15 12H12M12 12V9M12 12V15" stroke="#0BB04D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z" stroke="#0BB04D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </div>
          </div>
          <div id="rwf" class="player" >
              <img class="cardimage" src="./src/assets/Icons/placeholder-card-normal.png" alt=""  onclick="showselectedplayer(this)">
              <div id="position">

              </div>
              <div class="plusicon">
                  <svg class="" width="30%" height="30%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0BB04D"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 12H12M15 12H12M12 12V9M12 12V15" stroke="#0BB04D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z" stroke="#0BB04D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </div>
          </div>
          <div id="lwf" class="player">
              <img class="cardimage" src="./src/assets/Icons/placeholder-card-normal.png" alt="" onclick="showselectedplayer(this)">
              <div id="position">
              </div>
              <div class="plusicon">
                  <svg class="" width="30%" height="30%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0BB04D"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 12H12M15 12H12M12 12V9M12 12V15" stroke="#0BB04D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z" stroke="#0BB04D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </div>
          </div>
          <div id="st" class="player">
              <img class="cardimage" src="./src/assets/Icons/placeholder-card-normal.png" alt="" onclick="showselectedplayer(this)">
              <div id="position">

              </div>
              
              <div class="plusicon">
                  <svg class="" width="30%" height="30%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0BB04D"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 12H12M15 12H12M12 12V9M12 12V15" stroke="#0BB04D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z" stroke="#0BB04D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </div>
          </div>
          
      </div>
      
      
      <div id="eria-player-info">
        <div class="eria-info" style="display: none;">
            
             </div >
             <div class="inputs-info" id="input-info">
                 <select  name="" id="tactics" onclick="gettactic()">
                     <option value="343" >3-4-3</option>
                     <option value="442">4-4-2</option>
                     <option value="532">5-3-2</option>
                     <option value="433" selected>4-3-3</option>
                 </select>
                

            
      </div>  
      </div>
    </div>
   <!--  -->
 
    
  </div>
  <div id="changes" class="changes">
  </div>
  <div>
    <h1></h1>
      <div class="display-all-players">
          <div id="addplayertoteam"  class="addplayertoteam">
        </div >
    </div>
  </div>
 <div class="display-all-pallayers-found">
    <h1  onclick="allplayers()" id="showallplayer"> + </h1>
    <div  id="allplayers">
    <div class="contain-show-btn-content">
        <button  >Show all players</button>
    </div>
    <div class="contain-show-all">
    </div>
    </div></div>

    <script src="https://cdn.tailwindcss.com"></script>
  <script src="./src/index.js"></script>
  </body>
</html>
