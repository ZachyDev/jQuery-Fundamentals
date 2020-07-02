$(document).ready(function(){

    // loadedData
    // loadedData();
    fetchData();
  
})

// function loadedData() {
//     let btn = $('#load');
//     let dataDiv = $('div.loaded-data');
//     btn.on('click',function(){
//         dataDiv.load('https://my-json-server.typicode.com/ZachyDev/ZachyAPI/companies/1',
//         function(response,status,xhr) {
//             if (status == 'error') {
//                 alert('Error: ' + xhr.statusText)
//             }
//         }
//         );
//     })
// }

// making get requests

function fetchData() {
    let btn = $('#load');
    btn.click(function() {
        $.post('https://my-json-server.typicode.com/ZachyDev/ZachyAPI/users',function(data) {
            $('div.loaded-data').html(data);
        })
    })
}