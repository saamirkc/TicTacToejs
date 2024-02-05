let boxes =document.querySelectorAll(".box");
let turnX=true;
let reset=document.querySelector("#resett")
let start=document.querySelector("#startnew")
let msg=document.querySelector(".msg");
let winpat= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
   
];


boxes.forEach((box)=> {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnX){
            box.innerText="X";
            turnX=false;
        }
        else{
            box.innerText="O";
            turnX=true;
        }
        box.disabled=true;
      winfunc();
    });
    
});
const winfunc=()=>{
for(let pos of winpat){
  let posval1=boxes[pos[0]].innerText;
  let posval2=boxes[pos[1]].innerText;
  let posval3=boxes[pos[2]].innerText;
  if(posval1!=""&&posval2!=""&&posval3!=""){
  if(posval1===posval2&&posval2===posval3){
    // console.log(`winner is : ${box.innerText}`);
    console.log("winner",posval1);
    displaywinner(posval1);
    disabledboxes();
  }
}
    // console.log(pos[0],pos[1],pos[2]);
    // console.log(boxes[pos[0]].innerText,boxes[pos[1]].innerText,boxes[pos[2]].innerText);
    
}

};
const displaywinner=(sam)=>{
msg.innerText=`Congratulations!!Winner is ${sam}`;
msg.classList.remove("hide");
}
const disabledboxes=()=>{
for(let box of boxes){
    box.disabled=true;
}
}


const resetgame=()=>{
    turnX=true;
    enabledboxes();
    msg.classList.add("hide");


}

const enabledboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    }
start.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);