var bodyEl = document.querySelector("body");
var canvasEl = document.getElementById("canvas");
var ctx = canvasEl.getContext("2d");
var mapHeight = (canvasEl.height / 3) * 2;
var weaponLocationX = 250; 
var weaponLocationY = mapHeight - 10;
var weaponX = 23;
var weaponY = 24;
var weaponChange = false;

$(function () {
    var isJumping = false;
    var gravity = 1;

    var lincolnBilde1 = new Image;
    lincolnBilde1.src = "img/lincolnSide1.png";

    var fbiBilde = new Image;
    fbiBilde.src = "img/fbi.png";

    var kaktusBilde = new Image;
    kaktusBilde.src = "img/kaktus.png";

    var automatBilde = new Image;
    automatBilde.src = "img/maskinpistol.png";

    var pistolBilde = new Image;
    pistolBilde.src = "img/pistol.png";

    startGame(lincolnBilde1, fbiBilde, kaktusBilde, automatBilde, pistolBilde);

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

function startGame(bilde1, bilde2, bilde3, bilde4, bilde5) {
    window.mainSprite = new Person("Tom", 100, mapHeight - 60, 100, 1, bilde1);
    window.agentTest = new Person("Agent1", 400, mapHeight - 55, 100, 1, bilde2);
    window.kaktus = new Person("Mr.Cactus", 200, mapHeight - 31, 100, 1, bilde3);
    window.bigWeapon = new Person("AR15", 250, mapHeight - 10, 100, 1, bilde4);
    window.bigWeapon2 = new Person("AR15", 422, mapHeight - 22, 100, 1, bilde4);
    window.pistol = new Person("Gun", 124, mapHeight - 37, 100, 1, bilde5);

    bodyEl.addEventListener("keydown", handleKeydown);
}

function drawFloor() {
    ctx.fillStyle = "#943E0F";
    ctx.fillRect(0, mapHeight, canvasEl.width, canvasEl.height / 3);
}
/*
function shoot() {
    ctx.fillStyle = "red";
    ctx.fillRect(0, mapHeight, canvasEl.width, canvasEl.height / 3);
}
*/

function update() {
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    drawFloor();
    ctx.drawImage(mainSprite.imageEl, mainSprite.xPos, mainSprite.yPos);
    ctx.drawImage(agentTest.imageEl, agentTest.xPos, agentTest.yPos);
    ctx.drawImage(kaktus.imageEl, kaktus.xPos, kaktus.yPos);
    ctx.drawImage(bigWeapon.imageEl, bigWeapon.xPos, bigWeapon.yPos);
    ctx.drawImage(bigWeapon2.imageEl, bigWeapon2.xPos, bigWeapon2.yPos);
    ctx.drawImage(pistol.imageEl, pistol.xPos, pistol.yPos);
    // window.requestAnimationFrame(jump);
    // window.requestAnimationFrame(drawFloor);
}

function handleKeydown(e) {

    if (weaponChange){
        if (e.keyCode === 37) {
            mainSprite.moveLeft();
            bigWeapon.moveLeft();
        } else if (e.keyCode === 39) {
            mainSprite.moveRight();
            bigWeapon.moveRight();
        } else if (e.keyCode === 38) {
            //mainSprite.jump();
        } else if (e.keyCode === 80){
            bigWeapon.xPos = weaponLocationX;
            bigWeapon.yPos = weaponLocationY;
            pistol.xPos = mainSprite.xPos + weaponX;
            pistol.yPos = mainSprite.yPos + weaponY;
            weaponChange = false;
        }
    }else{
        if (e.keyCode === 37) {
            mainSprite.moveLeft();
            pistol.moveLeft();
        } else if (e.keyCode === 39) {
            mainSprite.moveRight();
            pistol.moveRight();
        } else if (e.keyCode === 38) {
            //mainSprite.jump();
        } else if (e.keyCode === 80){
            pistol.xPos = weaponLocationX;
            pistol.yPos = weaponLocationY;
            bigWeapon.xPos = mainSprite.xPos + weaponX;
            bigWeapon.yPos = mainSprite.yPos + weaponY;
            weaponChange = true;
        }
    }
    
    update();
}