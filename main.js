let boxes = document.querySelectorAll(".container div")
let turn = document.getElementById("turn")
let status = document.getElementById("status")

let player = 1

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
    }
}