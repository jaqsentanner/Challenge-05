var currentDay = moment().format('dddd, MMMM Do YYYY')
var currentDisplay = document.getElementById('currentDay')

currentDisplay.textContent = currentDay;


var saveData = $('#nine').val();



function clickSave() {
    localStorage.setItem('schedule', saveData)
    
};

function clearLocal() {
    localStorage.clear()
    console.log('local:cleared')
};




















