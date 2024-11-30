
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
        //    cbleft.children[1].innerHTML = cbleft.style.gridArea.slice(0,2).toUpperCase()
        //    cbright.children[1].innerHTML = cbright.style.gridArea.slice(0,2).toUpperCase()
    }
   if(tactic == "343"){
        cmcnter.style.gridArea= "cb1"
        cmright.style.gridArea = "cmfr"
        leftcenter.style.gridArea = "cmfl"
        // cmcnter.style.rowGap = "70px"
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
}


// function addchanges(){
    
//     for(let i=0; i<5 ;i++){
    
//         let div2 = `<div id="changesimg" class="">
//         <img class="cardimage" src="./src/assets/Icons/placeholder-card-normal.png" alt="">
//         <div class="plusicon">
//             <svg class="" width="30%" height="30%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0BB04D"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 12H12M15 12H12M12 12V9M12 12V15" stroke="#0BB04D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z" stroke="#0BB04D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
//         </div>
//     </div>`
  
//     document.getElementById("changes").innerHTML +=(div2)
//     }
// }
// addchanges()
// addchanges()
fetch("./src/assets/players.json")
.then(response => response.json())
.then(data => showplayers(data.players))
let array ;
function showplayers(playersinfo){
     array = playersinfo
     console.log(array)
}    
        
    //     let jsoninfoplayer  = `   <div class="imageinfocontainer">
    //     <img class="mainimage" src="./src/assets/Icons/badge_total_rush.webp" alt="">
    //     <img class="playerimage"  src="${ele.photo}" alt="">
    //     <div class="allinfoplayer">
    //         <div class="playerpower">
    //             <h1>${ele.rating}</h1>
    //             <p>${ele.position}</p>
    //             <h2>+++</h2>
    //         </div>
    //         <div class="statistics">
    //             <div>
    //                 <h3>${ele.passing ? "PAS" : "DIV"}</h3>
    //                 <h4>${ele.pace || ele.diving}</h4>
    //             </div>
    //             <div>
    //                 <h3>${ele.defending ? "SHO" : "HAN"}</h3>
    //                 <h4>${ele.shooting || ele.handling}</h4>
    //             </div>
    //             <div>
    //                 <h3>${ele.defending ? "PAS" : "KIC"}</h3>
    //                 <h4>${ele.passing ||ele.kicking}</h4>
    //             </div>
    //             <div>
    //                 <h3>${ele.defending ? "DRI" : "REF"}</h3>
    //                 <h4>${ele.dribbling ||ele.reflexes}</h4>
    //             </div>
    //             <div>
    //                 <h3>${ele.defending ? "DEF" : "SPE"}</h3>
    //                 <h4>${ele.defending ||ele.speed}</h4>
    //             </div>
    //             <div>
    //                 <h3>${ele.diving ? "PHY" : "POS"}</h3>
    //                 <h4>${ele.positioning || ele.physical}</h4>
    //             </div>   
    //         </div>
    //         <div class="kamalimage">
    //             <img class="kamal" src="${ele.flag}" alt="">
    //             <img class="kamal" src=""${ele.logo}"" alt="">
                
    //         </div> 
    //     </div>    
    // <div>
    // </div>
    // </div>`
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
                            <button class="button" onclick="modification1(this)">moddify</button>
                            <button class="button" onclick="deleteplayer2(this)">delete</button>
                            </div>
                            `
    document.getElementById("allplayers").innerHTML += jsoninfoplayer

        
    }
}
function deleteplayer2(e){
    e.closest("#selectedplayer").remove()
    deleteplayer(e.closest("#selectedplayer").children[2].children[1].children[0].innerHTML)
}
let selected = false ; 
let all1 ;
let ele1 ;
let postionforplayer;
function showselectedplayer(element1){  
    ele1 = element1.parentElement.id   
    postionforplayer = element1.parentElement
    document.getElementById("addplayertoteam").innerHTML = ""
    console.log(element1.nextElementSibling.innerHTML)
    
    console.log(element1.nextElementSibling.innerHTML)
    for(let ele of array){
    if(ele.position == element1.nextElementSibling.innerHTML){
        let backgroundphoto ;
       if(ele.rating > 75 ){
        backgroundphoto
       }
    let jsoninfoplayer1   = `<div id="selectedplayer" class="imageinfocontainer" >
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
                            `
        document.getElementById("addplayertoteam").innerHTML += jsoninfoplayer1
        }
    }
    selected = true
}
document.getElementById("addplayertoteam").addEventListener("click",function(e){
            if(selected){   
                let selectedelement = e.target.closest(".imageinfocontainer").children
                document.getElementById(ele1).innerHTML = ""
                document.getElementById(ele1).appendChild(e.target.closest(".imageinfocontainer"))
                
                deleteplayer(e.target.closest(".imageinfocontainer").children[2].children[1].children[0].innerHTML)
                console.log(document.getElementById(ele1).style.gridArea)
                positionimage = ` <div id="position"> 
                                  </div>`
                let postiondeplayer = document.createElement("div")
                postiondeplayer.id = "position_1"
                postiondeplayer.innerHTML = `${document.getElementById(ele1).style.gridArea.slice(0,2).toUpperCase()}` 
                document.getElementById(ele1).appendChild(postiondeplayer)
                selected = false 
        }
  
})
// function drageanddrop(dragethisplayer) {
//     let palyerdrope = document.querySelectorAll(".player");
//     let dragedplayer;

//     // Handle dragstart event
//     dragethisplayer.addEventListener('dragstart', function(e) {
//         console.log(this); // Logs the player being dragged
//         if (dragethisplayer.children[0].id == "selectedplayer") {
//             dragedplayer = this;
//             console.log('Dragging player:', dragedplayer);
//         }
//     });

//     // Handle dragend event
//     dragethisplayer.addEventListener('dragend', function(e) {
//         console.log('Drag ended:', dragedplayer);
//         if (dragedplayer) {
//             console.log('Dragged player:', dragedplayer);
//         } else {
//             console.log('No player being dragged');
//         }
//     });

//     // Handle drop events on the players
//     // for (let player of palyerdrope) {
//         document.getElementById("cb1").addEventListener('dragover', function(e) {
//             e.preventDefault(); // Allow the drop
//         });

//         document.getElementById("cb1").addEventListener('drop', function() {
//             if (dragedplayer) {
//                 console.log('Dropping player:', dragedplayer);
                
//                 // Clear the content of the player
//                 // Append the dragged player to the dropped player
//             } else {
//                 console.log('No player to drop');
//             }
//             player.children[0].innerHTML = "";
//                 player.children[0].innerHTML = (dragethisplayer);
          
//         });
//     }

// function drageanddrop(dragethisplayer){
    
    
//     let palyerdrope = document.querySelectorAll(".player")
//     let dragedplayer ;
// // for(let dragelemet of staduimplayers){
//     dragethisplayer.addEventListener('dragstart',function(e){
//     console.log(this)
//     if(dragethisplayer.children[0].id == "selectedplayer"){
//     dragedplayer = this
//     }
// })
// dragethisplayer.addEventListener('dragend',function(e){
//     console.log(dragedplayer)
   
// })
// for(let player  of palyerdrope){
    
//     player.addEventListener('dragover',function(e){
//         console.log("kamal")
//         e.preventDefault()
// })
// player.addEventListener('drop',function(){
//     console.log(dragedplayer)
//     player.children[0].innerHTML = ""
//     player.children[0].appendChild(dragedplayer)
// })
// }

// }
            
    
            
let  infoarray = [];       
function deleteplayer(deletitem){
   
    let  newarray1 = array.filter((item1)=> {
        if(item1.name != deletitem) return item1 ;
        infoarray.push(item1);
    })
    
    array = newarray1
}
function reviveplayer(player){
    array = infoarray.filter(item => {
        if(item.name == player) array.push(item); 
        
    }) 
}
function draganddrop(){

    }
let swetchedplayer;
let selectedswitchplayer ;
function showmoreinfo(item){
    
    selectedswitchplayer = true 
    swetchedplayer = item

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
            <img src="${ele.flag}" alt="flagimage" class="flagimage">
            <img src="${ele.club}" alt="teamimage" class="team-imag">
            </div>
            </div>  
            </div>
            <d class="power-info" >
            <div class="power-key">
            <p>${ele.passing ? "PAS" : "DIV"}</p>
            <p>${ele.defending ? "SHO" : "HAN"}</p>
            <p>${ele.defending ? "PAS" : "KIC"}</p>
            <p>${ele.defending ? "DRI" : "REF"}</p>
            <p>${ele.defending ? "DEF" : "SPE"}</p>
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
document.getElementById("addplayertoteam").addEventListener("click",function(e){
    if(selectedswitchplayer){   
        let selectedelement = e.target.closest(".imageinfocontainer").children
        document.getElementById(ele1).innerHTML = ""
        document.getElementById(ele1).appendChild(e.target.closest(".imageinfocontainer"))
        
        deleteplayer(e.target.closest(".imageinfocontainer").children[2].children[1].children[0].innerHTML)
        console.log(e.target.closest(".imageinfocontainer"))
        console.log(document.getElementById(ele1).style.gridArea)
        positionimage = ` <div id="position"> 
                          </div>`
        let postiondeplayer = document.createElement("div")
        postiondeplayer.id = "position_1"
        postiondeplayer.innerHTML = `${document.getElementById(ele1).style.gridArea.slice(0,2).toUpperCase()}` 
        document.getElementById(ele1).appendChild(postiondeplayer)
        selectedswitchplayer = false 
        console.log(ele1 ,"kamal")
        console.log(swetchedplayer.closest(".imageinfocontainer").children[2].children[1].children[0].innerHTML)
}

})
function close1(){
    
    document.querySelector(".eria-info").style.display = "none"
    document.querySelector(".inputs-info").style.display = "block"
}
function position() {
    let positon
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
    if(document.getElementById("positionshowsed").value == "GK"){
     playeronobject = {
        
        "name": document.getElementById("name").value ,
        "photo": document.getElementById("playerimage").value,
        "position": document.getElementById("positionshowsed").value,
        "nationality": "",
        "flag": document.getElementById("playerflag").value,
        "club": "",
        "logo": document.getElementById("playerflag").value,
        "rating": document.getElementById("rating").value,
        "diving":  document.getElementById("diving").value ,
        "handling": document.getElementById("handling").value,
        "kicking": document.getElementById("kicking").value,
        "reflexes": document.getElementById("reflexes").value,
        "speed": document.getElementById("speed").value ,
        "positioning": document.getElementById("positioning").value,
        "id" : "1"
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
        "logo": document.getElementById("playerflag").value,
        "rating": document.getElementById("rating").value,
        "pace": document.getElementById("pace").value,
        "shooting":document.getElementById("shooting").value,
        "passing": document.getElementById("passing").value,
        "dribbling": document.getElementById("dribbling").value,
        "defending": document.getElementById("defending").value,
        "physical": document.getElementById("physical").value,
        "id" : "1"  
        }
    }
    array.push(playeronobject)



        console.log(playeronobject)
})

document.onload(gettactic()) 
