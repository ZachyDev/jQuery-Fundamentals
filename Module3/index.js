$(document).ready(function(){
    $('#header h1').css('color','blue');
    // iterating through nodes
    //   var html = '';
    $('div.about,div.services').each(function(index){
        // raw DOM object
        // this.title = 'Some title';
        // using jquery built in  functions
        // $(this).attr('title','Some title2');
    //    html += "<br />" + index + " " + $(this).text();
    })
    // var output = $('div.output');
    // output.html(html);

    // changing the styles using att property in jquery

    alert($('div[title="andela Google"]').html())
    $('div.about,div.services').attr(
        {
            title: 'About and Services section'
        }
    )
    .css('background-color','skyblue')
    .css('width','50%')
    .css('height','20vh') 
    .css('font-size','25px')
    .css('font-family','sans-serif')
    .css('position','relative')
    .css('margin-left','200px');
})