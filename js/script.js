/*

Likheter mellom personene:
Løpe
Stå stille
Ulikheter:
Hoppe
*/

class Person {
    constructor(health, weapon, speed, size, shape, fileName){
        this.health = health;
        this.weapon = weapon;
        this.speed = speed;
        this.size = size;
        this.shape = shape;
        this.fileName = fileName;
    }
}

class Weapon {
    constructor(type, firerate, fileName){
        this.type = type;
        this.firerate = firerate;
        this.fileName = fileName;
    }
}