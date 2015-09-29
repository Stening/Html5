window.onload = function(){
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
var easterbomb = document.getElementById("easterbomb");
var explosion = document.getElementById("explosion");
var bombisout = false;
var bombxpos = 0;
var bombypos = 0;
var bombexplosiontime;
var explosionsound = document.getElementById("explosionsound");
var snoopdazed = false;
var bombradius = [bombxpos + 50, bombxpos - 50, bombypos + 50, bombypos - 50];
snoopmusic.volume = 0.2;



beginbutton.onclick = function() {
    if (gameover === 0) {
        startingtext.style.display = "block";
        startingtimer.style.display = "block";
        gamestarted = 1;
    }
};

restartbutton.onclick = function() {
    if (gameover === 1) {
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
    if (ypos <= 420) {
        ypos = (ypos + 10);
        console.log(ypos);
        thebox.style.marginTop = (ypos + "px");
        console.log("moved down!");
        thebox.style.transform = 'rotate(90deg)';
    }
}

function moveup() {
    if (ypos > 0) {
        ypos = (ypos - 10);
        console.log(ypos);
        thebox.style.marginTop = (ypos + "px");
        console.log("moved up!");
        thebox.style.transform = 'rotate(270deg)';
    }
}

function moveleft() {
    if (xpos > 0) {
        xpos = (xpos - 10);
        console.log(xpos);
        thebox.style.marginLeft = (xpos + "px");
        console.log("moved left!");
        thebox.style.transform = 'scaleX(-1)';
    }
}

function moveright() {
    if (xpos < 1130) {
        xpos = (xpos + 10);
        console.log(xpos);
        thebox.style.marginLeft = (xpos + "px");
        console.log("done");
        thebox.style.transform = 'scaleX(1)';
    }
}

function laybomb() {
    if ((gameover === 0) && (bombisout === false) && (startingtimerInt === 0)) {
        easterbomb.style.marginLeft = ((xpos + 20) + "px");
        easterbomb.style.marginTop = ((ypos + 20) + "px");
        bombypos = (ypos + 20);
        bombxpos = (xpos + 20);
        easterbomb.style.display = "block";
        bombisout = true;
    }
}

function detonate() {
    if (gameover === 0) {
        explosion.style.marginLeft = ((bombxpos - 40) + "px");
        explosion.style.marginTop = ((bombypos - 40) + "px");
        easterbomb.style.display = "none";
        explosion.style.display = "block";
        explosion.style.backgroundImage = "url(../testing/explosion.gif)";
        explosionsound.volume = 0.5;
        explosionsound.play();
        if (((testbuttonxpos < (bombxpos + 100) && (testbuttonxpos > bombxpos - 100))) && (((testbuttonypos < (bombypos + 100))) && (testbuttonypos > (bombypos - 100)))) {
            snoopdazed = true;
        }
        setTimeout(function() {
            snoopdazed = false;
        }, 4000);

        setTimeout(function() {
            //explosion.style.display = "none";
            bombisout = false;
            explosion.style.backgroundImage = "";
        }, 1000);
    }
}

document.onkeydown = function(e) {
    if ((gameover === 0) && (gamestarted === 1)) {
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
            case 32:
                console.log("bomb");
                if (bombisout === false) {
                    laybomb();
                }
                else {
                    detonate();
                }
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
    if ((startingtimerInt === 0) && (gamestarted === 1) && (snoopdazed === false)) {
        if (gameover === 0) {
        }
        startingtext.style.display = "none";
        startingtimer.style.display = "none";
        if (testbuttonypos < ypos) {
            testbuttonypos = (testbuttonypos + 1);
            testbutton.style.marginTop = (testbuttonypos + "px");
        }
        if (testbuttonypos > ypos) {
            testbuttonypos = (testbuttonypos - 1);
            testbutton.style.marginTop = (testbuttonypos + "px");
        }
        if (testbuttonxpos < xpos) {
            testbuttonxpos = (testbuttonxpos + 1);
            testbutton.style.marginLeft = (testbuttonxpos + "px");
        }
        if (testbuttonxpos > xpos) {
            testbuttonxpos = (testbuttonxpos - 1);
            testbutton.style.marginLeft = (testbuttonxpos + "px");
        }
    }
}, 7);


setInterval(function() {
    if ((testbuttonypos === ypos) && (testbuttonxpos === xpos) && (startingtimerInt === 0) && (gamestarted === 1)) {
        console.log("i am caught");
        gameover = 1;
        snoopmusic.pause();
        gameoverdisplay.style.display = "block";
        gamestarted = 0;
    }
    else if((gamestarted === 1) && (startingtimerInt === 0)){
         snoopmusic.play();
    }
}, 1);



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

}