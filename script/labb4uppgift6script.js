


function hypotenuse(){
    var calcDone = false;
    while (calcDone === false){
    var aSide = prompt("Hypotenuse\nPlease enter the length of side A");
    var bSide = prompt("Hypotenuse\nPlease enter the length of side B");
    if (((isNaN(aSide) == false) && (aSide !== "")) && ((isNaN(bSide) == false) && (bSide !== ""))){
        var aNumber = parseInt(aSide, 10);
        var a2 = (Math.pow(aNumber, 2));
        var bNumber = parseInt(bSide, 10);
        var b2 = (Math.pow(bNumber, 2));
        var c2 = a2 + b2;
        var cOutput = Math.floor((Math.sqrt(c2)));
        alert("The length of C is: " + cOutput );
        calcDone = true;
        }
        else{
            alert("Please enter a number");
        }
    }
}