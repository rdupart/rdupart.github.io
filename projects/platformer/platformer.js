$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * You won't be able to play the game while these lines are uncommented
     * Comment the lines out to remove the grid
     */

    // Loop to create vertical grid lines
    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, 0, 1, canvas.height);
    // }

    // Loop to create horizontal gride lines
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(0, i, canvas.width, 1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

createPlatform(50, 650, 90, 20)
createPlatform(300, 520, 150, 20)
createPlatform(200, 200, 100, 20)
createPlatform(700, 400, 100, 20)
createPlatform(600, 400, 30, 240)
createPlatform(580, 430, 40, 210)
createPlatform(560, 465, 40, 100)
createPlatform(540, 500, 40, 140)
createPlatform(900, 100, 100, 20)
createPlatform(990, 100, 100, 20)
createPlatform(480, 290, 20, 20)
createPlatform(700, 200, 50, 40)

createPlatform(1190, 600, 20, 200)
//createPlatform(1350, 600, 20, 200)
//createPlatform(1190, 500, 200, 20)
createPlatform()
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)

    createCollectable("diamond", 100, 600, 0,0 )
    createCollectable("diamond", 358, 480, 0,0 )
    createCollectable("diamond", 230, 160, 0,0 )
    createCollectable("diamond", 730, 360, 0,0 )
    
    createCollectable("diamond", 970, 60, 0,0 )

    createCollectable("diamond", 1210, 600, 0,0)
    //createCollectable("pipe", 1210, 580, 0,0)

    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

    createCannon("left", 160, 2000)
    createCannon("left", 360, 1000)
    createCannon("left", 560, 4000)
    createCannon("bottom", 300, 3000)

    createCannon("bottom", 700, 1000)
    createCannon("bottom", 1100, 5000) 

    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
