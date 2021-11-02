/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects

 var boxXPosition = 0;
 var boxYPosition = 0;
 var boxXspeed = 0;
 var boxYspeed = 0;
  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
  var KEY = {
   "RIGHT":39,
   "LEFT":37,
   "DOWN":40,
   "UP":38
 };

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositiongameItem()
    redrawgameItem()
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT) {
      boxXspeed = -5;
    }
    else if (event.which === KEY.RIGHT) {
      boxXspeed = 5;
    }
    else if (event.which === KEY.UP) {
      boxYspeed = -5;
    }
    else if (event.which === KEY.DOWN) {
      boxYspeed = 5;
    }
  }
  function handleKeyUp(event) {
    if (event.which === KEY.LEFT) {
      boxXspeed = 0;
    }
    else if (event.which === KEY.RIGHT) {
      boxXspeed = 0;
    }
    else if (event.which === KEY.UP) {
      boxYspeed = 0;
    }
    else if (event.which === KEY.DOWN) {
      boxYspeed = 0;
    }
  }
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function repositiongameItem(){
    boxXPosition += boxXspeed;
    boxYPosition += boxYspeed;
  }
  function redrawgameItem(){
    $("#gameItem").css("left", boxXPosition);
    $("#gameItem").css("top", boxYPosition);
  }
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
