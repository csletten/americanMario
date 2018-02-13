var bodyEl = document.querySelector("body");
bodyEl.addEventListener("keydown", moveFigure);


var left = 530;
var top = 200;
var velocity = 10;
var jumping = false;

drawMainRect();

class Person {
    constructor(xPos, yPos, health, speed, size, fileName) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.health = health;
        this.xVelocity = xVelocity;
        this.yVelocity = yVelocity;
        this.size = size;
        this.fileName = fileName;


    }
}

class Weapon {
    constructor(type, firerate, fileName) {
        this.type = type;
        this.firerate = firerate;
        this.fileName = fileName;
    }
}
var mainSprite = new Person("50px", "50px", 100, 0, 0, 1, "marioTest.png");

function moveFigure(e) {
    if (e.keyCode === 37) {
        left -= velocity;
    } else if (e.keyCode === 39) {
        left += velocity;
    } else if (e.keyCode === 38) {
        jumping = true;
    }
    //boksEl.style.top = top + "px";
    //boksEl.style.left = left + "px";

    if (jumping) {
        top -= velocity;
        jumping = false;
    }
}