// let title = document.getElementById('title');

// title.addEventListener('click', function() {
//   console.log('Click me');
// })

// title.style.color = 'red';
// title.textContent = 'Duong di hoc cham vao';

// let input = document.getElementById('firstInput');
// input.addEventListener('keyup', function() {
//   console.log('user is typing');
// });

let title = $('#title');
title.on('click', function() {
  console.log('This is Jquery')
})

title.html('Day la Jquery');
title.css('color', 'red');
title.css('font-size', '80px');

let input = $('#firstInput');
input.on('keyup', function() {
  console.log(input.val());
});






