var bodyEl = document.querySelector("body");
var jumping = false;
var playableAreaEl = document.getElementById("playableArea");
var content = document.getElementById("content");
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");



class Person {
    constructor(name, xPos, yPos, health, size, fileName) {
        this.name = name;
        this.xPos = xPos;
        this.yPos = yPos;
        this.xVelocity = 10;
        this.yVelocity = 30;
        this.health = health;
        this.size = size;
        this.fileName = fileName;
    }

    moveLeft() {
        this.xPos -= this.xVelocity;
    }

    moveRight() {
        this.xPos += this.xVelocity;
    }

    moveUp(e) {
        this.yPos -= this.yVelocity;

    }

    moveDown() {
        this.yPos += this.yVelocity;
    }

    damage(wound) {
        if (this.health > wound) {
            this.health -= wound;
        } else {
            this.health = 0;
        }
    }

    getHealth() {
        return this.health;
    }

    getxPos() {
        return this.xPos;
    }

    getyPos() {
        return this.yPos;
    }

    drawCharacter() {
        var img = new Image();
        img.src = this.fileName;
        img.id = this.name;
        img.style.position = "absolute";
        img.style.left = this.xPos + "px";
        img.style.top = this.yPos + "px";
        playableAreaEl.appendChild(img);
    }

    move() {
        var img = document.getElementById(this.name);
        img.style.left = this.xPos + "px";
        img.style.top = this.yPos + "px";
    }

    routine() {

    }

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
}
class Weapon {
    constructor(type, firerate, fileName) {
        this.type = type;
        this.firerate = firerate;
        this.fileName = fileName;
    }
}
var mainSprite = new Person("Tom", 100, 100, 100, 1, "img/marioTest.png");
var agent = new Person("Agent1", 400, 100, 100, 1, "img/agentTest.png");
mainSprite.drawCharacter();
agent.drawCharacter();
bodyEl.addEventListener("keydown", handleKeydown);
mainSprite.playerBounds();

function handleKeydown(e) {
    if (e.keyCode === 37) {
        mainSprite.moveLeft();
    } else if (e.keyCode === 39) {
        mainSprite.moveRight();
    } else if (e.keyCode === 38) {
        mainSprite.moveUp();
    }
    mainSprite.move();
}


function playerBounds() {
    mainSprite.xPos += mainSprite.xVelocity;
    if (mainSprite.xPos < 0) {
        mainSprite.xVelocity = 10;
    } else if (mainSprite.xPos > canvas.width) {
        mainSprite.xVelocity = -10;
    }

}


ctx.fillstyle = "green";
ctx.fillRect(0,60,500,200);