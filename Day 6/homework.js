// ex 1
function sum(a , b) {
  let result = a + b;
  return result;
}

let x = sum(10, 40);
console.log(x);

//ex 2
function convert(m) {
  let result = m * 60;
  return result;
}

console.log(convert(10));

//ex 3
function checkEqual(a ,b) {
  return a == b ;
}

console.log( checkEqual(5, 'love') );

//ex 4
let array = [1,2,3];

function checkEmpty(a) {
  return a.length > 0;
}

console.log( checkEmpty(array) );


//ex 5
function greaterNum(a,b) {
  if(a > b) {
    return a
  }else {
    return b
  }
}

console.log( greaterNum(10, 99) );

//6
function assignGrade(num) {
  if(num >= 0 && num <= 2) {
    return 'F'
  }else if (num > 2 && num <= 4) {
    return 'D'
  }else if (num > 4 && num <= 6) {
    return 'C'
  }else if (num > 6 && num <= 8) {
    return 'B'
  }else {
    return 'A'
  }
}

