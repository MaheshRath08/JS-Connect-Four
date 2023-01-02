let boxes = document.querySelectorAll(".container div")
let turn = document.getElementById("turn")
let statusEl = document.getElementById("status")
let displayEl = document.getElementById("display")
let replayBtn = document.getElementById("replay")

let player = 1
let message = ""
let winConditions = [
    [0, 1, 2, 3],
    [41, 40, 39, 38],
    [7, 8, 9, 10],
    [34, 33, 32, 31],
    [14, 15, 16, 17],
    [27, 26, 25, 24],
    [21, 22, 23, 24],
    [20, 19, 18, 17],
    [28, 29, 30, 31],
    [13, 12, 11, 10],
    [35, 36, 37, 38],
    [6, 5, 4, 3],
    [0, 7, 14, 21],
    [41, 34, 27, 20],
    [1, 8, 15, 22],
    [40, 33, 26, 19],
    [2, 9, 16, 23],
    [39, 32, 25, 18],
    [3, 10, 17, 24],
    [38, 31, 24, 17],
    [4, 11, 18, 25],
    [37, 30, 23, 16],
    [5, 12, 19, 26],
    [36, 29, 22, 15],
    [6, 13, 20, 27],
    [35, 28, 21, 14],
    [0, 8, 16, 24],
    [41, 33, 25, 17],
    [7, 15, 23, 31],
    [34, 26, 18, 10],
    [14, 22, 30, 38],
    [27, 19, 11, 3],
    [35, 29, 23, 17],
    [6, 12, 18, 24],
    [28, 22, 16, 10],
    [13, 19, 25, 31],
    [21, 15, 9, 3],
    [20, 26, 32, 38],
    [36, 30, 24, 18],
    [5, 11, 17, 23],
    [37, 31, 25, 19],
    [4, 10, 16, 22],
    [2, 10, 18, 26],
    [39, 31, 23, 15],
    [1, 9, 17, 25],
    [40, 32, 24, 16],
    [9, 17, 25, 33],
    [8, 16, 24, 32],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [1, 2, 3, 4],
    [5, 4, 3, 2],
    [8, 9, 10, 11],
    [12, 11, 10, 9],
    [15, 16, 17, 18],
    [19, 18, 17, 16],
    [22, 23, 24, 25],
    [26, 25, 24, 23],
    [29, 30, 31, 32],
    [33, 32, 31, 30],
    [36, 37, 38, 39],
    [40, 39, 38, 37],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
  ]

function checkGame(){
    for(let i=0;i<winConditions.length;i++){
        let box1=winConditions[i][0]
        let box2=winConditions[i][1]
        let box3=winConditions[i][2]
        let box4=winConditions[i][3]

        if(boxes[box1].classList.contains("p1") &&
        boxes[box2].classList.contains("p1") &&
        boxes[box3].classList.contains("p1") &&
        boxes[box4].classList.contains("p1")){
            message = "Player 1 won"
            displayResult(message)
        }
        if(boxes[box1].classList.contains("p2") &&
        boxes[box2].classList.contains("p2") &&
        boxes[box3].classList.contains("p2") &&
        boxes[box4].classList.contains("p2")){
            message = "Player 2 won"
            displayResult(message)
        }
    }
}

for(let i = 0; i<boxes.length; i++){
    boxes[i].onclick= ()=>{
        if(boxes[i+7].classList.contains("equiped") && !boxes[i].classList.contains("equiped")){
            if(player==1){
                boxes[i].classList.add("p1")
                boxes[i].classList.add("equiped")
                player=2
                turn.textContent=`Player ${player}'s Turn`
            }else if(player==2){
                boxes[i].classList.add("p2")
                boxes[i].classList.add("equiped")
                player=1
                turn.textContent=`Player ${player}'s Turn`
            }else{
                alert("Can't put there!!")
            }   
        }
        checkGame()
        checkBoxes(boxes[i])
    }
}
 function displayResult(e){
    statusEl.textContent = e
    displayEl.style.display = "block"

    replayBtn.addEventListener("click", ()=>{
        location.reload()
    })
}

function checkBoxes(e){
    if(!e.classList.contains("equiped")){
        let notif = document.createElement("div")
        document.body.appendChild(notif)
        notif.classList.add("notif")
        notif.innerHTML = `From the bottom, following the laws of gravity`
        setTimeout(()=>{
            notif.remove()
        },1000)
    }
}