
let cbleft = document.getElementById("cb1")
let cbright = document.getElementById("cb2")
let rb = document.getElementById("rb")
let lb = document.getElementById("lb")
let cmright = document.getElementById("cmf3")
let cmcnter = document.getElementById("cmf2")
let leftcenter = document.getElementById("cmf1")
let atackright = document.getElementById("rwf")
let atackleft = document.getElementById("lwf")
let atack = document.getElementById("st")
let gk  = document.getElementById("gk")
function gettactic() {
    let tactic = document.getElementById("tactics").value;
    if(tactic == "433"){
        gk.style.gridArea = "gk1"
        cbleft.style.gridArea = "cba"
        cbright.style.gridArea = "cbb"
        rb.style.gridArea = "RB"
        lb.style.gridArea = "lb"
        cmright.style.gridArea = "cmfr"
        cmcnter.style.gridArea = "cmfc"
        leftcenter.style.gridArea= "cmfl"
        atackright.style.gridArea = "rf"
        atackleft.style.gridArea = "lf"
        atack.style.gridArea = "st"
        
    }
     if(tactic == "442"){
        atackright.style.gridArea = "RW"
        atackleft.style.gridArea = "LW"
        rb.style.gridArea = "RB"
        lb.style.gridArea = "lb"
        cmcnter.style.gridArea= "sta"
        atack.style.gridArea = "stb" 
       
    }
   if(tactic == "343"){
                cmcnter.style.gridArea= "cb1"
                cmright.style.gridArea = "cmfr"
                leftcenter.style.gridArea = "cmfl"
                rb.style.gridArea = "RW"
                lb.style.gridArea = "LW"
                atackright.style.gridArea = "rf"
                atackleft.style.gridArea = "lf"
                atack.style.gridArea = "st" 
    }
            if(tactic=="532"){
            cmcnter.style.gridArea= "cb1"
            atackleft.style.gridArea = "cmfc"
            atackleft.children[1].innerHTML = atackleft.style.gridArea.slice(0,2).toUpperCase()
            rb.style.gridArea = "RB"
            lb.style.gridArea = "lb"
            atackright.style.gridArea = "sta"
            atack.style.gridArea = "stb" 
    }
            cbleft.children[1].innerHTML = cbleft.style.gridArea.slice(0,2).toUpperCase()
            cbright.children[1].innerHTML = cbright.style.gridArea.slice(0,2).toUpperCase()
            rb.children[1].innerHTML = rb.style.gridArea.slice(0,2).toUpperCase()
            lb.children[1].innerHTML = lb.style.gridArea.slice(0,2).toUpperCase()
            cmright.children[1].innerHTML = cmright.style.gridArea.slice(0,2).toUpperCase()
            cmcnter.children[1].innerHTML = cmcnter.style.gridArea.slice(0,2).toUpperCase()
            leftcenter.children[1].innerHTML = leftcenter.style.gridArea.slice(0,2).toUpperCase()
            atackright.children[1].innerHTML = atackright.style.gridArea.slice(0,2).toUpperCase()
            atackleft.children[1].innerHTML = atackleft.style.gridArea.slice(0,2).toUpperCase()
            atack.children[1].innerHTML = atack.style.gridArea.slice(0,2).toUpperCase()

            let playerposition  = document.querySelectorAll(".player")
            console.log(document.querySelectorAll(".player"))
            for(let ele of playerposition){
                if(ele.children[0].id == "selectedplayer") { 
                   
                    

                    if(ele.style.gridArea.slice(0,2).toUpperCase() != ele.children[0].children[2].children[0].children[1].innerHTML){
                    
                    
                  
                    const paneLWarning = document.createElement("div");
                    paneLWarning.classList.add("pwarning");
                    paneLWarning.innerHTML = `<spam class="warning">!!!</spam>`
                    ele.children[0].children[2].children[1].appendChild(paneLWarning)
                    // document.getElementById(ele.children[0].id).innerHTML += 
               }
               else{
                    let awrningExist = ele.children[0].children[2].children[1].querySelectorAll('.pwarning');
                    Array.from(awrningExist).forEach(item=>item.innerHTML = ``)
                    
               }
            }
        }
}
fetch("./src/assets/players.json")
.then(response => response.json())
.then(data => showplayers(data.players))
let array ;
function showplayers(playersinfo){
     array = playersinfo
     console.log(array)
}    

