$(document).ready(function(){

    // loadedData
    loadedData();
  
})

function loadedData() {
    let btn = $('#load');
    let dataDiv = $('div.loaded-data');
    btn.on('click',function(){
        dataDiv.load('../index.html .about');
    })
}