// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads and is where you should call your functions.
$(document).ready(function(){
    const $display = $('#display');

    // TODO: Call your apply function(s) here
    applyFilter(greenify);
    applyFilterNoBackground(decreaseRed);
    applyFilterNoBackground(increaseBluebyRed);


    render($display, image);
});


/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter (filterFunction){
    //goes throught the rows of images
    for (var i = 0; i < image.length; i++){
        //goes through the columns
        for (var r = 0; r < image[i].length; r++){
            //rgbString is an array of strings
            var rgbString = image[i][r];
            console.log(rgbString);
            //rgbNumbers
            var rgbNumbers = rgbStringToArray(rgbString);
            filterFunction(rgbNumbers);
            rgbString = rgbArrayToString(rgbNumbers);
            image[i][r] = rgbString;
        }
    }
}
    // TODO 6: Create the applyFilterNoBackground function
    function applyFilterNoBackground(filterFunction){
        var background = image[0][0];
        console.log('background - ' + background);
        for (var k = 0; k < image.length; k++){
            for (var j = 0; j < image[k].length; j++){
                var rgbString = image[k][j];
                //filter the pixel when it is not the background
                if (rgbString != background){
                    console.log(rgbString);
                    var rgbNumbers = rgbStringToArray(rgbString);
                    filterFunction(rgbNumbers);
                    rgbString = rgbArrayToString(rgbNumbers);
                    image[k][j] = rgbString;
                }
            }
    }
}
    // TODO 3 & 5: Create filter functions
    function greenify(array){
        array[GREEN] = 255;
}
    function decreaseRed(array){
        array[RED] = keepinBounds(RED - 50);
    }
    function increaseBluebyRed(array){
        array[BLUE] = keepinBounds(BLUE + RED);
    }
    function keepinBounds(varible){
       return Math.max(0, Math.min(varible, 255));
    }
    //keepinBounds passes in a number and returns a number from 0-255
// CHALLENGE code goes below here
