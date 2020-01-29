


$(document).keydown(function (){
    /* Function is activated when anywhere in the document a key is pressed down.
    Alternatively, you could define the specific target and whenever a key is pressed
    down in the target area, the function will be activated.  */
})

$(document).keypress(function(){
    /* This function is activated the same as the event listener ".keydown", but this function 
    will only be activated when a letter or number is pressed. Contrary to keydown, in which 
    the function is activated when any key, whether it's Delete, Shift, Caps Lock or any 
    other key is pressed. */
})



$(document).keyup(function (){
    /* Function is activated when anywhere in the document a key is released.
    Alternatively, you could define the specific target and whenever a key is released 
    in the target area, the function will be activated.  */
})


$(document).keydown(function (event){
    console.log(event.which)
    console.log(event.keyCode)
    console.log(event.charCode)
    /* The code above will log the key that was pressed down, ".which" will display the
    ASCII code of the letter that was pressed down. The same logic applies with ".keyCode" and
    ".charCode". While using jQuery there is no difference between which function you use to get
    the ASCII code.

    Outside of jQuery, each function has limited usage depending on the browser 
    that you're using for your webpage. 

    ".which" does not work for older versions of Internet Explorer,
    ".keyCode" does not work on browsers like Seamonkey or Firefox on keypress
    ".charCode" can only be used on keydown or keyup by Internet Explorer. 
    */
})



$(document).keydown(function (event){
    
    /* The code above will log the key that was pressed down, event.which will display the ASCII code of the letter
    that was pressed down */
})