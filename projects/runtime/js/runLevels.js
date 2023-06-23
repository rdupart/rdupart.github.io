var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE

    //HITZONES
  /* var hitZoneSize = 25;
    var damageFromObstacle = 10;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBladeHitZone.x = 400;
sawBladeHitZone.y = 200;
game.addGameItem(sawBladeHitZone);
var obstacleImage = draw.bitmap("img/sawblade.png");
sawBladeHitZone.addChild(obstacleImage);
obstacleImage.x = -25
obstacleImage.y = -25

var hitZoneSize = 25;
    var damageFromObstacle = 10;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBladeHitZone.x = 900;
sawBladeHitZone.y = 600;
game.addGameItem(sawBladeHitZone);
var obstacleImage = draw.bitmap("img/sawblade.png");
sawBladeHitZone.addChild(obstacleImage);
obstacleImage.x = -25
obstacleImage.y = -25

var hitZoneSize = 25;
    var damageFromObstacle = 10;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBladeHitZone.x = 2000;
sawBladeHitZone.y = 100;
game.addGameItem(sawBladeHitZone);
var obstacleImage = draw.bitmap("img/sawblade.png");
sawBladeHitZone.addChild(obstacleImage);
obstacleImage.x = -25
obstacleImage.y = -25

var hitZoneSize = 25;
    var damageFromObstacle = 10;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBladeHitZone.x = 1500;
sawBladeHitZone.y = 400;
game.addGameItem(sawBladeHitZone);
var obstacleImage = draw.bitmap("img/sawblade.png");
sawBladeHitZone.addChild(obstacleImage);
obstacleImage.x = -25
obstacleImage.y = -25 */

//ENEMIES
var enemy5 = game.createGameItem("enemy", 25);
var redSquare = draw.bitmap("img/arrow.png");
redSquare.x = -5;
redSquare.y = -5;
enemy5.addChild(redSquare);
enemy5.x = 1300;
enemy5.y = groundY - 140;
enemy5.scaleX = 0.1
enemy5.scaleY = 0.1
game.addGameItem(enemy5);
enemy5.velocityX = -3
enemy5.onPlayerCollision = function () {
  game.changeIntegrity(-100)

}
enemy5.onPlayerCollision()

var enemy4 = game.createGameItem("enemy", 25);
var redSquare = draw.bitmap("img/arrow.png");
redSquare.x = -5;
redSquare.y = -5;
enemy4.addChild(redSquare);
enemy4.x = 1300;
enemy4.y = 500;
enemy4.scaleX = 0.1
enemy4.scaleY = 0.1
game.addGameItem(enemy4);
enemy4.velocityX = -3

enemy4.onPlayerCollision = function () {
  game.changeIntegrity(-100)

}
enemy4.onPlayerCollision()

var enemy6 = game.createGameItem("enemy", 25);
var redSquare = draw.bitmap("img/lava.jpg");
redSquare.x = -5;
redSquare.y = -5;
enemy6.addChild(redSquare);
enemy6.x = 1000;
enemy6.y = 600;
enemy6.scaleX = 400
enemy6.scaleY = 1
game.addGameItem(enemy6);
//enemy.velocityX = -3

enemy6.onPlayerCollision = function () {
  game.changeIntegrity(-100)

}
enemy6.onPlayerCollision()

var enemy2 = game.createGameItem("enemy", 25);
var redSquare = draw.bitmap("img/magma2.png");
redSquare.x = -5;
redSquare.y = -5;
enemy2.addChild(redSquare);
enemy2.x = 1000;
enemy2.y = 500;
enemy2.scaleX = 0.1
enemy2.scaleY = 0.1
game.addGameItem(enemy2);
enemy2.velocityY = -2

enemy2.onPlayerCollision = function () {
  game.changeIntegrity(-100)

}
enemy2.onPlayerCollision()

var enemy1 = game.createGameItem("enemy", 25);
var redSquare = draw.bitmap("img/magma1.png");
redSquare.x = -5;
redSquare.y = -5;
enemy1.addChild(redSquare);
enemy1.x = 300;
enemy1.y = 100;
enemy1.scaleX = 0.2
enemy1.scaleY = 0.2
game.addGameItem(enemy1);
enemy1.velocityY = 2

enemy1.onPlayerCollision = function () {
  game.changeIntegrity(-100)

}
enemy1.onPlayerCollision()

//REWARDS
var reward3 = game.createGameItem("reward", 25);
var redSquare = draw.bitmap("img/potion.png");
redSquare.x = -5;
redSquare.y = -5;
reward3.addChild(redSquare);
reward3.x = 200;
reward3.y = 200;
reward3.scaleX = 0.1
reward3.scaleY = 0.1
game.addGameItem(reward3);

reward3.onPlayerCollision = function () {
  //game.changeIntegrity(100)
  game.increaseScore(100);
  //reward3.shrink()

}
reward3.onPlayerCollision()


var reward1 = game.createGameItem("reward", 25);
var redSquare = draw.bitmap("img/potion.png");
redSquare.x = -5;
redSquare.y = -5;
reward1.addChild(redSquare);
reward1.x = 900;
reward1.y = 450;
reward1.scaleX = 0.1
reward1.scaleY = 0.1
game.addGameItem(reward1);

reward1.onPlayerCollision = function () {
  game.increaseScore(100)
 //reward.shrink()

}
reward1.onPlayerCollision()


var reward2 = game.createGameItem("reward", 25);
var redSquare = draw.bitmap("img/potion.png");
redSquare.x = -5;
redSquare.y = -5;
reward2.addChild(redSquare);
reward2.x = 600;
reward2.y = 100;
reward2.scaleX = 0.1
reward2.scaleY = 0.1
game.addGameItem(reward2);

reward2.onPlayerCollision = function () {
  game.increaseScore(100)
  reward.shrink()

}
reward2.onPlayerCollision()

// ADD NETHER PORTAL 
// PROJECTILE COLLISION

/*enemy.onProjectileCollision = function () {
  game.increaseScore(100);
enemy.fadeOut();
};
enemy.onProjectileCollision() */

//END OF LEVEL MARKER WITH NETHER PORTAL



    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
