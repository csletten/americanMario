var bodyEl = document.querySelector("body");
var isJumping = false;
var playableAreaEl = document.getElementById("playableArea");
var content = document.getElementById("content");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var marioBilde = new Image;
marioBilde.src = "img/marioTest.png";

var agentBilde = new Image;
agentBilde.src = "img/agentTest.png";



class Person {
    constructor(name, xPos, yPos, health, size, imageEl) {
        this.name = name;
        this.xPos = xPos;
        this.yPos = yPos;
        this.xVelocity = 10;
        this.jumpSpeed = 5;
        this.health = health;
        this.size = size;
        this.imageEl = imageEl;
    }

    moveLeft() {
        this.xPos -= this.xVelocity;
    }

    moveRight() {
        this.xPos += this.xVelocity;
    }

    damage(wound) {
        if (this.health > wound) {
            this.health -= wound;
        } else {
            this.health = 0;
        }
    }


    drawCharacter() {
        this.imageEl.style.position = "absolute";
        this.imageEl.style.left = this.xPos + "px";
        this.imageEl.style.top = this.yPos + "px";
        playableAreaEl.appendChild(this.imageEl);
    }

    move() {
        this.imageEl.style.left = this.xPos + "px";
        this.imageEl.style.top = this.yPos + "px";
    }

    jump() {
        var jumpint = setInterval(function() {
            this.yPos=this.yPos-jumpSpeed;
            if(this.yPos<=100)
            {
                isJumping == false;
                clearInterval(jumpint);
                alert("it works");
            }
        }, 100000);
        
    }

    routine() {

    }
    /*
    playerBounds() {
        mainSprite.xPos += this.xVelocity;
        if (mainSprite.xPos < 0) {
            console.log("ja");
            //this.xVelocity = 10;
        } else if (mainSprite.xPos > canvas.width) {
            //this.xVelocity = -10;
            console.log("ja");
        }

    }
    */
}
class Weapon {
    constructor(type, firerate, damage, fileName) {
        this.type = type;
        this.damage = damage;
        this.firerate = firerate;
        this.fileName = fileName;
    }
}
var mainSprite = new Person("Tom", 100, 100, 100, 1, marioBilde);
var agent = new Person("Agent1", 400, 100, 100, 1, agentBilde);
mainSprite.drawCharacter();
agent.drawCharacter();
bodyEl.addEventListener("keydown", handleKeydown);
//mainSprite.playerBounds();

function handleKeydown(e) {
    if (e.keyCode === 37) {
        mainSprite.moveLeft();
    } else if (e.keyCode === 39) {
        mainSprite.moveRight();
    } else if (e.keyCode === 38) {
        mainSprite.jump();
    }
    mainSprite.drawCharacter();
}


function playerBounds() {
    mainSprite.xPos += mainSprite.xVelocity;
    if (mainSprite.xPos < 0) {
        mainSprite.xVelocity = 10;
    } else if (mainSprite.xPos > canvas.width) {
        mainSprite.xVelocity = -10;
    }

}

console.log(mainSprite.yPos);

/*
if (mainSprite.yPos == 100){
    console.log("Bra if-test");
}
*/


// Style
ctx.fillstyle = "green";
ctx.fillRect(0, 60, 500, 200);


/* 
isJumping = true;
// console.log(this.xPos);
setInterval(function () {
    console.log("function check");
    if (this.yPos == 100) {
        /*
        isJumping == false;
       
        clearInterval(jumpInt);
        jumpInt = 0;
        console.log("it works");
        // return;
        */
        /*console.log("Bra if-test");
    } else {
        this.yPos = this.yPos - this.jumpSpeed;
        console.log("Dårlig if-test");
    }    
}, 100000);
*/
