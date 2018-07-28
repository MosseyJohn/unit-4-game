$(document).ready(function() {

var winCounter = 0;
var lossCounter = 0;
var randomNumber;
var crystal1 = [3,6,9,12];
var crystal2 = [2,4,6,8,10];
var crystal3 = [1,3,5,7,9];
var crystal4 = [10,15,20,25];
var currentValue = 0;
var result = 0;
var totalScore = 0;
var gameOver = false;

function gameStart(){

    currentValue = 0;

    randomNumber = Math.floor(Math.random() * 100);
    console.log(randomNumber);

    crystal1 = crystal1[Math.floor(Math.random() * crystal1.length)]
    console.log(crystal1);

    crystal2 = crystal2[Math.floor(Math.random() * crystal2.length)]
    console.log(crystal2);

    crystal3 = crystal3[Math.floor(Math.random() * crystal3.length)]
    console.log(crystal3);

    crystal4 = crystal4[Math.floor(Math.random() * crystal4.length)]
    console.log(crystal4);

}
gameStart();

function winChecker() {
    console.log(currentValue);
    if (currentValue === randomNumber){
        alert("You Win");
        
    }
    else if (currentValue > randomNumber){
        alert("You Lose");
    }
}

$(".crystalBtn").on("click", function(){
    
    if (this.id === "crystal1Btn") {
        
        result = currentValue + crystal1;
        
        currentValue = result;
        
    }
    else if (this.id === "crystal2Btn") {
        
        result = currentValue + crystal2;
        
        currentValue = result;
        
    }
    else if (this.id === "crystal3Btn") {
        
        result = currentValue + crystal3;
        
        currentValue = result;
        
    }
    else if (this.id === "crystal4Btn") {
        
        result = currentValue + crystal4;
        
        currentValue = result;
        
    }

    winChecker();
})





  
});