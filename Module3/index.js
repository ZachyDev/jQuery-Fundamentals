$(document).ready(function(){
    $('#header h1').css('color','blue');
    // iterating through nodes
      var html = '';
    $('div.about,div.services').each(function(index){
       html += "<br />" + index + " " + $(this).text();
    })
    var output = $('div.output');
    output.html(html);
})