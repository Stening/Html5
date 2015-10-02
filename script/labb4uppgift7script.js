


//i go through every value in the incoming array, add the values together, and use Math.max and Math.min to collect the maximum and minimum values
//then i declare a new array containing the three values, and then i console log all the values and the created array
function tentamen(inputArray) {
     var valueSum = 0;
    for(var i = 0; i < inputArray.length; i++){
        valueSum += (inputArray[i]);
    }
    var highestNum = Math.max.apply(undefined, inputArray);
    var lowestNum = Math.min.apply(undefined, inputArray);
    var medelTal = Math.floor((valueSum / inputArray.length));
    var outputArray = [medelTal, highestNum, lowestNum];
    console.log("Medeltalet är: " + medelTal);
    console.log("Det högsta talet är: " + highestNum);
    console.log("Det lägsta talet är: " + lowestNum);
    console.log(outputArray);
}