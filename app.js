let userScore = 0;
let compScore =0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="game draw!";
    msg.style.backgroundColor="blue";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win!");
        msg.innerText=`you win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";


    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you loose");

        msg.innerText=`you loose! ${compChoice} beats  ${userChoice} `
        msg.style.backgroundColor="red";
    }
}
const genComChoice =()=>{
    const options=["stone","paper","scissor"];
    const randomIndx=Math.floor(Math.random()*3);
    return options[randomIndx];
}
const playGame = (userChoice)=>{
    console.log("user choice =",userChoice);
    //compurt choice
    const compChoice=genComChoice();
    console.log("Comp choice =", compChoice);


    if(userChoice===compChoice){
        drawGame();
        
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin = compChoice==="paper"? false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissor"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }

        showWinner(userWin, userChoice, compChoice);

    }


}


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
       
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked",userChoice)
        playGame(userChoice);
    });
});