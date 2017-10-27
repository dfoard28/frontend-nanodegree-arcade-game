"use strict";
// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    //set enemy's inital location
    this.x = x;
    this.y = y;
    //set the speed for the enemy
    this.speed = speed;
    // a helper to load images
    this.sprite = 'images/enemy-bug.png';
};

// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    //update the location of the enemy (multiplying the movement by the dt parameter)
    this.x = this.x + (this.speed * dt);
    //if the enemy moves off of the screen then move enemy back to the start (also using the dt parameter) Loop through to continue?
        if(this.x > 505){
            this.x = 10 * dt;
        }
    //TODO:handles collisions with the player
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
    this.dt = 1;
    //helper to load images
    this.sprite = 'images/char-horn-girl.png';
};

//update method for player
Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.dt = dt;
};

//handleInput method for player. 
Player.prototype.handleInput = function(keyCode) {
    if(keyCode === 'left') {
        this.x = this.x - (500 * this.dt);
    } else if (keyCode === 'down'){
        this.y = this.y + (500 * this.dt);
    } else if (keyCode === 'right'){
        this.x = this.x + (500 * this.dt);
    } else if (keyCode === 'up'){
        this.y = this.y - (500 * this.dt);
    }

};

//render method for Player
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//TODO: create a reset method for player
Player.prototype.reset = function() {   

};


// create a random function to makes sure that the speed for the enemies have random speeds
function rando () {
    var randOne = Math.floor((Math.random() * 20) + 1);
    randOne = randOne < 3 ? randOne + 3 : randOne;
    return randOne * 10;
}
// instantiate enemy objects.
var enemyOne = new Enemy(300,50,rando());
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
