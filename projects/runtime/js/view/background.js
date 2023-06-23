var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
      
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.rect(canvasWidth,canvasHeight,"dark blue");
            background.addChild(backgroundFill);
            // TODO 2: - Add a moon and starfield
            var moon = draw.bitmap("img/bastion.png");
            moon.x = 4;
            moon.y = 3;
            moon.scaleX = 2;
            moon.scaleY = 2;
            background.addChild(moon)

        
          /*  for (let i = 0; i < 15; i++)
            {var circle = draw.circle(1, "white", "white", 2);
circle.x = canvasWidth * Math.random();
circle.y = groundY * Math.random();
background.addChild(circle); */
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            
            
            // TODO 3: Part 1 - Add a tree
           /* var tree;
            tree = draw.bitmap("img/magma1.png");
           tree.x = 0.5;
            tree.y = groundY + 0.1;
              tree.scaleX = 0.2
              tree.scaleY = 0.2
            background.addChild(tree);

            var tree1;
            tree1 = draw.bitmap("img/magma2.png");
           tree1.x = 980;
            tree1.y = 50;
              tree1.scaleX = 0.1
              tree1.scaleY = 0.1
            background.addChild(tree1); */

            
            var tree3;
            tree3 = draw.bitmap("img/arrowdispenser.png");
           tree3.x = 1200;
            tree3.y = 50;
              tree3.scaleX = 0.5
              tree3.scaleY = 0.5
            background.addChild(tree3);

            var tree4;
            tree4 = draw.bitmap("img/arrowdispenser.png");
           tree4.x = 1200;
            tree4.y = 400;
              tree4.scaleX = 0.5
              tree4.scaleY = 0.5
            background.addChild(tree4);

            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            
              
                
            
            // TODO 4: Part 2 - Parallax
            

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
