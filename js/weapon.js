class weapon {
    constructor(x , y) {
        this.x = x;
        this.y = y;
        this.speed = 4;
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.arc(this.x , this.y , 10, 50, 0, 2 * Math.PI);
        ctx.fill();   
    }

    move() {
        this.y -= this.speed;
    }

    shoot() {

    }

    clean() {
        if (this.y < 0) {
            vaisseauMere.bulletArray.splice(0,1);
        }
    }
}