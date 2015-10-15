window.onload = function() {
    var submitButton = document.getElementById("submitbutton");
    var firstNameInputBox = document.getElementById("firstnameinputbox");
    var lastNameInputBox = document.getElementById("lastnameinputbox");
    var postNumberInputBox = document.getElementById("postnumberinputbox");
    var postNumberNotice = document.getElementById("postnumbernotice");
    var lastNameNotice = document.getElementById("lastnamenotice");
    var firstNameNotice = document.getElementById("firstnamenotice");
    var priceModel = document.getElementById("firstnamenotice");
    var nameCheck = /^[a-öA-Ö]+$/;
    var emailCheck = /^([a-öA-Ö]+[.][a-öA-Ö]+[@][a-öA-Ö]+[.][a-öA-Ö]+|[a-öA-Ö]+[@][a-öA-Ö]+[.][a-öA-Ö]+)$/;
    var postNumberFormat = /^([Ss][Ee][ -]\d{5}|\d{5}|\d{3}[- ]\d{2}|[sS][eE]\d{3}[- ]\d{2}|[Ss][Ee]\d{5}|[Ss][Ee]\d{3}[- ]\d{2}|[Ss][Ee][ -]\d{3}[- ]\d{2})$/;
    var emailInputBox = document.getElementById("emailinputbox");
    var emailNotice = document.getElementById("emailnotice");
    var firstNameValidated = "";
    var lastNameValidated = "";
    var postNumber = "";
    var popupBox = document.getElementById("popupbox");
    var inputInfoBox = document.getElementById("inputinfo");
    var awaitingConfirm = false;
    var confirmButton = document.getElementById("confirmbutton");
    var cancelButton = document.getElementById("cancelbutton");
    var BlockerWindow = document.getElementById("blocker");
    var form = document.getElementById("form");
//collection of variables, mostly id's of html tags
//i also use the regexp (regular expression) to easily compare the input string to my custom required pattern










//when the input box for postnumber goes out of focus, i use .match to apply my regesp and check if it matches my pattern.
    postNumberInputBox.onblur = function() {
        if (postNumberInputBox.value.match(postNumberFormat)) {
            console.log("sucess!");
            if ((document.getElementById("postnumbercheck")) || (document.getElementById("postnumbertriangle"))) {
                postNumberNotice.removeChild(postNumberNotice.firstChild);
                postNumberNotice.insertAdjacentHTML("afterbegin", "<i id='postnumbercheck' class='fa fa-check'></i>");
            }
            else {
                postNumberNotice.insertAdjacentHTML("afterbegin", "<i id='postnumbercheck' class='fa fa-check'></i>");
            }
            postNumber = "";
            //after that, i remove all the non-numbers that are exluded from my pattern and save it in a variable
            for (var i = 0; i < postNumberInputBox.value.length; i++) {
                switch (postNumberInputBox.value[i]) {
                    case " ":
                    case "-":
                    case "S":
                    case "s":
                    case "e":
                    case "E":
                        postNumber += "";
                        break;
                    default:
                        postNumber += postNumberInputBox.value[i];
                }
            }
            console.log(postNumber);
            postNumberInputBox.style.backgroundColor = ("#75E376");
        }
        else {
            if ((document.getElementById("postnumbercheck")) || (document.getElementById("postnumbertriangle"))) {
                postNumberNotice.removeChild(postNumberNotice.firstChild);
                postNumberNotice.insertAdjacentHTML("afterbegin", "<i id='postnumbertriangle' class='fa fa-exclamation-triangle'></i>");
            }
            else {
                postNumberNotice.insertAdjacentHTML("afterbegin", "<i id='postnumbertriangle' class='fa fa-exclamation-triangle'></i>");
            }
            console.log("please enter the correct format!");
            postNumberInputBox.style.backgroundColor = ("#FF9F9F");
        }
    };





//i check the name so that it contains only letters using .match, then convert the first letter to uppercase.
//for the checkmarks and triangles, i simply check if they or their counterpart already exist, if so i remove it and add the one that matches if the input is correct
    firstNameInputBox.onblur = function() {
        if (firstNameInputBox.value.match(nameCheck) && (firstNameInputBox.value.length < 20)) {
            /*here starts the edit for the error i found*/
            var firstLetter = (firstNameInputBox.value[0].toUpperCase());
            firstNameValidated = firstLetter;
            for (var i=1; i<firstNameInputBox.value.length; i++){
                firstNameValidated += firstNameInputBox.value[i];
            }
            /*here ends the edit for the error i found*/
            console.log(firstNameValidated);
            if ((document.getElementById("firstnamecheck")) || (document.getElementById("firstnametriangle"))) {
                firstNameNotice.removeChild(firstNameNotice.firstChild);
                firstNameNotice.insertAdjacentHTML("afterbegin", "<i id='firstnamecheck' class='fa fa-check'></i>");
            }
            else {
                firstNameNotice.insertAdjacentHTML("afterbegin", "<i id='firstnamecheck' class='fa fa-check'></i>");
            }
            firstNameInputBox.style.backgroundColor = ("#75E376");
        }
        else {
            if ((document.getElementById("firstnamecheck")) || (document.getElementById("firstnametriangle"))) {
                firstNameNotice.removeChild(firstNameNotice.firstChild);
                firstNameNotice.insertAdjacentHTML("afterbegin", "<i id='firstnametriangle' class='fa fa-exclamation-triangle'></i>");
            }
            else {
                firstNameNotice.insertAdjacentHTML("afterbegin", "<i id='firstnametriangle' class='fa fa-exclamation-triangle'></i>");
                console.log("please enter the proper format!");
                firstNameInputBox.focus();
            }
            firstNameInputBox.style.backgroundColor = ("#FF9F9F");
        }
    };





//i check the last name so that it contains only letters using .match, then convert the first letter to uppercase.
//for the checkmarks and triangles, i simply check if they or their counterpart already exist, if so i remove it and add the one that matches if the input is correct
    lastNameInputBox.onblur = function() {
        if (lastNameInputBox.value.match(nameCheck) && (lastNameInputBox.value.length < 20)) {
            
            var firstLetter = (lastNameInputBox.value[0].toUpperCase());
            /*here starts the edit for the error i found*/
            lastNameValidated = firstLetter;
            for (var i=1; i<lastNameInputBox.value.length; i++){
                lastNameValidated += lastNameInputBox.value[i];
            }
             /*here ends the edit for the error i found*/
            console.log(lastNameValidated);
            if ((document.getElementById("lastnamecheck")) || (document.getElementById("lastnametriangle"))) {
                lastNameNotice.removeChild(lastNameNotice.firstChild);
                lastNameNotice.insertAdjacentHTML("afterbegin", "<i id='lastnamecheck' class='fa fa-check'></i>");
            }
            else {
                lastNameNotice.insertAdjacentHTML("afterbegin", "<i id='lastnamecheck' class='fa fa-check'></i>");
            }
            lastNameInputBox.style.backgroundColor = ("#75E376");
        }
        else {
            if ((document.getElementById("lastnamecheck")) || (document.getElementById("lastnametriangle"))) {
                lastNameNotice.removeChild(lastNameNotice.firstChild);
                lastNameNotice.insertAdjacentHTML("afterbegin", "<i id='lastnametriangle' class='fa fa-exclamation-triangle'></i>");
            }
            else {
                lastNameNotice.insertAdjacentHTML("afterbegin", "<i id='lastnametriangle' class='fa fa-exclamation-triangle'></i>");
                console.log("please enter the proper format!");
            }
            lastNameInputBox.style.backgroundColor = ("#FF9F9F");
        }
    };







//on the email i simply use the .match again to check that it has atleast a @ and a dot somwhere after so that it resembles an email-adress
//for the checkmarks and triangles, i simply check if they or their counterpart already exist, if so i remove it and add the one that matches if the input is correct
    emailInputBox.onblur = function() {
        if (emailInputBox.value.match(emailCheck) && (emailInputBox.value.length < 35)) {
            if ((document.getElementById("emailcheck")) || (document.getElementById("emailtriangle"))) {
                emailNotice.removeChild(emailNotice.firstChild);
                emailNotice.insertAdjacentHTML("afterbegin", "<i id='emailcheck' class='fa fa-check'></i>");
            }
            else {
                emailNotice.insertAdjacentHTML("afterbegin", "<i id='emailcheck' class='fa fa-check'></i>");
            }
            emailInputBox.style.backgroundColor = ("#75E376");
        }
        else {
            if ((document.getElementById("emailcheck")) || (document.getElementById("emailtriangle"))) {
                emailNotice.removeChild(emailNotice.firstChild);
                emailNotice.insertAdjacentHTML("afterbegin", "<i id='emailtriangle' class='fa fa-exclamation-triangle'></i>");
            }
            else {
                emailNotice.insertAdjacentHTML("afterbegin", "<i id='emailtriangle' class='fa fa-exclamation-triangle'></i>");
                console.log("please enter the proper format!");
                emailInputBox.focus();
            }
            emailInputBox.style.backgroundColor = ("#FF9F9F");
        }
        console.log(emailInputBox.value.length);
    };

//this function continuously checks if there are checkmarks after every input box, then enable the "genomför köp" button
    setInterval(function() {
        if ((document.getElementById("emailcheck")) && (document.getElementById("postnumbercheck")) && (document.getElementById("lastnamecheck")) && (document.getElementById("firstnamecheck") && (awaitingConfirm === false))) {
            submitButton.disabled = false;
        }
        else {
            submitButton.disabled = true;
        }
    }, 10);
    
    
    
    
    
    
    
    
    
    
    
    // here i collect from all the inputboxes or related variables and display it in the popup box
    //i also add a huge "cover" over all the inputboxes to disable the user from clicking anything other than the popup menu
    submitButton.onclick = function() {
        popupBox.style.display = "block";
        document.getElementById("confirmfirstname").textContent = firstNameValidated;
        document.getElementById("confirmlastname").textContent = lastNameValidated;
        document.getElementById("confirmpostnumber").textContent = postNumber;
        document.getElementById("confirmpricemodel").textContent = document.getElementById("pricemodel").value;
        document.getElementById("confirmemail").textContent = emailInputBox.value;
        BlockerWindow.style.display = "block";
        BlockerWindow.style.opacity = "0.5";
        
    };
    
    
    //simply submits the form when i click the "färdigställ köp" button
    confirmButton.onclick = function(){
        form.submit();
    };
    
    
    //when clicked, hides the popupmenu and the "cover" for some reason i needed to set the opacity on the "cover" i did not have the time to figure out why
    cancelButton.onclick = function(){
        popupBox.style.display = "none";
        BlockerWindow.style.display = "none";
        BlockerWindow.style.opacity = "1";
    };
};




