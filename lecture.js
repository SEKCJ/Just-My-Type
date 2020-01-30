
// console.log(new Date());
// original_string = "Teach me how to dougie, teach me teach me how to dougie"
// console.log(original_string.length)

// $(document).keydown(function (){
//     /* Function is activated when anywhere in the document a key is pressed down.
//     Alternatively, you could define the specific target and whenever a key is pressed
//     down in the target area, the function will be activated.  */
// })

// $(document).keypress(function(){
//     /* This function is activated the same as the event listener ".keydown", but this function 
//     will only be activated when a letter or number is pressed. Contrary to keydown, in which 
//     the function is activated when any key, whether it's Delete, Shift, Caps Lock or any 
//     other key is pressed. */
// })



// $(document).keyup(function (){
//     /* Function is activated when anywhere in the document a key is released.
//     Alternatively, you could define the specific target and whenever a key is released 
//     in the target area, the function will be activated.  */
// })


// $(document).keydown(function (event){
//     console.log(event.which)
//     console.log(event.keyCode)
//     console.log(event.charCode)
//     /* The code above will log the key that was pressed down, ".which" will display the
//     ASCII code of the letter that was pressed down. The same logic applies with ".keyCode" and
//     ".charCode". While using jQuery there is no difference between which function you use to get
//     the ASCII code.

//     Outside of jQuery, each function has limited usage depending on the browser 
//     that you're using for your webpage. 

//     ".which" does not work for older versions of Internet Explorer,
//     ".keyCode" does not work on browsers like Seamonkey or Firefox on keypress
//     ".charCode" can only be used on keydown or keyup by Internet Explorer. 
//     */
// })



// $(document).keydown(function (event){

//     /* The code above will log the key that was pressed down, event.which will display the ASCII code of the letter
//     that was pressed down */
// })


// $('target').css()
// /* In order to target an HTML element, you will need to use jQuery to specify which target you want
//     For the string target, you will have to use the name of the HTML element you want to get and define 
//     whether it's a id, class, type, or element 
//     For an ID you would use "#""
//     For a class you would use "."
//     For a type you would use ":"
//     For an element you just need the name of the element*/

// $('target').css('property', 'value')
// /* In order to change the CSS styling of the target, you will need to define the CSS property 
//     you want to get and you will need to define a value. If you just want to change one property, 
//     you will need to have the property in a string followed by a comma after and assign it a value
//     in a string.*/

// $('target').css({
//     'background-color': 'white',
//     'margin': '1px',
//     'display': 'block'
// })
// /* If you want to change multiple CSS properties of a target, you will need to create an object array 
//     in javascript, where you will define the property in a string and follow it by a colon, then you
//     would assign the property a value. Remember that with object arrays, you need to follow it by a comma
//     after you define the object */


// String.fromCharCode(event.which)
// /* In order to translate from ASCII code to a letter, you will need to use the code above.
//     Rememeber that event.which returns the ASCII value in a function from the event listener. 
//     The code above will return a string by using the ASCII code. 
//     You can interchange event.which with "event.keyCode" or "event.charCode"
//     HINT: use the code above and store it to a variable to apply logic and display it */


// console.log(event.key)
// /* Alternatively, you can use the above code to log which key is being typed instead of
//     translating the ASCII to a string */



// start = new Date();
// /* The code above will store into the variable start the current Date 
//     Ex. Wed Jan 29 2020 10:54:39 GMT-0600 (Central Standard Time) */

// start = new Date();
// end = new Date();
// time = end-start;
// /* If you wanted to get the time from when the code was first ran and 
//     when the code ends, you would use the code above using start as your starting point 
//     and end as your ending point. The result will be time in milliseconds which you will
//     need to turn into minutes. 

//     HINT: You will need to find a way to get the starting time when the first key is pressed
//     and find the ending time when the user runs out of sentences.*/


// string.charAt(0)
// /* The following code above will call upon a string and find the character at the index 0. 
//     You can change the variable "string" to fit your string and change "0" to whatever index 
//     you want to get. */


// $('target').html()
// /* Can be used to set the content of an html element or return it */

// $('target').text()
// /* Can be used to set the text content of an element selected or return it  */

// $('target').empty()
// /* This function can be used to empty out the text content of the element you're targeting */

// Variable.toFixed(0)
// /* This function can be used to round the variable to a fixed decimal. The number is rounded 
//     to 0 decimal places in this scenario, but by changing the interger, the number can be rounded 
//     to different decimal points */

// $('target').append()
// /* Your usual jQuery function that appends to the target */

// $('target').before()
// /* Functions appends content before the target */

// $('target').after()
// /* Function appends content after the target */



// original_string = "jQuery is boo boo and everyone knows it"
// /* In order to create a substring, we first have to define what that string is. */

// substring1 = original_string.substr()
// substring2 = original_string.substring()
// /* Once we have our string define, we need to use the function ".substr()" to 
//     pull a substring from the original string. Alternatively we can use the function
//     ".substring()" to create a substring. 

//     Differences between the functons:
//     ".substr(starting_index, length)" - When using ".substr" in your code, you will need to 
//     define the starting index from which you want to create the substring and how many
//     characters you want after the starting index. 

//     ".substring(starting_index, end_index)" - When using ".substring" in your code, you will 
//     need to define the starting index and the final index of the string that you want.
//      */

// original_string = "jQuery is boo boo and everyone knows it";
// substring1 = original_string.substr(3,10);
// /* If we console.log substring1, we will see that the substring that was 
//     created with this function is "ery is boo". This is because we defined the starting index to be 3
//     and the length of the substring to be 10 characters after index 3. At index 3, the character is "e"
//     and if we add the length to it, the index will be 13, at index 13, the letter will be "o". So we 
//     defined the starting index and then told it to create a substring from index 3 to index 13. */

// substring2 = original_string.substring(7, 17)
// /* If we console.log substring2, we will see that the substring that was created using this method
//     consists of "is boo boo". This is because we defined the starting index to be 7 and the final index
//     to be 16. At index 7, the character in the string is "i" and at index 16 the character in the string
//     is "o". This means that we defined the substring to be everything between the letter "i" and the
//     letter "o". */



// substring1 = original_string.substr(5)
// /* If we just define a starting_index with the function ".substr", what we'll get from 
//     this is starting with index 5, everything after that index will show. If we were to 
//     console.log(substring1), we would see that the output would consist of 
//     "y is boo boo and everyone knows it". If we don't define any length, the function will 
//     automatically get everything after the index. */

$(document).ready(function () {


    original_string = "Teach me how to dougie, teach me teach me how to dougie"
    length = original_string.length
    console.log(length)
    /* If we console.log length we'll see that the length of the string is 55 characters. 
        Knowing this we can define susbtrings from 0 to 55. */

    substr1 = original_string.substr(0, 5);
    substr2 = original_string.substr(6, 39);
    substr3 = original_string.substr(46, 9);

    new_string = substr1 + "<h1>" + substr2 + "</h1>" + substr3
    /* After splitting the original string into substrings we can modify it, whether it's adding 
        more strings in between the strings, adding color, elements,  or getting rid of part of the string. 
        The variable new_string will be a series of strings added up together to modify the original string. */

    $('.target').html(new_string)
    /* What this does is that it will target whatever element you want and change the html elements of the target
    to the new string that we defined. This means that we would see substr1 and subtr3 unchanged, but we would 
    see substr2 in an h1 element.
    
    Notice that we're changing the html elements of the target with the code ".html" and not ".text". */



})