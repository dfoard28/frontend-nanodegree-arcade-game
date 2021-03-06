"use strict";
// Enemies class
var Enemy = function(x,y,speed) {
    //set enemy's inital location
    this.x = x;
    this.y = y;
    //set the speed for the enemy
    this.speed = speed;
    //set width for collision functionality
    this.width = 50;
    //set height for collision functionality
    this.height = 50;
    // a helper to load images
    this.sprite = 'images/enemy-bug.png';
};

// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    //update the location of the enemy (multiplying the movement by the dt parameter)
    this.x = this.x + (this.speed * dt);
    //if the enemy moves off of the screen then move enemy back to the start
        if(this.x > 505){
            this.x = 0 * dt;
        }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Player Class
var Player = function(x,y){
    //set inital location
    this.x = x;
    this.y = y;
    //set width for collision functionality
    this.width = 50;
    //set height for collision functionality
    this.height = 50;
    //helper to load images
    this.sprite = 'images/char-horn-girl.png';
};



//update method for player
Player.prototype.update = function() {
    //if player moves out of bounds then they will be place back to the start
    if(this.x < 2){
        this.x = 200;
        this.y = 400;
    } else if (this.x > 443 || this.y > 445){
        this.x = 200;
        this.y = 400;
     //when the player.y hits water then need to call modal that will come up and then reset the player to start.
    } else if (this.y < -5){
        this.y = -5;
        $('#dialog').dialog('open');
    }
};

//handleInput method for player. 
Player.prototype.handleInput = function(keyCode) {
    //this how the player moves, using the keyCode event listener 
    if(keyCode === 'left') {
        this.x = this.x - 50;
    } else if (keyCode === 'down'){
        this.y = this.y + 50;
    } else if (keyCode === 'right'){
        this.x = this.x + 50;
    } else if (keyCode === 'up'){
        this.y = this.y - 50;
    }

};

//render method for Player
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//reset method for player
Player.prototype.reset = function() {  
    set: this.x = 200;
    set: this.y = 400;
};


// create a random function to makes sure the enemies all have random speeds
function rando () {
    var randOne = Math.floor((Math.random() * 20) + 1);
    randOne = randOne < 3 ? randOne + 3 : randOne;
    return randOne * 10;
}


// instantiate enemy objects.
var enemyOne = new Enemy(200,50,rando());
var enemyTwo = new Enemy(100,150,rando());
var enemyThree = new Enemy(400,220,rando());
var enemyFour = new Enemy(0,300,rando());
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
allEnemies.push(enemyOne);
allEnemies.push(enemyTwo);
allEnemies.push(enemyThree);
allEnemies.push(enemyFour);

// Place the player object in a variable called player
var player = new Player(200,400);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});

//modal to tell player that they have won when they hit the water.
$( "#dialog" ).dialog({
    autoOpen: false,
    modal: true,
    show: {effect: "blind", duration: 800 },
    buttons: {
        Yes: function () {
            $(this).dialog('close');
            player.reset();
        }
    }
});
//modal will pop up to tell the player they have lost and will ask if they would like to play again.
$( "#dialog2" ).dialog({
    autoOpen: false,
    modal: true,
    show: {effect: "blind", duration: 800 },
    buttons: {
        Yes: function () {
            $(this).dialog('close');
            player.reset();
        }
    }
});

// Collision Detection using a forEach loop on the allEnemies array.
function checkCollisions(){
    allEnemies.forEach(function(enemy){
        //used the axis aligned bounding box algorithm from MDN (https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection) 
        if (enemy.x < player.x + player.width &&
            enemy.x + enemy.width > player.x &&
            enemy.y < player.y + player.height &&
            enemy.height + enemy.y > player.y) {
                //open dialog to tell player they have lost
             $('#dialog2').dialog('open');
             player.reset();
         }
    })
}



