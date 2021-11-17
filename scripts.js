let turn = chooseTurn(1);
let seconds = 0;
let time; 
let numGames=0;
//functions for each cell to work
function markFilled11(){
    if (document.getElementById('11').disabled == true){ //check if already filled
        console.log("already clicked");
        return false;
    }
    else{
        document.getElementById('11').disabled = true;
        document.getElementById('11').innerHTML = switchTurn();
        console.log("markfilled 11");
        checkWinner();
        return true;
    }
}
function markFilled12(){
    if (document.getElementById('12').disabled == true){ //check if already filled
        console.log("already clicked");
        return false;
    }
    else{
        document.getElementById('12').disabled = true;
        document.getElementById('12').innerHTML = switchTurn();
        console.log("markfilled 12");
        checkWinner();
        return true;
    }


}

function markFilled13(){
    if (document.getElementById('13').disabled == true){ //check if already filled
        console.log("already clicked");
        return false;
    }
    else{
        document.getElementById('13').disabled = true;
        document.getElementById('13').innerHTML = switchTurn();
        console.log("markfilled 13");
        checkWinner();
        return true;
    }
}

function markFilled21(){
    if (document.getElementById('21').disabled == true){ //check if already filled
        console.log("already clicked")
        return false;
    }
    else{
        document.getElementById('21').disabled = true;
        document.getElementById('21').innerHTML = switchTurn();
        console.log("markfilled 21");
        checkWinner();
        return true;
    }
}

function markFilled22(){
    if (document.getElementById('22').disabled == true){ //check if already filled
        console.log("already clicked");
        return false;
    }
    else{
        document.getElementById('22').disabled = true;
        document.getElementById('22').innerHTML = switchTurn();
        console.log("markfilled 22");
        checkWinner();
        return true;
    }
}

function markFilled23(){
    if (document.getElementById('23').disabled == true){ //check if already filled
        console.log("already clicked");
        return false;
    }
    else{
        document.getElementById('23').disabled = true;
        document.getElementById('23').innerHTML = switchTurn();
        console.log("markfilled 23");
        checkWinner();
        return true;
    }
}

function markFilled31(){
    if (document.getElementById('31').disabled == true){ //check if already filled
        console.log("already clicked");
        return false;
    }
    else{
        document.getElementById('31').disabled = true;
        document.getElementById('31').innerHTML = switchTurn();
        console.log("markfilled 31");
        checkWinner();
        return true;
    }
}

function markFilled32(){
    if (document.getElementById('32').disabled == true){ //check if already filled
        console.log("already clicked");
        return false;
    }
    else{
        document.getElementById('32').disabled = true;
        document.getElementById('32').innerHTML = switchTurn();
        console.log("markfilled 32");
        checkWinner();
        return true;
    }
}

function markFilled33(){
    if (document.getElementById('33').disabled == true){ //check if already filled
        console.log("already clicked");
        return false;
    }
    else{
        document.getElementById('33').disabled = true;
        document.getElementById('33').innerHTML = switchTurn();
        console.log("markfilled 33");
        checkWinner();
        return true;
    }
}

function masterClick(numId){ //id passed as parameter
    if (numId === 11){
        markFilled11();
    }
    else if (numId === 12){
        markFilled12();
    }
    else if (numId === 13){
        markFilled13();
    }
    else if (numId === 21){
        markFilled21();
    }
    else if (numId === 22){
        markFilled22();
    }
    else if (numId === 23){
        markFilled23();
    }
    else if (numId === 31){
        markFilled31();
    }
    else if (numId === 32){
        markFilled32();
    }
    else if (numId === 33){
        markFilled33();
    }
    else {
        console.log("master click broken");
    }
    console.log("Display thingy: " + (document.getElementById("startButton").style.display == "none"));
    if ((document.getElementById("pvcButton").checked == true) && ((document.getElementById("startButton").style.display == "none") == true)){
        if (turn == 0){ // turn is false = turn is X
            playComputer();
        }
    }
}

function onloadFunction(){ //runs onload
    document.getElementById("restartButton").style.display = "none"; // hides the restart button
    document.getElementById("timer").style.display = "none";
    disableCells();
}

function switchTurn () { //alternates the turn if x then change to o before return
        if (turn == true){
            turn = false;
            document.getElementById('whichTurn').innerHTML = "O's Turn";
            return 'X';
        }
        else if (turn == false){
            turn = true;
            document.getElementById('whichTurn').innerHTML = "X's Turn";
            return 'O';
        }
}

