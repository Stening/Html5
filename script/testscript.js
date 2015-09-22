var xpos = 0;
var ypos = 0;
var testbutton = document.getElementById("testbutton");
var thebox = document.getElementById("thebox");
var testbuttonxpos = 0;
var testbuttonypos = 0;
var gameoverdisplay = document.getElementById("gameoverdisplay");
var gameover = 0;
var gamestarted = 0;
var startingtext = document.getElementById("startingtext");
var startingtimer = document.getElementById("startingtimer");
var survivaltimer = document.getElementById("survivaltimer");
var restartbutton = document.getElementById("restartbutton");
var beginbutton = document.getElementById("beginbutton");
var startingtimerInt = 5;
var snoopmusic = document.getElementById("snoopsong");

beginbutton.onclick = function(){
    if(gameover === 0){
    startingtext.style.display = "block";
    startingtimer.style.display = "block";
    gamestarted = 1;
    }
};

restartbutton.onclick = function(){
    if(gameover === 1){
    gamestarted = 1;
    gameover = 0;
    startingtimerInt = 5;
    startingtext.style.display = "block";
    startingtimer.style.display = "block";
    gameoverdisplay.style.display = "none";
    thebox.style.marginTop = (0 + "px");
    thebox.style.marginLeft = (0 + "px");
    testbutton.style.marginLeft = (0 + "px");
    testbutton.style.marginTop = (0 + "px");
    ypos = 0;
    xpos = 0;
    testbuttonxpos = 0;
    testbuttonypos = 0;
    }
};




function movedown() {
    if (xpos <= 440) {
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
    if (ypos < 1150) {
        ypos = (ypos + 10);
        console.log(ypos);
        thebox.style.marginLeft = (ypos + "px");
        console.log("done");
    }
}



    document.onkeydown = function(e) {
        if((gameover === 0 ) && (gamestarted === 1)){
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
    }
};



console.log(startingtimerInt);
setInterval(function() {
    if ((startingtimerInt > 0) && (gamestarted === 1)) {
        startingtimerInt = (startingtimerInt - 1);
        console.log(startingtimerInt);
        document.getElementById("startingtimer").innerHTML = startingtimerInt;
    }
}, 1000);


setInterval(function() {
    if ((startingtimerInt === 0) && (gamestarted === 1)) {
        if(gameover === 0){
            snoopmusic.volume = 0.2;
            snoopmusic.play();
        }
        console.log("intervall");
        startingtext.style.display = "none";
        startingtimer.style.display = "none";
        if (testbuttonxpos < xpos) {
            testbuttonxpos = (testbuttonxpos + 1);
            testbutton.style.marginTop = (testbuttonxpos + "px");
        }
        if (testbuttonxpos > xpos) {
            testbuttonxpos = (testbuttonxpos - 1);
            testbutton.style.marginTop = (testbuttonxpos + "px");
        }
        if (testbuttonypos < ypos) {
            testbuttonypos = (testbuttonypos + 1);
            testbutton.style.marginLeft = (testbuttonypos + "px");
        }
        if (testbuttonypos > ypos) {
            testbuttonypos = (testbuttonypos - 1);
            testbutton.style.marginLeft = (testbuttonypos + "px");
        }
    }
}, 7);




setInterval(function(){
if ((testbuttonypos === ypos) && (testbuttonxpos === xpos) && (startingtimerInt === 0) && (gamestarted === 1)) {
            console.log("i am caught");
            gameover = 1;
            snoopmusic.pause();
        }
}, 1);


setInterval(function(){
if(gameover === 1){
        gameoverdisplay.style.display = "block";
        gamestarted = 0;
}
}, 100);





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