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
var score; 
    //HITZONES




//ENEMIES


  var enemy5 = game.createGameItem("enemy", 25);
  var redSquare = draw.bitmap("img/arrow.png");
  redSquare.x = -5;
  redSquare.y = -5;
  enemy5.addChild(redSquare);
  enemy5.x = 1300;
  enemy5.y = 300;
  enemy5.scaleX = 0.1
  enemy5.scaleY = 0.1
  game.addGameItem(enemy5);
  enemy5.velocityX = -2
  enemy5.onPlayerCollision = function () {
    game.changeIntegrity(-100)
  
  }


  var enemy4 = game.createGameItem("enemy", 25);
  var redSquare = draw.bitmap("img/arrow.png");
  redSquare.x = -5;
  redSquare.y = -5;
  enemy4.addChild(redSquare);
  enemy4.x = 1300;
  enemy4.y = 300;
  enemy4.scaleX = 0.1
  enemy4.scaleY = 0.1
  game.addGameItem(enemy4);
  enemy4.velocityX = -1
  
  enemy4.onPlayerCollision = function () {
    game.changeIntegrity(-100)
  
  }




var enemy6 = game.createGameItem("enemy", 25);
var redSquare = draw.bitmap("img/lava.jpg");
redSquare.x = -5;
redSquare.y = -5;
enemy6.addChild(redSquare);
enemy6.x = 1000;
enemy6.y = 460;
enemy6.scaleX = 400
enemy6.scaleY = 3
game.addGameItem(enemy6); 




var enemy2 = game.createGameItem("enemy", 25);
var redSquare = draw.bitmap("img/magma2.png");
redSquare.x = -5;
redSquare.y = -5;
enemy2.addChild(redSquare);
enemy2.x = 900;
enemy2.y = 300;
enemy2.scaleX = 0.1
enemy2.scaleY = 0.1
game.addGameItem(enemy2);
enemy2.velocityX = -1.5
enemy2.onPlayerCollision = function () {
  game.changeIntegrity(-100)

}

enemy2.onProjectileCollision = function () {
game.increaseScore(250);
enemy2.fadeOut()
//respawn
var enemy8 = game.createGameItem("enemy", 25);
var redSquare = draw.bitmap("img/arrow.png");
redSquare.x = -5;
redSquare.y = -5;
enemy8.addChild(redSquare);
enemy8.x = 1500;
enemy8.y = 300;
enemy8.scaleX = 0.1
enemy8.scaleY = 0.1
game.addGameItem(enemy8);
enemy8.velocityX = -1
enemy8.onPlayerCollision = function () {
  game.changeIntegrity(-100)

}

//another
var enemy11 = game.createGameItem("enemy", 25);
var redSquare = draw.bitmap("img/magma2.png");
redSquare.x = -5;
redSquare.y = -5;
enemy11.addChild(redSquare);
enemy11.x = 1400;
enemy11.y = 300;
enemy11.scaleX = 0.1
enemy11.scaleY = 0.1
game.addGameItem(enemy11);
enemy11.velocityX = -2
enemy11.onPlayerCollision = function () {
  game.changeIntegrity(-100)

}
enemy11.onProjectileCollision = function () {
game.increaseScore(250);
enemy11.fadeOut()
//respawn

var enemy10 = game.createGameItem("enemy", 25);
var redSquare = draw.bitmap("img/arrow.png");
redSquare.x = -5;
redSquare.y = -5;
enemy10.addChild(redSquare);
enemy10.x = 1100;
enemy10.y = 300;
enemy10.scaleX = 0.1
enemy10.scaleY = 0.1
game.addGameItem(enemy10);
enemy10.velocityX = -0.8

enemy10.onPlayerCollision = function () {
  game.changeIntegrity(-100)

}

enemy10.onProjectileCollision = function () {
  game.increaseScore(500)
  enemy10.fadeOut() } }
  //another
  var enemy1 = game.createGameItem("enemy", 25);
  var redSquare = draw.bitmap("img/magma2.png");
  redSquare.x = -5;
  redSquare.y = -5;
  enemy1.addChild(redSquare);
  enemy1.x = 1700;
  enemy1.y = 300;
  enemy1.scaleX = 0.1
  enemy1.scaleY = 0.1
  game.addGameItem(enemy1);
  enemy1.velocityX = -1

  enemy1.onPlayerCollision = function () {
    game.changeIntegrity(-100)
  }
  enemy1.onProjectileCollision = function () {
    game.increaseScore(250)
    enemy1.fadeOut() }
    //respawn 

var enemy7 =  game.createGameItem("enemy", 25);
var redSquare = draw.bitmap("img/magma2.png");
redSquare.x = -5;
redSquare.y = -5;
enemy7.addChild(redSquare);
enemy7.x = 2000;
enemy7.y = 300;
enemy7.scaleX = 0.1
enemy7.scaleY = 0.1
game.addGameItem(enemy7);
enemy7.velocityX = -0.7

enemy7.onPlayerCollision = function () {
  game.changeIntegrity(-100)
}
enemy7.onProjectileCollision = function () {
  game.increaseScore(250)
  enemy7.fadeOut()  } }
  
  var enemy3 =  game.createGameItem("enemy", 25);
  var redSquare = draw.bitmap("img/magma2.png");
  redSquare.x = -5;
  redSquare.y = -5;
  enemy3.addChild(redSquare);
  enemy3.x = 2800;
  enemy3.y = 300;
  enemy3.scaleX = 0.1
  enemy3.scaleY = 0.1
  game.addGameItem(enemy3);
  enemy3.velocityX = -1
  
  enemy3.onPlayerCollision = function () {
    game.changeIntegrity(-100)
  }
  enemy3.onProjectileCollision = function () {
    game.increaseScore(500)
    enemy3.fadeOut()

}
  







