$(document).ready(function(){
    $('#header h1').css('color','blue');
    // iterating through nodes
      var html = '';
    $('div.about,div.services').each(function(index){
        // raw DOM object
        this.title = 'Some title';
        // using jquery built in  functions
        $(this).attr('title','Some title2');
       html += "<br />" + index + " " + $(this).text();
    })
    var output = $('div.output');
    output.html(html);

    // changing the styles using att property in jquery
    $('div.about').attr({
        title: 'About section',
        style:'background-color:teal;font-size:20px;margin-left:25%;height:20vh;color:#fff;width:50%;'
    });
    $('div.services').attr({
        title: 'Services page',
        style:'background-color:teal;font-size:20px;margin-left:25%;height:20vh;color:#fff;width:50%;'
    })
})