function chooseTurn(a){ //returns 0-a randomly, no decimal and is inclusive therefore chooses the turns when 0-1
    let min=0;
    let max=a;
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function checkWinner(){
    /* how the letters correspond
    *   a b c
    *   d e f
    *   g h i 
    */

    console.log(turn);
    let a  = document.getElementById("11").innerHTML;
    let b  = document.getElementById("12").innerHTML;
    let c  = document.getElementById("13").innerHTML;
    let d  = document.getElementById("21").innerHTML;
    let e  = document.getElementById("22").innerHTML;
    let f  = document.getElementById("23").innerHTML;
    let g  = document.getElementById("31").innerHTML;
    let h  = document.getElementById("32").innerHTML;
    let i  = document.getElementById("33").innerHTML;
    
    console.log("Current Values"); // for testing purposes
    console.log(a  + b + c );
    console.log(d + e + f);
    console.log(g + h + i);

    if (((a===b && b===c) && (a !== " "))){
         winnerHandler();
    }
    else if((a===e && e===i) && (a !== " ")){
        winnerHandler();
    }
    else if((a===d && d===g) && (a !== " ")){
        winnerHandler();
    }
    else if((b===e && e===h) && (b !== " ")){
        winnerHandler();
    }
    else if((c===e && e===g) && (c !== " ")){
        winnerHandler();
    }
    else if((c===f && f===i) && (c !== " ")){
        winnerHandler();
    }
    else if((d===e && e===f) && (d !== " ")){
        winnerHandler();
    }
    else if((g===h && h===i) && (g !== " ")){
        winnerHandler();
    }
    else if ((arrayCheck(a) && arrayCheck(b) && arrayCheck(c) && arrayCheck(d) && arrayCheck(e) && arrayCheck(f) && arrayCheck(g) && arrayCheck(h) && arrayCheck(i))){
        disableCells();
        clearInterval(time);
        document.getElementById("winner").innerHTML = "Cats Game!" ;
    }
    else {
        console.log("winner false");
        return false;
    }
}
function winnerHandler(){
    clearInterval(time);
    if (turn == true){
        document.getElementById("winner").innerHTML = "O is the winner";
    }
    else if(turn == false){
        document.getElementById("winner").innerHTML = "X is the winner";
    }
    disableCells();
    
    return true;
}

function arrayCheck(cells){
    let XorO = ['X', 'O'];
    if(cells == XorO[0]){
        return true;
    }
    else if(cells == XorO[1]){
        return true;
    }
    else{
        return false;
    }
}

function disableCells(){
    document.getElementById("11").disabled = true;
    document.getElementById("12").disabled = true;
    document.getElementById("13").disabled = true;
    document.getElementById("21").disabled = true;
    document.getElementById("22").disabled = true;
    document.getElementById("23").disabled = true;
    document.getElementById("31").disabled = true;
    document.getElementById("33").disabled = true;
    document.getElementById("32").disabled = true;
}

function enableCells(){
    document.getElementById("11").disabled = false;
    document.getElementById("12").disabled = false;
    document.getElementById("13").disabled = false;
    document.getElementById("21").disabled = false;
    document.getElementById("22").disabled = false;
    document.getElementById("23").disabled = false;
    document.getElementById("31").disabled = false;
    document.getElementById("33").disabled = false;
    document.getElementById("32").disabled = false;
}

function startTimer(){
    document.getElementById("timer").style.display = "block";
    seconds = 0;
    time = setInterval(count, 1000);
    
}

function count() {// counts the number of seconds that have passed
    seconds++
    document.getElementById("timer").innerHTML = "Timer: " + seconds + " seconds";
}

function restartGame(){
    document.getElementById("restartButton").style.display = "none";
    document.getElementById("startButton").style.display = "block";
    console.log("reset button clicked");
    document.getElementById("whichTurn").innerHTML = "";
    document.getElementById("11").innerHTML = " ";
    document.getElementById("12").innerHTML = " ";
    document.getElementById("13").innerHTML = " ";
    document.getElementById("21").innerHTML = " ";
    document.getElementById("22").innerHTML = " ";
    document.getElementById("23").innerHTML = " ";
    document.getElementById("31").innerHTML = " ";
    document.getElementById("32").innerHTML = " ";
    document.getElementById("33").innerHTML = " ";
    document.getElementById("pvcButton").style.display = "block";
    document.getElementById("pvpButton").style.display = "block";

    document.getElementById("winner").innerHTML = " ";
    clearInterval(time);

}

function computerMove(space){
//maybe encapsulate the marked turn thing into one func and call computer move or whatever at the end
switch (space){
    case 0:
        if (markFilled11() == false){ //if space is already filled go back to play computer to get another space assignment
            playComputer();
        }
        break;
    case 1:
        if (markFilled12() == false){
            playComputer();
        }
        break;
    case 2:
        if (markFilled13() == false){
            playComputer();
        }
        break;
    case 3:
        if (markFilled21() == false){
            playComputer();
        }
        break;
    case 4:
        if (markFilled22() == false){
            playComputer();
        }
        break;
    case 5:
        if (markFilled23() == false){
            playComputer();
        }
        break;
    case 6:
        if (markFilled31() == false){
            playComputer();
        }
        break;
    case 7:
        if (markFilled32() == false){
            playComputer();
        }
        break;
    case 8:
        if (markFilled33() == false){
            playComputer();
        }
        break;
    default:
        console.log("Space has broken");
    }
}

function playComputer(){
    /*
    * 0 1 2
    * 3 4 5
    * 6 7 8
    */
   if (checkWinner() == false){
        let spot = chooseTurn(8);
        console.log("Spot = " +spot);
        computerMove(spot); 
    }
}

function gameCounter(){
    numGames++;
    document.getElementById("gameNum").innerHTML = "Games Played: " + numGames;
}



function startGame(){
    console.log("start game run");
    document.getElementById("startButton").style.display = "none";
    document.getElementById("restartButton").style.display = "block";
    document.getElementById("pvcButton").style.display = "none"; //hide the radio buttons when game in session to prevent breaking code
    document.getElementById("pvpButton").style.display = "none";
    turn = chooseTurn(1);
    enableCells();
    switchTurn();
    startTimer();
    gameCounter();
    if (document.getElementById("pvcButton").checked  == true){
        if ((turn == false)){ //if turn is O
            playComputer();
        }
    }
    
}