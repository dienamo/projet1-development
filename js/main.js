var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d") ;
canvas.width = 1270;
canvas.height = 570;

function scoreBoard() {
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.fillText(`Score : ${score}`, 1100 ,  50);
    ctx.fillText(`Health : ${health}` , 1100 , 100);
}

health = 0;

var score = 0;

var frames = 0;

var vaisseauMere = new spaceShip();

ennemiesArray = [];

healthArray = [];

function newHealth() {
    health1 = new HealthIcon(100 , 200);
    health2 = new HealthIcon(150 , 200);
    health3 = new HealthIcon(200 , 200);
    console.log(healthArray)
    healthArray.push(health1 , health2 , health3)
}

newHealth()

function keysMove() {
    if (vaisseauMere.keys[38]) {
        if (vaisseauMere.speedY > -vaisseauMere.speed) {
            vaisseauMere.speedY--;
        }
    }
    
    if (vaisseauMere.keys[40]) {
        if (vaisseauMere.speedY < vaisseauMere.speed) {
            vaisseauMere.speedY++;
        }
    }
    if (vaisseauMere.keys[39]) {
        if (vaisseauMere.speedX < vaisseauMere.speed) {
            vaisseauMere.speedX++;
        }
    }
    if (vaisseauMere.keys[37]) {
        if (vaisseauMere.speedX > -vaisseauMere.speed) {
            vaisseauMere.speedX--;
        }
    }

    vaisseauMere.speedY *= vaisseauMere.friction;
    vaisseauMere.y += vaisseauMere.speedY;
    vaisseauMere.speedX *= vaisseauMere.friction;
    vaisseauMere.x += vaisseauMere.speedX;
}

function explode() {
    const img1 = document.createElement('img');
    img1.src = "./images/explode/explode1.png";
    ctx.drawImage(img1, 400 , 400 , 150 , 150);
}

function newEnnemies() {
    setInterval(function() {
        enemie = new enemieship();
        ennemiesArray.push(enemie);
    },5000)
}

function detectCollision(a , b) {
    return a.x < b.x + b.w && 
    a.x + a.w > b.x && 
    a.y < b.y + b.h && 
    a.y + a.h > b.y
}
function handleCollisions() {
    ennemiesArray.forEach(function(enemy , i) {
        vaisseauMere.playerBulletArray.forEach(function(bullet) {
        if (detectCollision(bullet, enemy)) {
          ennemiesArray.splice(i , 1);
          score ++;
        }
      });
    });
    ennemiesArray.forEach(function(enemy , i) {
        if(detectCollision(enemy , vaisseauMere)){
            ennemiesArray.splice(i , 1);
            console.log("collision");
            health --;
            healthArray.splice(0 , 1);
        }
    })
    ennemiesArray.forEach(function(enemy , i) {
        enemy.enemiesBulletArray.forEach(function(bullet , i) {
            if(detectCollision(vaisseauMere , bullet)){
                enemy.enemiesBulletArray.splice(i , 1);
                health --;
                healthArray.splice(0 , 1)
            }   
        })   
    })
}

/*
##     ## ########  ########     ###    ######## ######## 
##     ## ##     ## ##     ##   ## ##      ##    ##       
##     ## ##     ## ##     ##  ##   ##     ##    ##       
##     ## ########  ##     ## ##     ##    ##    ######   
##     ## ##        ##     ## #########    ##    ##       
##     ## ##        ##     ## ##     ##    ##    ##       
 #######  ##        ########  ##     ##    ##    ######## 
*/
function update() {

    frames++;
    
    ctx.clearRect(0 , 0 , canvas.width , canvas.height);

    healthArray.forEach(health => {
        health.drawHealth();
    });

    vaisseauMere.playerBulletArray.forEach(bullet => {
        bullet.draw();
        bullet.move();
        bullet.clean();
    });

    ennemiesArray.forEach(ennemie => {
        ennemie.draw();

        if (frames % Math.floor(Math.random()*200) === 0) {
            ennemie.moveLeft();
        }

        if (frames % Math.floor(Math.random()*200) === 0) {
            ennemie.moveRight();
        }

        if (frames % Math.floor(Math.random()*1500) === 0) {
            ennemie.shoot();
        }

        ennemie.enemiesBulletArray.forEach(bullet => {
            bullet.draw();
            bullet.moveDown();
            bullet.clean();
        });
        
        ennemie.moveDown();
        
    });

    keysMove();

    vaisseauMere.draw();
    
    handleCollisions();
    
    scoreBoard();
    
    requestAnimationFrame(update);
}

/*
##    ## ######## ##    ##  ######  
##   ##  ##        ##  ##  ##    ## 
##  ##   ##         ####   ##       
#####    ######      ##     ######  
##  ##   ##          ##          ## 
##   ##  ##          ##    ##    ## 
##    ## ########    ##     ###### 
*/
document.onkeydown = function(e) {
    if(e.keyCode === 38) {
        //vaisseauMere.moveForward();
        vaisseauMere.speedY -= 1
    }
    else if(e.keyCode === 40) {
        //vaisseauMere.moveBackward();
        vaisseauMere.speedY += 1
    }
    else if(e.keyCode === 39) {
        //vaisseauMere.moveRight();
        vaisseauMere.speedX += 1
    }
    else if(e.keyCode === 37) {
        //vaisseauMere.moveLeft();
        vaisseauMere.speedX -= 1
    }
    else if(e.keyCode === 32) {
        vaisseauMere.shoot();
    }
}

document.body.addEventListener("keydown", function (e) {
    vaisseauMere.keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function (e) {
    vaisseauMere.keys[e.keyCode] = false;
});



/*
.##.....##....###....####.##....##
.###...###...##.##....##..###...##
.####.####..##...##...##..####..##
.##.###.##.##.....##..##..##.##.##
.##.....##.#########..##..##..####
.##.....##.##.....##..##..##...###
.##.....##.##.....##.####.##....##
*/

requestAnimationFrame(update);
newEnnemies();