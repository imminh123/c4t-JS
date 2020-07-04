//get DOM
let name = $('#name');
let width = $('#width');
let height = $('#height');
let color = $('#color');
let backgroundColor = $('#backgroundColor');
let borderRadius = $('#borderRadius');
let buttonChange = $('#changeMe');  
let square = $('#square');
let fakeName = $('.fakeName');

buttonChange.on('click', function() {
  fakeName.html('My name is ' + name.val());
  square.css('width', width.val()+ 'px');
  square.css('height', height.val() + 'px');
  square.css('color', color.val());
  square.css('background-color', backgroundColor.val());
  square.css('border-radius', borderRadius.val() + 'px');
})
