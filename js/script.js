var bodyEl = document.querySelector("body");
var canvasEl = document.getElementById("canvas");
var ctx = canvasEl.getContext("2d");
var mapHeight = (canvasEl.height / 3) * 2;

$(function () {
    var isJumping = false;
    var gravity = 1;

    var lincolnBilde1 = new Image;
    lincolnBilde1.src = "img/lincolnSide1.png";

    var fbiBilde = new Image;
    fbiBilde.src = "img/fbi.png";

    var kaktusBilde = new Image;
    kaktusBilde.src = "img/kaktus.png";

    startGame(lincolnBilde1, fbiBilde, kaktusBilde);

    update();
});


class Person {
    constructor(name, xPos, yPos, health, size, imageEl) {
        this.name = name;
        this.xPos = xPos;
        this.yPos = yPos;
        this.xVelocity = 10;
        this.jumpSpeed = -10;
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
    /*
    jump() {
        this.jumpSpeed += gravity;
        console.log("jumpSpeed" + this.jumpSpeed);
        this.yPos += this.jumpSpeed;
        window.requestAnimationFrame(jump);
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

function startGame(bilde1, bilde2, bilde3) {
    window.mainSprite = new Person("Tom", 100, mapHeight - 60, 100, 1, bilde1);
    window.agentTest = new Person("Agent1", 400, mapHeight - 55, 100, 1, bilde2);
    window.kaktus = new Person("Mr.Cactus", 200, mapHeight - 31, 100, 1, bilde3);

    bodyEl.addEventListener("keydown", handleKeydown);
}

function drawFloor() {
    ctx.fillStyle = "#943E0F";
    ctx.fillRect(0, mapHeight, canvasEl.width, canvasEl.height / 3);
}

function update() {
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    drawFloor();
    ctx.drawImage(mainSprite.imageEl, mainSprite.xPos, mainSprite.yPos);
    ctx.drawImage(agentTest.imageEl, agentTest.xPos, agentTest.yPos);
    ctx.drawImage(kaktus.imageEl, kaktus.xPos, kaktus.yPos);
    // window.requestAnimationFrame(jump);
    // window.requestAnimationFrame(drawFloor);
}

function handleKeydown(e) {
    if (e.keyCode === 37) {
        mainSprite.moveLeft();
    } else if (e.keyCode === 39) {
        mainSprite.moveRight();
    } else if (e.keyCode === 38) {
        //mainSprite.jump();
    }
    update();
}