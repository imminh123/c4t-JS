// let title = document.getElementById('title');
let title = $('#title');
let input = $('#name');
let button = $('#button');


button.on('click', function() {
  title.css('color', 'teal');
  title.css('font-size', '50px');
});

input.on('keyup', function() {
  title.html(input.val());
});

title.css('color', 'red');

let square = $('#square');
let changeButton = $('#changeColor');

changeButton.on('click', function() {
  square.css('background-color', 'teal');
})

//input value
let inputButton = $('#inputValue');

inputButton.on('click', function() {
  console.log(input.val());
})

//change content
title.html('New title');




