var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 1500;
canvas.height = 1000;

var frames = 0;

var bulletArray = [];
var vaisseauMere = new spaceShip();
ennemiesArray = [];
function newEnnemies() {
    setInterval(function() {
        enemie = new enemieship();
        ennemiesArray.push(enemie);
    },3000)
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

    vaisseauMere.bulletArray.forEach(bullet => {
        bullet.draw();
        bullet.move();
        bullet.clean();
    });

    ennemiesArray.forEach(ennemie => {
        ennemie.draw();

        if (frames % Math.floor(Math.random()*100) === 0) {
            ennemie.moveLeft();
        }
        if (frames % Math.floor(Math.random()*100) === 0) {
            ennemie.moveRight();
        }
        ennemie.moveDown();
        
            
        
        // setInterval(function() {
        //     var bullet = new weapon(ennemie.x + 25 , ennemie.y);
        //     bullet.y += bullet.speed;
        //     console.log(bullet)
        // },Math.floor(Math.random() * 5000))

    });

    vaisseauMere.draw();
    //console.log(bulletArray);
    //console.log(ennemiesArray);
    //ennemie.draw();
    

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
        vaisseauMere.moveForward();
    }
    else if(e.keyCode === 40) {
        vaisseauMere.moveBackward();
    }
    else if(e.keyCode === 39) {
        vaisseauMere.moveRight();
    }
    else if(e.keyCode === 37) {
        vaisseauMere.moveLeft();
    }
    else if(e.keyCode === 32) {
        vaisseauMere.shoot();
    }
}  

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

