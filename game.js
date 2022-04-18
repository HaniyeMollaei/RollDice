let round_score = 0 ;
let turn = 0;
let f = 100;
let player1_total_score = 0;
let player2_total_score = 0;
let player1_current_score = 0;
let player2_current_score = 0;
let dice_sum = 0;

let dice1_number = 1;
let dice1_img_path = './img/1.png';

let dice2_number = 1;
let dice2_img_path = './img/1.png';

let dice1_view = document.getElementById('dice');
let dice2_view = document.getElementById('dice2');


let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');

let player1_current_score_view = document.getElementById('player1_current_score');
let player2_current_score_view = document.getElementById('player2_current_score');

let player1_score_view = document.getElementById('player1_score');
let player2_score_view = document.getElementById('player2_score'); 

let final_score = document.getElementById('final_score');

window.addEventListener('load' , function(){changeTurn()});
document.getElementById("roll_dice").onclick = function() {rollDice()};
document.getElementById("hold").onclick = function() {holdScore()};
document.getElementById('new_game').onclick = function(){restartGame()};

final_score.onchange = function() {
    console.log(document.getElementById("final_score").value);
};



function changeTurn() {
    dice_sum = 0;

    switch (turn) {
        case 0:
            turn = 1;
            player1.style.fontWeight = "700";
            player2.style.fontWeight = "300";
            break;
        case 1:
            turn = 2;
            player1.style.fontWeight = "300";
            player2.style.fontWeight = "700";
            break;
        case 2:
            turn = 1;
            player1.style.fontWeight = "700";
            player2.style.fontWeight = "300";
            break;
    }
}

function rollDice(){

    dice1_number = Math.floor((Math.random() * 6) + 1);
    dice2_number = Math.floor((Math.random() * 6) + 1);
    dice1_view.src = `./img/${dice1_number}.png`;
    dice2_view.src = `./img/${dice2_number}.png`;
    document.getElementById("result").innerHTML = "";

    if (f) {
       f = final_score.value;
    }else{
        f = 100;
        final_score.value = f;
    }

    if((dice1_number === 1 && dice2_number === 1)){
        dice_sum = 0 ;
        changeTurn();
    }else{
        dice_sum += dice1_number + dice2_number;
        console.log(`dice 1 : ${dice1_number}`);
        console.log(`dice 2 : ${dice2_number}`);
        console.log(`sum : ${dice_sum}`);
    }
    showCurrentScore();   
}

function showCurrentScore(){
     switch (turn) {
        case 1:
            player1_current_score = dice_sum;
            player1_current_score_view.innerHTML = player1_current_score;
            break;
        case 2:
            player2_current_score = dice_sum;
            player2_current_score_view.innerHTML = player2_current_score ;
            break;
    }   
}


function holdScore(){
    console.log(`Turn : ${turn}`);
    if (turn == 1) {
        player1_total_score += dice_sum;
        player1_current_score = 0;
        player1_current_score_view.innerHTML = player1_current_score;
        player1_score_view.innerHTML = player1_total_score;
        console.log(`Player 1 : ${player1_total_score}`);
    }else{
        player2_total_score += dice_sum;
        player2_current_score = 0;
        player2_current_score_view.innerHTML = player2_current_score;
        player2_score_view.innerHTML = player2_total_score;
        console.log(`Player 2 : ${player2_total_score}`);
    }
    checkWin();
    changeTurn();
}

function checkWin(){
   
    console.log("------------------------------------------");
    console.log(`final score is: ${f}`);
    console.log(`Player 1 : ${player1_total_score}`);
    console.log(`Player 2 : ${player2_total_score}`);
    console.log("------------------------------------------");

    if(f <= player1_total_score){

        document.getElementById("result").innerHTML = "Player1 wins!";
        restartGame();
    }else if(f <= player2_total_score){

        document.getElementById("result").innerHTML = "Player2 wins!";
        restartGame();
    }
}

function restartGame(){
    round_score = 0 ;
    turn = 1;
    player1_total_score = 0;
    player2_total_score = 0;
    player1_current_score = 0;
    player2_current_score = 0;
    dice_sum = 0;
    dice1_number = 1;
    dice2_number = 1;
    dice1_view.src = `./img/${dice1_number}.png`;
    dice2_view.src = `./img/${dice2_number}.png`;
    player1_current_score_view.innerHTML = player1_current_score;
    player2_current_score_view.innerHTML = player2_current_score;
    player1_score_view.innerHTML = player1_total_score;
    player2_score_view.innerHTML = player2_total_score;
}
