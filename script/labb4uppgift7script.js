


function tentamen(inputArray) {
     var valueSum = 0;
    for(var x = 0; x < inputArray.length; x++){
        valueSum += (inputArray[x]);
        //console.log(inputArray[x]);
    }
    //var highest = inputArray.Math.max();
    var highestNum = Math.max.apply(undefined, inputArray);
    var lowestNum = Math.min.apply(undefined, inputArray);
    //console.log(highest);
    var medelTal = (valueSum / inputArray.length);
    var outputArray = [medelTal, highestNum, lowestNum];
    console.log("Medeltalet är: " + medelTal);
    console.log("Det högsta talet är: " + highestNum);
    console.log("Det lägsta talet är: " + lowestNum);
    console.log(outputArray);
}