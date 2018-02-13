var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");
var bodyEl = document.querySelector("body");
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

    draw() {
        var img = document.createElement("img");
        img.src = "img/" + this.fileName;
        ctx.drawImage(img, xPos, yPos);
    }
}

class Weapon {
    constructor(type, firerate, fileName) {
        this.type = type;
        this.firerate = firerate;
        this.fileName = fileName;
    }
}

var bodyEl = document.querySelector("body");
var boksEl = document.getElementById("figur");
var canvas = document.getElementById("mittCanvas");
var ctx = canvas.getContext("2d");

var mainSprite = new Person("50px", "50px", 100, 0, 0, 1, "img/marioTest.png");

var left = 530;
var top = 200;

var velocity = 10;

bodyEl.addEventListener("keydown", moveFigure);

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

function drawMainRect() {
    ctx.fillRect(250, 250, 50, 50);
    ctx.fillStyle = "red";
    ctx.stroke();
}
