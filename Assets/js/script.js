var currentDay = document.querySelector('#currentDay');

currentDay.textContent = moment().format("[Today is] dddd[,] MMMM Do[,] YYYY");