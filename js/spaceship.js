class spaceShip {

    constructor() {
        this.x = canvas.width / 2;
        this.y = canvas.height - 300; 
        this.w = 250;
        this.h = 250;
        this.speedX = 0;
        this.speedY = 0;
        this.speed = 2;
        this.friction = 0.98;
        this.keys = [];
        this.playerBulletArray = [];
        const img = document.createElement('img');
        this.img = img;
        img.src = "./images/falcon.png"
    }

    shoot() {
        var bullet = new weapon(vaisseauMere.x + 100 , vaisseauMere.y);
        this.playerBulletArray.push(bullet);
    }

    draw() {
        ctx.drawImage(this.img,this.x , this.y , this.w, this.h);
    }
 
    newPos() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
    // moveForward() {
    //     this.speedY += 1;
    // }

    // moveBackward() {
    //     speedY -= 1;
    // }

    // moveRight() {
    //     this.speedX += 1;
    // }

    // moveLeft() {
    //     this.speedX -= 1;
    // }
}