


let audioTurn =  new Audio("beep-sound-8333.mp3");
let turn = "X";
let gameover = false;
let count = 0;

// to change turn
const changeTurn = () =>{
    return turn === "X" ? "O" : "X";
}



const checkWin = () => {

    let boxtext = document.getElementsByClassName("box-text");

    let win = [
        [0,1,2,3],
        [4,5,6,7],
        [8,9,10,11],
        [12,13,14,15],
        [0,4,8,12],
        [1,5,9,13],
        [2,6,10,14],
        [3,7,11,15] ,
        [0,5,10,15],
        [3,6,9,12]
    ]
 
    win.forEach(e =>{
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText)&&(boxtext[e[2]].innerText === boxtext[e[3]].innerText) && (boxtext[e[0]].innerText !== "")){
          
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            gameover = true;
            document.querySelector(".img-box").getElementsByTagName("img")[0].style.width = "250px";
           
        };
    })
   
}


let boxes = document.getElementsByClassName("box");

    Array.from(boxes).forEach( element =>{
        let boxtext = element.querySelector(".box-text");
        element.addEventListener("click" , () => {
            if(boxtext.innerText === ""){
                boxtext.innerText = turn;
               count++;
                audioTurn.play();
                checkWin();
                if(gameover){
                    win(turn)
                }
                turn =  changeTurn();
                if(!gameover){
                    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
                }
               
            };
            // console.log(count)
            if(count===16){
                draw()

            }

        })
       
    })
    reset.addEventListener('click' , ()=>{
        let boxtexts  = document.querySelectorAll('.box-text');
        Array.from(boxtexts).forEach(element=>{
           element.innerText = "";
        });
        count=0;
        turn = "X";
        gameover = false;
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        document.querySelector(".img-box").getElementsByTagName("img")[0].style.width = "0px"
       
    })

    function draw(){
        alert("match draw")
        window.location.href="four.html"
    }


    

function win(t){
    alert(`${t} won`)
    window.location.href="four.html"

}


function three(){
    window.location.href="index.html"
}

function five(){
    window.location.href="five.html"
}