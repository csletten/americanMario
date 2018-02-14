var bodyEl = document.querySelector("body");
var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");

var jumping = false;

class Person {
    constructor(name, xPos, yPos, health, size, fileName) {
        this.name = name;
        this.xPos = xPos;
        this.yPos = yPos;
        this.xVelocity = 10;
        this.yVelocity = 10;
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

    moveUp() {
        for (var i = 0; i <)
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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, this.xPos, this.yPos);
}

routine(){
}
}

class Weapon {
    constructor(type, firerate, damage, fileName) {
        this.type = type;
        this.damage = damage;
        this.firerate = firerate;
        this.fileName = fileName;
    }
}

var gaaBilde = new Image();
bilde.src = "img/cdsvfd";

var hoppeBilde =

var mainSprite = new Person("Lincoln", 50, 50, 100, 1, "img/marioTest.png");
var agent = new Person("Agent1", 100, 100, 100, 1, "img/agentTest.png");
mainSprite.drawCharacter();
agent.drawCharacter();
bodyEl.addEventListener("keydown", handleKeydown);

function handleKeydown(e) {
    if (e.keyCode === 37) {
        mainSprite.moveLeft();
    } else if (e.keyCode === 39) {
        mainSprite.moveRight();
    } else if (e.keyCode === 38) {
        jumping = true;
        // jump();
    }
    mainSprite.drawCharacter();
}

// var mainChar = document.getElementById("Lincoln");


function jump() {
    if (jumping) {
        jumping = false;
    }
}

// mainChar.addEventListener("animationend", stopJump);

function stopJump() {
    console.log("Suksess");
    // mainChar.classList.remove('animateJump');
}