// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function(){
    const $display = $('#display');

    // TODO: Call your apply function(s) here
    applyFilter();





    render($display, image);
});


/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter (){
    for (var i = 0; i < image.length; i++){
       // console.log(image[i])
        for (var r = 0; r < image[i].length; r++){
            var rgbString = image[i][r];
           // rgbStringToArray(rgbString);
            var rgbNumbers = rgbStringToArray(rgbString);
            rgbNumbers[GREEN] = 225;
            rgbString = rgbArrayToString(rgbNumbers);
            image[i][r] = rgbString;
        }
    }

// TODO 6: Create the applyFilterNoBackground function


// TODO 3 & 5: Create filter functions


// CHALLENGE code goes below here
}