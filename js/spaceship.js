class spaceShip {

    constructor() {
        this.x = canvas.width / 2;
        this.y = canvas.height - 300; 
        this.w = 100;
        this.h = 100;
        this.speedX = 0;
        this.speedY = 0;
        this.speed = 3;
        this.friction = 0.98;
        this.keys = [];
        this.playerBulletArray = [];
        const img = document.createElement('img');
        this.img = img;
        img.src = "./images/falcon.png"
        const healthimg = document.createElement('img');
        this.healthimg = healthimg;
        healthimg.src = "./images/health.png"
    }

    shoot() {
        var bullet = new weapon(vaisseauMere.x + 25 , vaisseauMere.y + 5);
        this.playerBulletArray.push(bullet);
    }

    draw() {
        ctx.drawImage(this.img,this.x , this.y , this.w, this.h);
    } 
}