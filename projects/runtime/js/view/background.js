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
            moon.scaleY = 2 ;
            moon.velocityX 
            background.addChild(moon)

            var moon1 = draw.bitmap("img/bastion.png");
            moon1.x = 8;
            moon1.y = 3;
            moon1.scaleX = 5;
            moon1.scaleY = 2;
            moon1.velocityX 
            background.addChild(moon1)

           var moon2 = draw.bitmap("img/bastion.png");
           moon2.x = 16;
           moon2.y = 3;
           moon2.scaleX = 5;
           moon2.scaleY = 2;
           moon2.velocityX 
           background.addChild(moon2)




         
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            
            
            // TODO 3: Part 1 - Add a tree
           
            
        } // end of render function - DO NOT DELETE
        
        console.log(background)
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            background.x = background.x - 0.4;
            if(background.x < -10000) {
                background.x = canvasWidth;
            }
              
                
            
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
