//knappar
var uppgift1Knapp = document.getElementById("uppgift1button");
var uppgift2Knapp = document.getElementById("uppgift2button");
var uppgift3Knapp = document.getElementById("uppgift3button");
var uppgift4Knapp = document.getElementById("uppgift4button");
var uppgift5Knapp = document.getElementById("uppgift5button");
var uppgift6Knapp = document.getElementById("uppgift6button");
//knappar


// Uppgift 1
uppgift1Knapp.onclick = function() {
    console.log("Hello World!");
    alert("Rad 1\nRad 2");
};
// Uppgift 1



// Uppgift 2
uppgift2Knapp.onclick = function() {
    function medeltal(in1, in2, in3, in4) {
        return ((in1 + in2 + in3 + in4) / 4);
    }
    console.log(medeltal(2, 3, 9, 7));
    function separera(in1, in2, in3, in4) {
        return (in1 + " ," + in2 + " ," + in3 + " ," + in4);
    }
    console.log(separera("hej", "på", "dig", "du!"));
};
// Uppgift 2



// Uppgift 3
function guessingGame() {
    var compNumber = Math.floor(Math.random() * (99) + 1);
    console.log("*SPOILER* the randomized number is: " + compNumber);
    var guessCounter = 1;
    var gameover = false;
    while (gameover === false) {
        var humanInput = prompt('Im thinking of a number between 1 and 100, try to guess it! (type "cancel" to exit the game)');
        if ((isNaN(humanInput) === false) && (humanInput !== "")) {
            var humanNumber = parseInt(humanInput, 10);
            console.log("your input was: " + humanNumber);
            if (humanNumber === compNumber){
                alert("You win!! and it only took you " + guessCounter + " time(s) to guess!");
                gameover = true;
            }
            else if ((humanNumber > compNumber) && (humanNumber < 101)) {
                alert("The number i'm thinking of is lower than that!");
                guessCounter += 1;
            }
            else if ((humanNumber < compNumber) && (humanNumber > 0)) {
                alert("The number i'm thinking of is higher than that!");
                guessCounter += 1;
            }
            else if (humanNumber < 1) {
                alert("The number " + humanNumber + " is lower than 1!! (counts as a guess)");
                guessCounter += 1;
            }
            else if (humanNumber > 100) {
                alert("The number " + humanNumber + " is higher than 100!! (counts as a guess)");
                guessCounter += 1;
            }
        }
        else if(humanInput === "cancel"){
        gameover = true;
        }
        else {
            console.log("please enter a number, this still counts as a guess though! you have guessed " + guessCounter + " time(s), not my fault you are being dumb..");
            alert("please enter a number, this still counts as a guess though! you have guessed " + guessCounter + " time(s), not my fault you are being dumb..");
            guessCounter += 1;
        }
    }
}

uppgift3Knapp.onclick = guessingGame;
// Uppgift 3



// Uppgift 4
// Uppgift 4



// Uppgift 5

uppgift5Knapp.onclick = function(){
    transformString((prompt("enter the text you want transformed!")));
};

// Uppgift 5


// Uppgift 5
uppgift6Knapp.onclick = function(){
    hypotenuse();
};

// Uppgift 5
