var bodyEl = document.querySelector("body");
playableAreaEl = document.getElementById("playableArea");

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

    routine(){
        
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