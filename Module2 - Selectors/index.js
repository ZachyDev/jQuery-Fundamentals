$(document).ready(function() {
    // select all images in the page
    var divs = $('div');
    // $(divs).css('background-color','#222');
    // $('#myContent h1,.about span').css('color','#fff');
    
    // applying the styles to the image
    $('p img').css('width','50%');
    $('p img').css('height','50vh');
    $('p img').css('margin-left','23%');

    // itearting through the page divs and elements
    $(divs).each(function() {
        // alert($(this).html());
    })
    // grabbing Test div
    var testDiv = $('#TestDiv').html();
    // alert(testDiv);

    // class selector

    var aboutClass = $('div.about,div.andela');
    $(aboutClass).css('border','2px solid dodgerblue')

    // selecting by title
    // alert($('div[title="andela"]').length)

    // accessing the inputs

    // var inputs = $(':input');
    // alert($(inputs[0]).val());

    $('#register :input').each(function(){
        var inputs = $(this);
        // alert(inputs.val());
    })

    // additional jquery selectors
    // alert($('div:contains("Andela")').html())
    // alert($('div[title="andela"]').html())
    //alert($('div[title^="Andela"]').html())  starts with
    // alert($('div[title$="Training"]').html()) ends with
    // alert($('div[title*="Andela"]').html()); contains

}); 
