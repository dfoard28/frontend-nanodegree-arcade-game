# Project Overview

This project is a take on the classic arcade game "Frogger"

#Getting Started

* git clone `repository URL`
* to run the game open the index.html file in your browser
* explore all of the JavaScript files to understand functionality.


# What was learned?

This project was used to learn how to use Object Oriented JavaScript.


#included

This project includes the following:
1. index.html file
2. style file that includes a style.css document
3. images file (this has more characters and objects that can be implemented into the game)
4. JS file that includs the following: app.js, engine.js, and resource.js documents.

#project information

1. classes are created for both Enemies and Players these classes include properties and functions for both.(app.js file)
2. enemies are instantiated and pushed into an allEnemies array.(app.js file) (used a random function to have the enemies move at different speeds).
3. Keys are assigned so that the player can move (app.js file)
4. If player reaches the water without being hit by an enemy then player will win the game, they are congratulated with a modal and asked if they would like to play again. (app.js)
5. collisiion detection is looked for in the function checkCollisions, this is done by using the axis aligned bounding box algorithm found on MDN (https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection). (this function is called in the engine.js file), player willl lose the game if any collision is detected.(app.js file).
6. game loop functionality is all handled within the engine.js file.
7. image loading is all handled within the resources.js file.

Player can move up, down, left, or right using the arrow buttons. The point of the game is to ensure that the player makes it to the water without being hit by an enemy.
 



