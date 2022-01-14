$(document).ready(function() {
    ////////////////////////////////////////////////////////////////////////////////
    ///////////////////////// INITIALIZATION ////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    var FPS = 60;
    var player1 = {
     ID : "#player1",
     X : 100,
     Y : 100,
     vX : 0,
     vY : 0
    }
    var player2 = {
      ID : "#player2",
      X : 100,
      Y : 100,
      vX : 0,
      vY : 0
    };
//   function player(ID, X, Y, vX, vY) {
//     var playerChoosen = ();
//     playerChossen.ID = ID;
//     playerChossen.X = X;
//     playerChossen.Y = Y;
//     playerChossen.vX = vX;
//     playerChossen.vY = vY;
//     return playerChossen;
//   }
//   var player1 = player("#player1", 100, 100, 0, 0);
//   var player2 = player("#player2", 100, 100, 0, 0);
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////// CORE LOGIC //////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    setInterval(newFrame, 1000 / FPS); // execute newFrame() 60 times per second

	$(document).on('keydown', setPlayerVelocity); // execute setPlayerVelocity() in response to keydown events
	$(document).on('keyup', stopPlayerVelocity);  // execute stopPlayerVelocity() in response to keydown events
    $(document).on('keydown', setPlayerVelocity2);
    $(document).on('keyup', stopPlayerVelocity2);
    function newFrame() {
        player1.X += player1.vX;
        player1.Y += player1.vY;
        player2.X += player2.vX;
        player2.Y += player2.vY;
			
        $(player1.ID).css("left", player1.X);
        $(player1.ID).css("top", player1.Y);
        $(player2.ID).css("left", player2.X);
        $(player2.ID).css("top", player2.Y);
    }

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
	

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////// KEYBOARD FUNCTIONS //////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    /** 
    Key codes:
    - left: 37
    - up: 38
    - right: 39
    - down: 40
    - w: 87
    - a: 65
    - s: 83
    - d: 68
    - c: 67
    */
    var KEY_CODES = {
      LEFT : 37,
      RIGHT : 39,
      DOWN : 40,
      UP : 38,
      W : 87,
      A : 65,
      S : 83,
      D : 68,
      C : 67
    };
    
    function setPlayerVelocity(event) {
        if (event.which === KEY_CODES.UP) {
           player1.vY = -5; 
        }
        if (event.which === KEY_CODES.DOWN) {
           player1.vY = 5; 
        }
        if (event.which === KEY_CODES.LEFT) {
           player1.vX = -5; 
        }
        if (event.which === KEY_CODES.RIGHT) {
           player1.vX = 5; 
        }
    }

    function stopPlayerVelocity(event) {
        if (event.which === KEY_CODES.UP || event.which === KEY_CODES.DOWN) {
           player1.vY = 0; 
        }

        if (event.which === KEY_CODES.LEFT || event.which === KEY_CODES.RIGHT) {
           player1.vX = 0; 
        }
    }
      function setPlayerVelocity2(event) {
        if (event.which === KEY_CODES.W) {
           player2.vY = -5; 
        }
        if (event.which === KEY_CODES.S) {
           player2.vY = 5; 
        }
        if (event.which === KEY_CODES.A) {
           player2.vX = -5; 
        }
        if (event.which === KEY_CODES.D) {
           player2.vX = 5; 
        }
    }

    function stopPlayerVelocity2(event) {
        if (event.which === KEY_CODES.W || event.which === KEY_CODES.S) {
           player2.vY = 0; 
        }

        if (event.which === KEY_CODES.A || event.which === KEY_CODES.D) {
           player2.vX = 0; 
        }
    }
}); // DO NOT DELETE










