/*
var knapp1 = document.getElementById("indexmeny_1");
var clicksound = new Audio("clicksound.wav");

knapp1.onmouseover = function(){
    clicksound.play();
    alert("testing!")
};*/
/*
var header = document.getElementById("header");
var footer = document.getElementById("dummies");

header.onclick = function animate(){
    $('#content').animate({'margin-top': '300px'},500);
};


footer.onclick = function resetanimation(){
    $('#content').animate({'margin-top': '0px'},500);
};*/

var xpos = 0;
var ypos = 0;
var testbutton = document.getElementById("testbutton");
var thebox = document.getElementById("thebox");
var testbuttonxpos = 0;
var testbuttonypos = 0;
var gameoverdisplay = document.getElementById("gameoverdisplay");
var gameover = 0;
var gamestarted = 0;


if (gameover === 1) {
    gameoverdisplay.style.display = "block";
}


function movedown() {
    if (xpos <= 470) {
        xpos = (xpos + 10);
        console.log(xpos);
        thebox.style.marginTop = (xpos + "px");
        console.log("moved down!");
    }
}

function moveup() {
    if (xpos > 0) {
        xpos = (xpos - 10);
        console.log(xpos);
        thebox.style.marginTop = (xpos + "px");
        console.log("moved up!");
    }
}

function moveleft() {
    if (ypos > 0) {
        ypos = (ypos - 10);
        console.log(ypos);
        thebox.style.marginLeft = (ypos + "px");
        console.log("moved left!");
    }
}

function moveright() {
    if (ypos < 1180) {
        ypos = (ypos + 10);
        console.log(ypos);
        thebox.style.marginLeft = (ypos + "px");
        console.log("done");
    }
}


//if (gameover === 0) {
    document.onkeydown = function(e) {
        switch (e.which) {
            case 37:
                console.log('left');
                moveleft();
                break;
            case 38:
                console.log('up');
                moveup();
                break;
            case 39:
                console.log('right');
                moveright();
                break;
            case 40:
                console.log('down');
                movedown();
                break;
        }
    };
//}
/*
 if(gameover === 0){
     controls();
 }*/


setInterval(function() {
    console.log("intervall");
    if (testbuttonxpos < xpos) {
        testbuttonxpos = (testbuttonxpos + 10);
        testbutton.style.marginTop = (testbuttonxpos + "px");
    }
    if (testbuttonxpos > xpos) {
        testbuttonxpos = (testbuttonxpos - 10);
        testbutton.style.marginTop = (testbuttonxpos + "px");
    }
    if (testbuttonypos < ypos) {
        testbuttonypos = (testbuttonypos + 10);
        testbutton.style.marginLeft = (testbuttonypos + "px");
    }
    if (testbuttonypos > ypos) {
        testbuttonypos = (testbuttonypos - 10);
        testbutton.style.marginLeft = (testbuttonypos + "px");
    }
    if ((testbuttonypos === ypos) && (testbuttonxpos === xpos)){
        console.log("i am caught");
    }
}, 1000);











/*

var testbutton = document.getElementById("testbutton")
var thebox = document.getElementById("thebox")

testbutton.onclick = function increasexpos(thebox, xpos){
        console.log("testing");
        document.getElementById(thebox).setAttribute("style", "margin-top:" + "200".toString() + "px");
};


function increasexpos(ObjectID, Value){
    /*document.getElementById("thebox").style.marginTop = (xpos.tostring() + "px");
    document.getElementById(ObjectID).setAttribute("style", "margin-top:" + Value.toString() + "px");
}



*/