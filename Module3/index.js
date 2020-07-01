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

    // alert($('div[title^="andela"]').html())
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

    // appending,prepending
    // get the moreInfo div
    var moreInfo = $('div.more-info');
    // append  a div
    moreInfo.append('<span style="background-color:gold;">Appended child1</span>');
    // prepend
    moreInfo.prepend('<span style="background-color:dodgerblue;">Prepended child1</span>');

    // wrap method
    // get the about-alc divs
    var aboutAlc = $('.about-alc');
    aboutAlc.wrap('<div class="about parentWrapper"></div>')
    $('div.parentWrapper').each(function(){
        // alert($(this).html());
    })

    // Remove
    $('div.parentWrapper').remove();

    // modifying styles
    // addClass demo
    
   var contact = $('div.contact');
   contact.addClass('contacts');

    contact.dblclick(() => {
        contact.toggleClass('contacts');
    })

    

     // call handleEventMouseOver function
     handleEvtMouseOver();

    // call handleSelectField function
    handleSelectField();
    
    // handle header
    handleHeader();

    // animate scroll
    animateScroll();

    // animate about
    scrollAbout();

    // select user
    selectUser();
 

})


    // handle select field
    function handleSelectField(){
        let value = $('#selectedValue');
        value.change(function(){
            alert($(this).val())
        })
    }
    //handle events function
   function handleEvtMouseOver() {
    // get button
    let btn = $('.subscribe button');
    
    // attach mouse over event to the button
    btn.mouseover(() => {
        btn.css('background-color','teal')
           .css('color','#fff')
           .css('width','130px')
           .css('padding','12px')
           .css('border-radius','15px')
           .css('margin-left','100px')
           .css('margin-top','50px')
           .css('outline','none')
    })
   }

    // change demo

    function handleHeader(){
        let header = $('#header');
        header.on('mouseenter mouseleave mouseup',function(e){
            $(this).toggleClass('header')
            $(this).css('cursor','pointer')
            // chech for the mouse up event
            if(e.type == 'mouseup') {
                $(this).text('X: ' + e.pageX + 'Y: ' + e.pageY )
            }
        })
    }

   function animateScroll() {
        //get the body
        let body = $('.services');
        body.scroll(function() {
            alert('hey')
        })
   
   }
   function scrollAbout(){
       let about = $('.about');
       about.on('click',function(){
           alert('hey')
       })
   }
   

//    grab the table record

function selectUser() {
    let btn = $('#addRow')
    let tbody = $('#users tbody');
    tbody.on('click','td',function() {
        alert($(this).html())
    })
    // append a row ,on click of a button
    btn.on('click',function() {
        tbody.append('<tr><td>Rodgers</td><td>Makori</td></tr>')
    })
}