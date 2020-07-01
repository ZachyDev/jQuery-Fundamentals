$(document).ready(function(){

    // loadedData
    loadedData();
  
})

function loadedData() {
    let loadedData = $('div.loaded-data');
    let btn = $('#load');
    btn.click(function() {
        loadedData.load('https://hplussport.com/api/products')
    })
}