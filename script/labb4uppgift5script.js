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
            //console.log(textArray);
            //textArray[x] = textToTransform[x];
        }
    }
    if (outputText !== "") {
        //outputText = ((outputText) += (textArray[x]));
        console.log(outputText);
    }
    else {
        alert("Please enter a text of some sort!");
    }
}







//console.log(textToTransform[x]);
/*
        }
        else if ((textToTransform[x]) == (textToTransform.toUpperCase)){
            textToTransform[x].toLocaleLowerCase();
            //console.log(textToTransform[x]);
        }
        else if ((textToTransform[x]) == (textToTransform.toLowerCase)){
            textToTransform[x].toLocaleUpperCase();
            //console.log(textToTransform[x]);
        }
        else{
            console.log(textToTransform[x]);
        }
    }
}*/