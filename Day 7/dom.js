// let header = document.getElementById('header');
// console.log(header);

// let other = document.getElementsByClassName('text');
// console.log(other);

// let h2 = document.getElementsByTagName('h2');
// console.log(h2);

let h1 = document.getElementsByTagName('h1');
// console.log(h1[1]);

function hello() {
  console.log('Hello');
}

let buttonClick = document.getElementById('button');

// buttonClick.addEventListener('click', hello);

buttonClick.addEventListener('click', function(event) {
  let header = document.getElementById('header');
  header.textContent = 'I a DOM Oh yeah'
})

let input = document.getElementById('input');

let header = document.getElementById('header');
input.addEventListener('keyup', function(event) {
  header.textContent = event.target.value;
});

let square = document.getElementById('square');
square.addEventListener('mouseover', function() {
  console.log('User clicked')
})

let buttonColor = document.getElementById('buttonColor');

buttonColor.addEventListener('click', function() {
  let square = document.getElementById('square');
  square.style.backgroundColor = 'tomato';

  let header = document.getElementById('header');
  header.style.color = 'teal';
  header.style.fontSize = '50px';
})

let buttonUpdate = document.getElementById('buttonUpdate');
buttonUpdate.addEventListener('click', function() {
  let input = document.getElementById('input');
  let header = document.getElementById('header');
  
  header.textContent = input.value;
})








