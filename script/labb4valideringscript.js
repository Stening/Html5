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
            console.log(postNumber)
            postNumberInputBox.style.backgroundColor = ("#75E376");
        }
        else {
            if ((document.getElementById("postnumbercheck")) || (document.getElementById("postnumbertriangle"))) {
                postNumberNotice.removeChild(postNumberNotice.firstChild);
                postNumberNotice.insertAdjacentHTML("afterbegin", "<i id='postnumbertriangle' class='fa fa-exclamation-triangle'></i>");
                //1.insertAdjacentHTML('afterend', '<div id="two">two</div>');
            }
            else {
                postNumberNotice.insertAdjacentHTML("afterbegin", "<i id='postnumbertriangle' class='fa fa-exclamation-triangle'></i>");
            }
            console.log("please enter the correct format!");
            postNumberInputBox.style.backgroundColor = ("#FF9F9F");
        }
    };




    firstNameInputBox.onblur = function() {
        if (firstNameInputBox.value.match(nameCheck) && (firstNameInputBox.value.length < 20)) {
            var firstLetter = (firstNameInputBox.value[0].toUpperCase());
            firstNameValidated = (firstLetter += firstNameInputBox.value);
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













    lastNameInputBox.onblur = function() {
        if (lastNameInputBox.value.match(nameCheck) && (lastNameInputBox.value.length < 20)) {
            var firstLetter = (lastNameInputBox.value[0].toUpperCase());
            lastNameValidated = (firstLetter += lastNameInputBox.value);
            lastNameValidated[0] = firstLetter;
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


    setInterval(function() {
        if ((document.getElementById("emailcheck")) && (document.getElementById("postnumbercheck")) && (document.getElementById("lastnamecheck")) && (document.getElementById("firstnamecheck") && (awaitingConfirm === false))) {
            submitButton.disabled = false;
        }
        else {
            submitButton.disabled = true;
        }
    }, 10);
    
    
    
    
    
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
    
    
    
    
    confirmButton.onclick = function(){
        form.submit();
    };
    
    
    cancelButton.onclick = function(){
        popupBox.style.display = "none";
        BlockerWindow.style.display = "none";
        BlockerWindow.style.opacity = "1";
    };
};




