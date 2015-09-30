window.onload = function() {
    var submitButton = document.getElementById("submitbutton");
    var firstNameInputBox = document.getElementById("firstnameinputbox");
    var lastNameInputBox = document.getElementById("lastnameinputbox");
    var postNumberInputBox = document.getElementById("postnumberinputbox");
    var postNumberNotice = document.getElementById("postnumbernotice");
    var letters = /^[a-öA-Ö]+$/;
    var info = [];
    var  toggle = true;
    
    
    
    postNumberInputBox.onblur = function() {
        var postNummerInputValidated = "";
        var postNummerInputsorted = "";
        for (var i = 0; i < postNumberInputBox.value.length; i++) {
            switch (postNumberInputBox.value[i]) {
                case "e":
                case "E":
                case "S":
                case "s":
                case " ":
                case "-":
                    postNummerInputsorted += "";
                    break;
                default:
                    postNummerInputsorted += postNumberInputBox.value[i];
                    //console.log(postNumberInputBox[i]);
                    //console.log(postNummerInputsorted);
            }
        }
        postNummerInputValidated = parseInt(postNummerInputsorted, 10);
        //console.log(isNaN(postNummerInputValidated));
        //console.log(postNummerInputValidated.toString().length);
        if (((postNummerInputsorted.length) < 6) && ((postNummerInputsorted.length) > 0)) {
            //console.log(isNaN(postNummerInputValidated));
            console.log(postNummerInputValidated.toString().length);
            console.log("success");
            postNumberNotice.removeChild(postNumberNotice.firstChild);
            postNumberNotice.insertAdjacentHTML("afterbegin", "<i class='fa fa-check'></i>");
        }
        else {
            //console.log(postNummerInputValidated);
            //console.log(isNaN(postNummerInputValidated));
            //console.log(postNummerInputValidated.toString().length);
            console.log("please enter the correct format!");
            //postNumberNotice.insertAdjacentHTML("afterend", "<i id='triangle' class='fa fa-exclamation-triangle'></i>");
            postNumberNotice.removeChild(postNumberNotice.firstChild);
            postNumberNotice.insertAdjacentHTML("afterbegin", "<i class='fa fa-exclamation-triangle'></i>");
            //1.insertAdjacentHTML('afterend', '<div id="two">two</div>');
        }
    };
    
    firstNameInputBox.onblur = function() {
        if(firstNameInputBox.value.match(letters)){
            var firstLetter = (firstNameInputBox.value[0].toUpperCase());
            
            var firstNameValidated = (firstLetter += firstNameInputBox.value);
            console.log(firstNameValidated);
            lastNameInputBox.focus();
        }
        else{
            alert("please enter the proper format!");
            firstNameInputBox.focus();
        }
        
    };
    
    
    lastNameInputBox.onblur = function() {
        if(lastNameInputBox.value.match(letters)){
            var firstLetter = (lastNameInputBox.value[0].toUpperCase());
            
            var lastNameValidated = (firstLetter += lastNameInputBox.value);
            lastNameValidated[0] = firstLetter;
            console.log(lastNameValidated);
            postNumberInputBox.focus();
        }
        else{
            alert("please enter the proper format!");
            lastNameInputBox.focus();
        }
        
    };
    
    
    
    submitButton.onclick = function() {
            var inputNameText = firstNameInputBox.value;
            console.log(inputNameText);
        };
};



