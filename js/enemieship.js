class enemieship {
    constructor() {
        this.x = 800;
        this.y = 0;
        this.speed = 1;
    }
    draw() {
        ctx.fillRect(this.x , this.y , 50, 50);
    }
    moveDown(){
        return this.y += this.speed;
    }
    moveLeft(){
        return this.x += 5*this.speed;
    }
    moveRight(){
        return this.x -= 5*this.speed;
    }
    
}