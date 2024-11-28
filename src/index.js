
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
    console.log(document.getElementById("tactics").value.length)
    
    if(tactic == "433"){
        console.log()
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
        cbleft.children[1].innerHTML = cbleft.style.gridArea.slice(0,2).toUpperCase()
        cbright.children[1].innerHTML = cbright.style.gridArea.slice(0,2).toUpperCase()
    }
    if(tactic == "442"){
        atackright.style.gridArea = "RW"
        atackleft.style.gridArea = "LW"
        rb.style.gridArea = "RB"
       
        lb.style.gridArea = "lb"
        cmcnter.style.gridArea= "sta"
           atack.style.gridArea = "stb" 
           cbleft.children[1].innerHTML = cbleft.style.gridArea.slice(0,2).toUpperCase()
           cbright.children[1].innerHTML = cbright.style.gridArea.slice(0,2).toUpperCase()
    }
    if(tactic == "343"){
        
        cmcnter.style.gridArea= "cb1"
        cmright.style.gridArea = "cmfr"
        leftcenter.style.gridArea = "cmfl"
        cmcnter.style.rowGap = "70px"
        rb.style.gridArea = "RW"
        lb.style.gridArea = "LW"
        atackright.style.gridArea = "rf"
        atackleft.style.gridArea = "lf"
        atack.style.gridArea = "st" 
        cbleft.children[1].innerHTML = cbleft.style.gridArea.slice(0,2).toUpperCase()
        cbright.children[1].innerHTML = cbright.style.gridArea.slice(0,2).toUpperCase()
        
    }
    if(tactic=="532"){
     cmcnter.style.gridArea= "cb1"
     atackleft.style.gridArea = "cmfc"
     rb.style.gridArea = "RB"
    lb.style.gridArea = "lb"
    atackright.style.gridArea = "sta"
    atack.style.gridArea = "stb" 
    cbleft.children[1].innerHTML = cbleft.style.gridArea.slice(0,2).toUpperCase()
    cbright.children[1].innerHTML = cbright.style.gridArea.slice(0,2).toUpperCase()
    
    }
    cbleft.children[1].innerHTML = cbleft.style.gridArea.slice(0,2).toUpperCase()
cbright.children[1].innerHTML = cbright.style.gridArea.slice(0,2).toUpperCase()
            rb.children[1].innerHTML = rb.style.gridArea
            lb.children[1].innerHTML = lb.style.gridArea
            cmright.children[1].innerHTML = cmright.style.gridArea.slice(0,2).toUpperCase()
            cmcnter.children[1].innerHTML = cmcnter.style.gridArea.slice(0,2).toUpperCase()
            leftcenter.children[1].innerHTML = leftcenter.style.gridArea.slice(0,2).toUpperCase()
            atackright.children[1].innerHTML = atackright.style.gridArea.slice(0,2).toUpperCase()
            atackleft.children[1].innerHTML = atackleft.style.gridArea.slice(0,2).toUpperCase()
            atack.children[1].innerHTML = atack.style.gridArea.slice(0,2).toUpperCase()
            gk.children[1].innerHTML = gk.style.gridArea.slice(0,2).toUpperCase()

}


function addchanges(){
    
    for(let i=0; i<5 ;i++){
    
        let div2 = `<div id="changesimg" class="">
        <img class="cardimage" src="./src/assets/Icons/placeholder-card-normal.png" alt="">
        <div class="plusicon">
            <svg class="" width="30%" height="30%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#0BB04D"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 12H12M15 12H12M12 12V9M12 12V15" stroke="#0BB04D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11.7 1.1732C11.8856 1.06603 12.1144 1.06603 12.3 1.17321L21.2263 6.3268C21.4119 6.43397 21.5263 6.63205 21.5263 6.84641V17.1536C21.5263 17.3679 21.4119 17.566 21.2263 17.6732L12.3 22.8268C12.1144 22.934 11.8856 22.934 11.7 22.8268L2.77372 17.6732C2.58808 17.566 2.47372 17.3679 2.47372 17.1536V6.84641C2.47372 6.63205 2.58808 6.43397 2.77372 6.32679L11.7 1.1732Z" stroke="#0BB04D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div>
    </div>`
  
    document.getElementById("changes").innerHTML +=(div2)
    }
}
addchanges()
// addchanges()
fetch("./src/players.json")
.then(response => response.json())
.then(data => showplayers(data.players))
let array ;
function showplayers(playersinfo){
     array = playersinfo
     console.log(array)
    for(let ele of playersinfo){
        
        let jsoninfoplayer  = `   <div class="imageinfocontainer">
        <img class="mainimage" src="./src/assets/Icons/badge_total_rush.webp" alt="">
        <img class="playerimage"  src="${ele.photo}" alt="">
        <div class="allinfoplayer">
            <div class="playerpower">
                <h1>${ele.rating}</h1>
                <p>${ele.position}</p>
                <h2>+++</h2>
            </div>
            <div class="statistics">
                
                
                <div>
                    <h3>${ele.passing ? "PAS" : "DIV"}</h3>
                    <h4>${ele.pace || ele.diving}</h4>
                </div>
                <div>
                    <h3>${ele.defending ? "SHO" : "HAN"}</h3>
                    <h4>${ele.shooting || ele.handling}</h4>
                </div>
                <div>
                    <h3>${ele.defending ? "PAS" : "KIC"}</h3>
                    <h4>${ele.passing ||ele.kicking}</h4>
                </div>
                <div>
                    <h3>${ele.defending ? "DRI" : "REF"}</h3>
                    <h4>${ele.dribbling ||ele.reflexes}</h4>
                </div>
                <div>
                    <h3>${ele.defending ? "DEF" : "SPE"}</h3>
                    <h4>${ele.defending ||ele.speed}</h4>
                </div>
                <div>
                    <h3>${ele.diving ? "PHY" : "POS"}</h3>
                    <h4>${ele.positioning || ele.physical}</h4>
                </div>   
            </div>
            <div class="kamalimage">
                <img class="kamal" src="${ele.flag}" alt="">
                <img class="kamal" src=""${ele.logo}"" alt="">
                
            </div> 
        </div>    
    <div>
    </div>
    </div>`
    document.getElementById("addplayertoteam").innerHTML += jsoninfoplayer

        
    }
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
    for(let ele of array){
    if(ele.position == element1.nextElementSibling.innerHTML){
        
       
    let jsoninfoplayer1   = `<div class="imageinfocontainer">
                            <img class="mainimage" src="./src/assets/Icons/badge_ballon_dor.webp" alt="">
                            <img class="playerimage"  src="${ele.photo}" alt="">
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
                            </div>`
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
                console.log(array.inde)
                deletepleyer(e.target.closest(".imageinfocontainer"))
                positionimage = ` <div id="position"> 
                                  </div>`
                // document.getElementById(ele1).innerHTML += (positionimage)
                selected = false
            }
        })
// console.log(array.length)
// function deletepleyer(player){
//     // let array = array.filter( item =>{
//     //     return item !=  player
//     // } 
//     // )    
    
// // }
// console.log(array.length)

document.onload(gettactic()) 
