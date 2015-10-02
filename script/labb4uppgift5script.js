

//the for loop goes through every character of the user input, then converts it to upper/lower case or makes it # if required
//i continue to add the new characters into the variable "outputText" then log it in the console
function transformString(textToTransform) {
    var textArray = [];
    var outputText = "";
    for (var x = 0; textToTransform.length > x; x++) {
        if ((textToTransform[x] == "A") || (textToTransform[x] == "a")) {
            outputText += "#";
        }
        else if ((textToTransform[x]) == (textToTransform[x].toUpperCase())) {
            textArray[x] = textToTransform[x].toLowerCase();
            outputText = ((outputText) += (textArray[x]));
        }
        else if ((textToTransform[x]) == (textToTransform[x].toLowerCase())) {
            textArray[x] = textToTransform[x].toUpperCase();
            outputText = ((outputText) += (textArray[x]));
        }
        else {
            alert("Please enter a text of some sort!");
        }
    }
    if (outputText !== "") {
        console.log(outputText);
    }
    else {
        alert("Please enter a text of some sort!");
    }
}

