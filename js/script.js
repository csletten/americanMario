$(function () {
    var bodyEl = document.querySelector("body");
    var isJumping = false;
    var canvasEl = document.getElementById("canvas");
    var ctx = canvasEl.getContext("2d");
    var mapHeight = (canvasEl.height / 3) * 2;
    var gravity = 1;

    var lincolnBilde1 = new Image;
    lincolnBilde1.src = "img/lincolnSide1.png";

    var fbiBilde = new Image;
    fbiBilde.src = "img/fbi.png";

    var kaktusBilde = new Image;
    kaktusBilde.src = "img/kaktus.png";

    startGame(mapHeight, lincolnBilde1, fbiBilde, kaktusBilde, bodyEl);

    update(ctx, canvasEl, mapHeight);
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

    jump() {
        this.jumpSpeed += gravity;
        console.log("jumpSpeed" + this.jumpSpeed);
        this.yPos += this.jumpSpeed;
        window.requestAnimationFrame(jump);
    }

    routine() {

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

function startGame(mapHeight, bilde1, bilde2, bilde3, body) {
    window.mainSprite = new Person("Tom", 100, mapHeight - bilde1.height, 100, 1, bilde1);
    window.agentTest = new Person("Agent1", 400, mapHeight - bilde2.height, 100, 1, bilde2);
    window.kaktus = new Person("Mr.Cactus", 200, mapHeight - bilde3.height, 100, 1, bilde3);

    body.addEventListener("keydown", handleKeydown);
}

function drawFloor(ctx, canvasEl, mapHeight) {
    ctx.fillStyle = "#943E0F";
    ctx.fillRect(0, mapHeight, canvasEl.width, canvasEl.height / 3);
}

function update(ctx, canvasEl, mapHeight) {
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    drawFloor(ctx, canvasEl, mapHeight);
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


/*
function playerBounds() {
    mainSprite.xPos += mainSprite.xVelocity;
    if (mainSprite.xPos < 0) {
        mainSprite.xVelocity = 10;
    } else if (mainSprite.xPos > canvasEl.width) {
        mainSprite.xVelocity = -10;
    }

}
*/
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
