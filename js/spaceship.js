class spaceShip {

    constructor() {
        this.x = 500;
        this.y = 800; 
        this.speed = 5;
        
        this.bulletArray = [];
    }

    shoot() {
        var bullet = new weapon(vaisseauMere.x + 25 , vaisseauMere.y);
        this.bulletArray.push(bullet);
    }

    draw() {
        ctx.fillRect(this.x , this.y , 50, 50);
    }
 
    moveForward() {
        return this.y-=15
    }

    moveBackward() {
        return this.y+=15
    }

    moveRight() {
        return this.x+=15
    }

    moveLeft() {
        return this.x-=15
    }
}