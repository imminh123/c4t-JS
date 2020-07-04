// let title = document.getElementsByTagName('h1');
let title = document.getElementById('title');
// let title = document.getElementsByClassName('header');

title.style.color = 'teal';
title.style.fontSize = '50px';

//click event
// title.addEventListener('click', function() {
//   title.style.color = 'tomato';
//   title.textContent = 'So sadddddddddddd';
// })

//key up
// let input = document.getElementById('justAinput');
// input.addEventListener('keyup', function(event) {
//   console.log(event.target.value);
//   title.textContent = event.target.value;
// })

//square
let button = document.getElementById('squareButton');
let square = document.getElementById('square');
button.addEventListener('click', function() {

  console.log(square.style.backgroundColor);

  if(square.style.backgroundColor == 'teal') {
    square.style.backgroundColor = 'tomato';
  }else {
    square.style.backgroundColor = 'teal';
  }
})

//JQuery
let otherTitle = $('#title');
otherTitle.css('color', 'blue');
// otherTitle.css('font-size', '5px');

otherTitle.html('Manh me len nao cac em');

otherTitle.on('click', function() {
  otherTitle.css('color', 'pink');
})


let otherInput = $('#justAinput');
otherInput.on('keyup', function() {
  otherTitle.html(otherInput.val());
})