//REWARDS

var reward3 = game.createGameItem("reward", 25);
var redSquare = draw.bitmap("img/potion.png");
redSquare.x = -5;
redSquare.y = -5;
reward3.addChild(redSquare);
reward3.x = 500;
reward3.y = 300;
reward3.scaleX = 0.1
reward3.scaleY = 0.1
reward3.velocityX = -1
game.addGameItem(reward3);

reward3.onPlayerCollision = function () {
  game.increaseScore(500);
reward3.fadeOut()

var enemy13 = game.createGameItem("enemy", 25)
var redSquare = draw.bitmap("img/arrow.png");
redSquare.x = -5;
redSquare.y = -5;
enemy13.addChild(redSquare);
enemy13.x = 1300;
enemy13.y = 300;
enemy13.scaleX = 0.1
enemy13.scaleY = 0.1
game.addGameItem(enemy13);
enemy13.velocityX = -2.5
enemy13.onPlayerCollision = function () {
  game.changeIntegrity(-100)

}
//respawn

var reward1 = game.createGameItem("reward", 25);
var redSquare = draw.bitmap("img/potion.png");
redSquare.x = -5;
redSquare.y = -5;
reward1.addChild(redSquare);
reward1.x = 900
reward1.y = 300;
reward1.scaleX = 0.1
reward1.scaleY = 0.1
game.addGameItem(reward1);
reward1.velocityX = -0.5

reward1.onPlayerCollision = function () {
  game.increaseScore(500)
reward1.fadeOut() 
}}

var reward2 = game.createGameItem("reward", 25);
var redSquare = draw.bitmap("img/potion.png");
redSquare.x = -5;
redSquare.y = -5;
reward2.addChild(redSquare);
reward2.x = 1000;
reward2.y = 300;
reward2.scaleX = 0.1
reward2.scaleY = 0.1
game.addGameItem(reward2);
reward2.velocityX = -1

