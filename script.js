console.log("Hello World")

let playerScore = 0
let compScore = 0


playGame()


function playGame() {
    let cc = ""
    let hc = ""
    for (let i=0; i<5;i++) {
        cc = getComputerChoice()
        hc = getHumanChoice()
        playRound(cc, hc)
    }
    console.log("player:",playerScore," computer:",compScore)
}





function playRound(cc, hc) {
    console.log("player ",hc, " comp ",cc)
    if (cc===hc) {
        console.log("tie")
    } else if (  (cc==="rock") && (hc === "scissors") ) {
        compScore ++
    } else if ( (cc==="scissors") && (hc === "paper") ) {
        compScore ++
    } else if  ( (cc==="paper") && (hc === "rock") ) {
        compScore ++
    } else {
        playerScore ++
    }
}



function getComputerChoice(){
    let cc = Math.random();
    //console.log(cc)
    if (cc<.33) {
        return "rock"
    } else if (cc<.66) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let hc = window.prompt("What is your choice?")
    //console.log(hc)
    return hc
}
