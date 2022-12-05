let nineBox = document.getElementById('nine');
var currentDay = moment().format('dddd, MMMM Do YYYY')
var currentDisplay = document.getElementById('currentDay')

currentDisplay.textContent = currentDay;



// function clickSave() {
//     var savedData = document.getElementById('nine').innerHTML;
//      localStorage.setItem('9AM', savedData)};


function clearLocal() {
    localStorage.clear()
    console.log('local:cleared')
};

// $('.saveBtn').click(function () {

//    var testData = $('.contEdit').get(1).id;
   
//    localStorage.setItem('test', testData)
   

// })



