function allplayers(){
    
    document.getElementById("allplayers").innerHTML  = ""
    for(let ele of array){
    let jsoninfoplayer = `<div id="selectedplayer" class="imageinfocontainer" >
                            <img class="mainimage" src="./src/assets/Icons/badge_ballon_dor.webp" alt="" onclick="showmoreinfo(this)">
                            <img class="playerimage"  src="${ele.photo}" alt="" >
                            <div class="allinfoplayer">
                            <div class="playerpower">
                            <h1>${ele.rating}</h1>
                            <p>${ele.position}</p>
                            <h2>+++</h2>
                            </div>
                            <div class="statistics">
                            <h1>${ele.name}</h1> 
                            </div> 
                            <div>
                            </div>
                            </div>
                            <div>
                            <button class="modifybtn" href="#eria-player-info" onclick="modification1(this)">moddify</button>
                            <button class="deletebtn"  onclick="deleteplayer2(this)">delete</button>
                            </div>
                            `
    document.getElementById("allplayers").innerHTML += jsoninfoplayer
    }
}
function modification1(namee){
   
    let mynameelement = namee.parentElement.parentElement.children[2].children[1].children[0].innerHTML ; 
  let playerinfo  = array.find(item => item.name == mynameelement)

    document.getElementById("name").value =  playerinfo.name
    document.getElementById("playerimage").value = playerinfo.photo
    document.getElementById("positionshowsed").value = playerinfo.position
    document.getElementById("playerflag").value = playerinfo.flag
    document.getElementById("playerlogo").value =  playerinfo.logo   
    document.getElementById("rating").value = playerinfo.rating
    document.getElementById("pace").value = playerinfo.pace
    document.getElementById("shooting").value = playerinfo.shooting
    document.getElementById("passing").value = playerinfo.passing
    document.getElementById("dribbling").value = playerinfo.dribbling
    document.getElementById("defending").value = playerinfo.defending
    document.getElementById("physical").value  =  playerinfo.physical
    let modifybutton = `<button id="modify"  class="modify-Btn">Modify</button>`
    document.getElementById("switchbutton").innerHTML = modifybutton
    document.getElementById("modify").addEventListener("click",function(e){
        e.preventDefault();
        let modifybutton = `<button class="added-player" id="addplayer">Add Player</button>`
        document.getElementById("switchbutton").innerHTML = modifybutton
        if(document.getElementById("positionshowsed").value == "GK"){
                playerinfo.name   =  document.getElementById("name").value ;
                playerinfo.position = document.getElementById("positionshowsed").value ;
                playerinfo.photo  =  document.getElementById("playerimage").value;
                playerinfo.flag  = document.getElementById("playerflag").value;
                playerinfo.logo   =  document.getElementById("playerlogo").value ; 
                playerinfo.rating = document.getElementById("rating").value;
                playerinfo.shooting =  document.getElementById("diving").value ;
                playerinfo.passing =  document.getElementById("passing").value;
                playerinfo.dribbling =  document.getElementById("dribbling").value;
                playerinfo.defending =  document.getElementById("defending").value;
                playerinfo.physical =  document.getElementById("physical").value;
                swal(`${playerinfo.name}`, "Modified  Succesfully");
                            
            }
            else {

                
                playerinfo.name   =  document.getElementById("name").value ;
                playerinfo.position = document.getElementById("positionshowsed").value ;
               playerinfo.photo  =  document.getElementById("playerimage").value;
               playerinfo.flag  = document.getElementById("playerflag").value;
               playerinfo.logo   =  document.getElementById("playerlogo").value ; 
               playerinfo.rating = document.getElementById("rating").value;
               
               playerinfo.shooting = document.getElementById("shooting").value;
               playerinfo.passing =  document.getElementById("passing").value;
               playerinfo.dribbling =  document.getElementById("dribbling").value;
               playerinfo.defending =  document.getElementById("defending").value;
               playerinfo.physical =  document.getElementById("physical").value;
               swal(`${playerinfo.name}`, "Modified Succesfully");
               
            }
            document.getElementById("name").value = ""
        document.getElementById("playerimage").value = ""
        document.getElementById("positionshowsed").value = ""
        document.getElementById("playerflag").value = ""
        document.getElementById("playerlogo").value = ""
        document.getElementById("rating").value = "";
        document.getElementById("pace").value = 0 ; 
        document.getElementById("shooting").value = 0  ;
        document.getElementById("passing").value  = 0 ; 
        document.getElementById("dribbling").value = 0 ; 
        document.getElementById("defending").value = 0 ; 
        document.getElementById("physical").value = 0
        })
}
function deleteplayer2(e){
    e.closest("#selectedplayer").remove()
    deleteplayer(e.closest("#selectedplayer").children[2].children[1].children[0].innerHTML)
}
let selected = false ; 
let all1 ;
let ele1 ;
let postionforplayer;
console.log(array)
function showselectedplayer(element1){
    
   

    ele1 = element1.parentElement.id   
    postionforplayer = element1.parentElement
    document.getElementById("addplayertoteam").innerHTML = ""
    
    
      for(let ele of array){
        console.log(element1.parentElement.style.gridArea.slice(0,2).toUpperCase())
      if(ele.position == element1.parentElement.style.gridArea.slice(0,2).toUpperCase()){
       
        let backgroundphoto ;
        if (ele.rating  > 80 ){
            backgroundphoto = `https://cdn3.futbin.com/content/fifa25/img/cards/hd/22_trailblazers.png?fm=png&ixlib=java-2.1.0&w=644&s=dfc202616b586e798ac57778d8b34fde`
        }
       else if(ele.rating > 99 ){
        backgroundphoto = `https://cdn3.futbin.com/content/fifa25/img/cards/hd/157_thunderstruck_icon.png?fm=png&ixlib=java-2.1.0&w=644&s=8a43580e75231ea4c9726858854e574d`
    }
       else{
        backgroundphoto = `./src/assets/Icons/badge_ballon_dor.webp`
       }
    let jsoninfoplayer1   = `<div id="selectedplayer"   class="imageinfocontainer" >
                            <img class="mainimage"   src="${backgroundphoto}" alt="" onclick="showmoreinfo(this)">
                            <img class="playerimage" dragbale="true"   src="${ele.photo}" alt="" >
                            <div class="allinfoplayer">
                            <div class="playerpower">
                            <h1>${ele.rating}</h1>
                            <p>${ele.position}</p>
                            <h2>+++</h2>
                            </div>
                            <div class="statistics">
                            <h1>${ele.name}</h1> 
                            </div> 
                            <div>
                            </div>
                            </div>
                            `
        document.getElementById("addplayertoteam").innerHTML += jsoninfoplayer1
        }
    }
    selected = true
}
document.getElementById("addplayertoteam").addEventListener("click",function(e){
            // document.getElementById("addplayertoteam").display  = "none"
            if(selected){
                
                document.getElementById(ele1).innerHTML = ""    
                document.getElementById(ele1).appendChild(e.target.closest(".imageinfocontainer"))
                
                let deletelement = `<div class="delet_icon" onclick="removeplayerfromstaduim(this)">x</div>`
                
                deleteplayer(e.target.closest(".imageinfocontainer").children[2].children[1].children[0].innerHTML)
                
                positionimage = ` <div id="position"> 
                                  </div>`
                let postiondeplayer = document.createElement("div")
                postiondeplayer.id = "position_1"
                postiondeplayer.innerHTML = `${document.getElementById(ele1).style.gridArea.slice(0,2).toUpperCase()}` 
                document.getElementById(ele1).appendChild(postiondeplayer)
               
                document.getElementById(ele1).innerHTML += (deletelement)

                selected = false 
        }
  
})
function removeplayerfromstaduim(ele) {
    console.log(array.length)
    for(let element of infoarray ){
        if(ele.closest(".player").children[0].children[2].children[1].children[0].innerHTML == element.name){
            array.push(element)
            break;
        }
    }
              ele.closest(".player").innerHTML = `<img class="cardimage" src="./src/assets/Icons/placeholder-card-normal.png" alt=""  onclick="showselectedplayer(this)">
                        <div id="position"> ${ele.closest(".player").style.gridArea.slice(0,2).toUpperCase()}
                         </div>
              <div class="plusicon">
                  <svg class="" width="30%" height="30%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0BB04D"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 12H12M15 12H12M12 12V9M12 12V15" stroke="#0BB04D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z" stroke="#0BB04D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </div>`
 
  

}
let draggeditem = document.querySelectorAll(".imageinfocontainer")
let emptycards  = document.querySelectorAll(".cardimage")          
let  infoarray = [];
function deleteplayer(deletitem){
    let  newarray1 = array.filter((item1)=> {
        if(item1.name != deletitem) return item1 ;
        infoarray.push(item1);
    })
    array = newarray1
}

