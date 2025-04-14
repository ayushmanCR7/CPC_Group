const boxes=document.querySelectorAll(".box");
const gameinfo=document.querySelector(".game-info");
const newgamebtn=document.querySelector(".btn");
let currentplayer;
let gamegrid;
const winningposition=[
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6]
];
// let's create the func to initialize the game
function initgame(){
   currentplayer="X";
   gamegrid=["","","","","","","","",""];
   // ui per bhi empty karna padega na bawaa
   boxes.forEach((box,index)=>{
       box.innerText="";
       boxes[index].style.pointerEvents="all"; 
       // initialising box css property
       box.classList=`box box${index+1}`;
   });
   newgamebtn.classList.remove("active");
   gameinfo.innerText=`Current Player-${currentplayer}`;
}
initgame();
function handleclick(index){
    if(gamegrid[index]===""){
        boxes[index].innerText=currentplayer;
        gamegrid[index]=currentplayer;
        boxes[index].style.pointerEvents="none";
        // swap karo turn karo
        swapturn();
        // check koi jeet toh nahi gaya
        checkgameover();
    }
 }
 function swapturn(){
    if(currentplayer==="X"){
        currentplayer="O";
    }
    else{
        currentplayer="X";
    }
    // ui update
    gameinfo.innerText=`Current Player - ${currentplayer}`;
 }
boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        handleclick(index);
    })
 });

 function checkgameover(){
    let answer="";
    winningposition.forEach((position)=>{
        if((gamegrid[position[0]]!=="" ||  gamegrid[position[1]]!=="" || gamegrid[position[2]]!=="" ) &&
            (gamegrid[position[0]]===gamegrid[position[1]]) && 
(gamegrid[position[1]]===gamegrid[position[2]])){
                if(gamegrid[position[0]]==="X"){
                    answer="X";
                }
                else{
                    answer="O";
                }
                // disable pointer event
                boxes.forEach((box)=>{
                    box.style.pointerEvents="none";
                })
                boxes[position[0]].classList.add("win");
                boxes[position[1]].classList.add("win");
                boxes[position[2]].classList.add("win");
            }
    });
    if(answer!==""){
        gameinfo.innerText=`Winner Player - ${answer}`;
        newgamebtn.classList.add("active");
        return;
    }
    // checking tied match
    let fillcount=0;
    gamegrid.forEach((box)=>{
        if(box !==""){
            fillcount++;
        }
    });
    if(fillcount===9){
        gameinfo.innerText="Game Tied!"
        newgamebtn.classList.add("active");
    }
 }
 newgamebtn.addEventListener("click", initgame);
