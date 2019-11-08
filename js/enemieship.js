class enemieship {
    constructor() {
        this.x = Math.floor(Math.random() * canvas.width) + 100;
        this.y = 0;
        this.w = 80;
        this.h = 80;
        this.speed = 1;
        const img = document.createElement('img');
        this.img = img;
        img.src = "./images/tiedrop.png"
        this.enemiesBulletArray = [];
    }
    draw() {
        ctx.drawImage(this.img, this.x , this.y , this.w , this.h);
    }
    moveDown(){
        return this.y += this.speed;
    }
    moveLeft(){
        return this.x += 15*this.speed;
    }
    moveRight(){
        return this.x -= 15*this.speed;
    }
    shoot() {
        var bullet = new RedLaser(this.x + 55 , this.y + 80);
        this.enemiesBulletArray.push(bullet);
    }
}