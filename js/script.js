/*
Likheter mellom personene:
Løpe
Stå stille
Ulikheter:
Hoppe
*/
var jumping = false;

class Person {
    constructor(health, weapon, speed, size, shape, fileName) {
        this.health = health;
        this.weapon = weapon;
        this.speed = speed;
        this.size = size;
        this.shape = shape;
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

var bodyEl = document.querySelector("body");
var boksEl = document.getElementById("figur");
var canvas = document.getElementById("mittCanvas");
var ctx = canvas.getContext("2d");

var venstre = 530;
var topp = 200;

var fart = 10;

bodyEl.addEventListener("keydown", flyttboks);

function flyttboks(e) {
    if (e.keyCode === 37) {
        venstre -= fart;
    } else if (e.keyCode === 39) {
        venstre += fart;
    } else if (e.keyCode === 38) {
        jumping = true;
    }
    boksEl.style.top = topp + "px";
    boksEl.style.left = venstre + "px";

    if (jumping){
        topp -= fart;
        jumping = false;
    }
}