reward2.onPlayerCollision = function () {
  game.increaseScore(500)
  reward2.fadeOut() 

  var enemy12 = game.createGameItem("enemy", 25);
  var redSquare = draw.bitmap("img/arrow.png");
  redSquare.x = -5;
  redSquare.y = -5;
  enemy12.addChild(redSquare);
  enemy12.x = 1300;
  enemy12.y = 300;
  enemy12.scaleX = 0.1
  enemy12.scaleY = 0.1
  game.addGameItem(enemy12);
  enemy12.velocityX = -1.5
  enemy12.onPlayerCollision = function () {
    game.changeIntegrity(-100)
  
  }

}
var reward6 = game.createGameItem("reward", 25);
var redSquare = draw.bitmap("img/badpotion.png");
redSquare.x = -5;
redSquare.y = -5;
reward6.addChild(redSquare);
reward6.x = 2900;
reward6.y = 300;
reward6.scaleX = 0.4
reward6.scaleY = 0.4
game.addGameItem(reward6);
reward6.velocityX = -1
game.createGameItem("reward", 25);
reward6.onPlayerCollision = function () {
  var enemy15 = game.createGameItem("enemy", 25);
  var redSquare = draw.bitmap("img/arrow.png");
  redSquare.x = -5;
  redSquare.y = -5;
  enemy15.addChild(redSquare);
  enemy15.x = 1300;
  enemy15.y = 300;
  enemy15.scaleX = 0.1
  enemy15.scaleY = 0.1
  game.addGameItem(enemy15);
  enemy15.velocityX = -3
  enemy15.onPlayerCollision = function () {
    game.changeIntegrity(-100)
  
  }
  var enemy17 = game.createGameItem("enemy", 25);
  var redSquare = draw.bitmap("img/arrow.png");
  redSquare.x = -5;
  redSquare.y = -5;
  enemy17.addChild(redSquare);
  enemy17.x = 1300;
  enemy17.y = 300;
  enemy17.scaleX = 0.1
  enemy17.scaleY = 0.1
  game.addGameItem(enemy17);
  enemy17.velocityX = -4
  enemy17.onPlayerCollision = function () {
    game.changeIntegrity(-100)
  
  }
  var enemy16 = game.createGameItem("enemy", 25);
  var redSquare = draw.bitmap("img/arrow.png");
  redSquare.x = -5;
  redSquare.y = -5;
  enemy16.addChild(redSquare);
  enemy16.x = 1300;
  enemy16.y = 300;
  enemy16.scaleX = 0.1
  enemy16.scaleY = 0.1
  game.addGameItem(enemy16);
  enemy16.velocityX = -5
  enemy16.onPlayerCollision = function () {
    game.changeIntegrity(-100)
  
  }
  var enemy18 = game.createGameItem("enemy", 25);
  var redSquare = draw.bitmap("img/arrow.png");
  redSquare.x = -5;
  redSquare.y = -5;
  enemy18.addChild(redSquare);
  enemy18.x = 1300;
  enemy18.y = 300;
  enemy18.scaleX = 0.1
  enemy18.scaleY = 0.1
  game.addGameItem(enemy18);
  enemy18.velocityX = -3
  enemy18.onPlayerCollision = function () {
    game.changeIntegrity(-100)
  
  }
  var enemy19 = game.createGameItem("enemy", 25);
  var redSquare = draw.bitmap("img/arrow.png");
  redSquare.x = -5;
  redSquare.y = -5;
  enemy19.addChild(redSquare);
  enemy19.x = 1300;
  enemy19.y = 300;
  enemy19.scaleX = 0.1
  enemy19.scaleY = 0.1
  game.addGameItem(enemy19);
  enemy19.velocityX = -6
  enemy19.onPlayerCollision = function () {
    game.changeIntegrity(-100)
  
  }

}

var reward4 = game.createGameItem("reward", 25);
var redSquare = draw.bitmap("img/majesticpotion.png");
redSquare.x = -5;
redSquare.y = -5;
reward4.addChild(redSquare);
reward4.x = 3400;
reward4.y = 300;
reward4.scaleX = 0.4
reward4.scaleY = 0.4
game.addGameItem(reward4);
reward4.velocityX = -1

reward4.onPlayerCollision = function () {
  game.increaseScore(1000)
  reward4.fadeOut() 

  var enemy14 = game.createGameItem("enemy", 25);
  var redSquare = draw.bitmap("img/magma2.png");
  redSquare.x = -5;
  redSquare.y = -5;
  enemy14.addChild(redSquare);
  enemy14.x = 2500;
  enemy14.y = 245;
  enemy14.scaleX = 5
  enemy14.scaleY = 5
  game.addGameItem(enemy14);
  enemy14.velocityX = -1
  
  enemy14.onPlayerCollision = function () {
    game.changeIntegrity(-1000)
  }
  enemy14.onProjectileCollision = function () {
    game.increaseScore(1000)
    enemy14.fadeOut()

}

}
 









// ADD NETHER PORTAL 




//END OF LEVEL MARKER WITH NETHER PORTAL

function createMarker(x, y) {
  var nether = game.createGameItem("nether")
  var redSquare = draw.bitmap("img/nether.png");
  redSquare.x = -5;
  redSquare.y = -5;
  nether.addChild(redSquare);
  nether.x = 3000;
  nether.y = 100;
  nether.scaleX = 1
  nether.scaleY = 1
  game.addGameItem(nether);
  nether.velocityX

  nether.onPlayerCollision = function () {
    startLevel()
  }
}
createMarker()
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
