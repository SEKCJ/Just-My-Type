$(document).ready(function () {
    $('#keyboard-upper-container').css('display', 'none');
    let x;
    let y;
    let index = 0
    let count = 0;

    String.prototype.highLightAt = function(index) {  
        return this.substr(0, index) + '<span class="highlight">' + this.substr(index,1) + '</span>' + this.substr(index +1);
      }    

    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate',
        'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean',
        'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    
    let modifiedText = sentences[count].highLightAt(index);
    $('#sentence').html(modifiedText);
    
    $(document).keydown(function () {
        if (event.which == 16) {
            $('#keyboard-upper-container').css('display', 'block');
            $('#keyboard-lower-container').css('display', 'none');
        }
    })

    $(document).keyup(function () {
        if (event.which == 16) {
            $('#keyboard-upper-container').css('display', 'none');
            $('#keyboard-lower-container').css('display', 'block');
        }

    })

    $(document).keypress(function () {
        sentence = sentences[count];
        sentence_length = sentence.length;

        letter = String.fromCharCode(event.which);
        $('#target-letter').text(letter);

        if (sentence_length > index) {
            if (sentence.charAt(index) == letter) {
                $('#feedback').append('<span class="glyphicon glyphicon-ok"></span>')
                index++
                modifiedText = sentence.highLightAt(index);
                $('#sentence').html(modifiedText);
            } else {
                $('#feedback').append('<span class="glyphicon glyphicon-remove"></span>');
            };


        } else {
            if (count < 4) {
                console.log("reached end");
                count++
                $('#sentence').empty();
                $('#feedback').empty();
                index = 0;
                modifiedText = sentences[count].highLightAt(index);
                $('#sentence').html(modifiedText);
            }
        }
    })

    $(document).on("keypress", key_highlight)

    function key_highlight() {
        $(`#${event.which}`).css('background-color', "yellow");
        x = event.which
        if (y !== x) {
            $(`#${y}`).css('background-color', '#f5f5f5');
        }
        $(document).keyup(function () {
            $(`#${x}`).css('background-color', '#f5f5f5');
        })
        y = x;
    }

    
});