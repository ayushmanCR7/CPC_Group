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
