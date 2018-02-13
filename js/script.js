var bodyEl = document.querySelector("body");
playableAreaEl = document.getElementById("playableArea");

var left = 530;
var top = 200;
var velocity = 10;
var jumping = false;

class Person {
    constructor(xPos, yPos, health, xVelocity, yVelocity, size, fileName) {
        this.xPos = xPos;
        this.yPos = yPos;
        this.health = health;
        this.xVelocity = xVelocity;
        this.yVelocity = yVelocity;
        this.size = size;
        this.fileName = fileName;
    }
    drawCharacter() {
        var img = new Image();
        img.src = this.fileName;
        playableAreaEl.appendChild(img);
        img.style.left = this.xPos;
        img.style.top = this.yPos;
        return img.style.top;
    }

    moveCharacter(){

    }
}

class Weapon {
    constructor(type, firerate, fileName) {
        this.type = type;
        this.firerate = firerate;
        this.fileName = fileName;
    }
}
var mainSprite = new Person(500, 500, 100, 0, 0, 1, "img/marioTest.png");
mainSprite.drawCharacter();

console.log(mainSprite.drawCharacter());
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