let swetchedplayer;
let selectedswitchplayer ;
let selecttosetch ;
function showmoreinfo(item){

    console.log(infoarray)
    console.log(item.parentElement.children[2].children[1].children[0].innerHTML )
        for(let ele of infoarray){
        if(item.parentElement.children[2].children[1].children[0].innerHTML == ele.name){
            let diveitem  = `<div class="allplayerinfo">
            <div>
            <h1 class="close-icon" onclick="close1()">X</h1>
            <div class="player-personnal-image">
            <img src="${ele.photo}" alt="" class="player-image">
            </div>
            <div class="">
            <div class="postion-power">
            <h1 class="position-right">${ele.position}++</h1>
            </div>
            <div class="imag-player">
            <img class="flagimage" src="${ele.flag}" alt="flagimage" class="flagimage">
           
            </div>
            </div>  
            </div>
            <d class="power-info" >
            <div  class="power-key">
            <p id="stat1">${ele.passing ? "PAS" : "DIV"}</p>
            <p id="stat2">${ele.defending ? "SHO" : "HAN"}</p>
            <p id="stat3">${ele.defending ? "PAS" : "KIC"}</p>
            <p id="stat4">${ele.defending ? "DRI" : "REF"}</p>
            <p id="stat5">${ele.defending ? "DEF" : "SPE"}</p>
            <p>${ele.diving ? "PHY" : "POS"}</p>
            </div>
            <div class="power-value">
            <p>${ele.pace || ele.diving}</p>
            <p>${ele.shooting || ele.handling}</p>
            <p>${ele.passing ||ele.kicking}</p>
            <p>${ele.dribbling ||ele.reflexes}</p>
            <p>${ele.defending || ele.speed} </p>
            <p>${ele.positioning || ele.physical}</p>

            </div>
            </div>`
            document.querySelector(".eria-info").innerHTML = diveitem
            document.querySelector(".eria-info").style.display = "block"
            document.querySelector(".inputs-info").style.display = "none"
        }

    }
}
function validationname(playername){
    namapatern = /^[a-z A-Z]+[a-z A-Z]+$/
    if(namapatern.test(playername)) return true 
}
function validaturl(playerurl){
    let urlpatern = /^(https?:\/\/[^"']*\.(?:png|jpg|jpeg|gif|svg))$/;
    if(urlpatern.test(playerurl)) return true 
}
function close1(){
    document.querySelector(".eria-info").style.display = "none"
    document.querySelector(".inputs-info").style.display = "block"
}
function position() {
    let positon ; 
    if(document.getElementById("positionshowsed").value == "GK"){
         positon = `
                        <label for="Diving">Diving : </label>
                        <input type="range" id="diving" name="" min="0" max="100"  step="10"/>
                        <label for="Handling">Handling : </label>
                        <input type="range" id="handling" name="" min="0" max="100"  step="10"/>
                        <label for="kicking">Kicking : </label>
                        <input type="range" id="kicking" name="" min="0" max="100"  step="10"/>
                        <label for="reflexes">Reflexes : </label>
                        <input type="range" id="reflexes" name="" min="0" max="100"step="10"/>
                        <label for="speed">speed : </label>
                        <input type="range" id="speed" name="" min="0" max="100" step="10"/>
                        <label for="positioning">positioning : </label>
                        <input type="range" id="positioning" name="" min="0" max="100" step="10"/>` 
                        document.getElementById("switchposition").innerHTML = positon
    }
    else {
        positon = `<label for="pace">pace : </label>
        <input type="range" id="pace" name="" min="0" max="100"  step="10"/>
        <label for="Shooting">Shooting : </label>
        <input type="range" id="shooting" name="" min="0" max="100"  step="10"/>
        <label for="passing">passing : </label>
        <input type="range" id="passing" name="" min="0" max="100"  step="10"/>
        <label for="dribbling">dribbling : </label>
        <input type="range" id="dribbling" name="" min="0" max="100"step="10"/>
        <label for="defending">defending : </label>
        <input type="range" id="defending" name="" min="0" max="100" step="10"/>
        <label for="physical"> physical : </label>
        <input type="range" id="physical" name="" min="0" max="100" step="10"/>  `
        document.getElementById("switchposition").innerHTML = positon

    }
}
let playeronobject ;
document.getElementById("addplayer").addEventListener("click",function(e){
   e.preventDefault();
   if(validationname(document.getElementById("name").value)== true){
    if(validaturl(document.getElementById("playerimage").value) == true ||validaturl(document.getElementById("playerflag").value) == true || validaturl(document.getElementById("playerlogo").value) == true )  {
        if(document.getElementById("rating").value > 0 && document.getElementById("rating").value <= 100){
            if(document.getElementById("positionshowsed").value !=  ""){
    if(document.getElementById("positionshowsed").value == "GK"){
       
     playeronobject = {
        "name": document.getElementById("name").value ,
        "photo": document.getElementById("playerimage").value,
        "position": document.getElementById("positionshowsed").value,
        "nationality": "",
        "flag": document.getElementById("playerflag").value,
        "club": "",
        "logo": document.getElementById("playerlogo").value,
        "rating": document.getElementById("rating").value,
        "diving":  document.getElementById("diving").value ,
        "handling": document.getElementById("handling").value,
        "kicking": document.getElementById("kicking").value,
        "reflexes": document.getElementById("reflexes").value,
        "speed": document.getElementById("speed").value ,
        "positioning": document.getElementById("positioning").value,
        
    }
}
    else {
        playeronobject = {
        "name": document.getElementById("name").value ,
        "photo": document.getElementById("playerimage").value,
        "position": document.getElementById("positionshowsed").value,
        "nationality": "",
        "flag": document.getElementById("playerflag").value,
        "club": "",
        "logo": document.getElementById("playerlogo").value,
        "rating": document.getElementById("rating").value,
        "pace": document.getElementById("pace").value,
        "shooting":document.getElementById("shooting").value,
        "passing": document.getElementById("passing").value,
        "dribbling": document.getElementById("dribbling").value,
        "defending": document.getElementById("defending").value,
        "physical": document.getElementById("physical").value,
        
       
} 
    
      
swal(`${document.getElementById("playerimage").value, document.getElementById("name").value}`, "Added  Succesfully");
    
    console.log(playeronobject)
    array.push(playeronobject)
}

   }
}
}
  document.getElementById("name").value = ""
        document.getElementById("playerimage").value = ""
        document.getElementById("positionshowsed").value = ""
        document.getElementById("playerflag").value = ""
        document.getElementById("playerlogo").value = ""
        document.getElementById("rating").value = "";
        document.getElementById("pace").value = 0 ; 
        document.getElementById("shooting").value = 0  ;
        document.getElementById("passing").value  = 0 ; 
        document.getElementById("dribbling").value = 0 ; 
        document.getElementById("defending").value = 0 ; 
        document.getElementById("physical").value = 0;

}



})

document.onload(gettactic()) 