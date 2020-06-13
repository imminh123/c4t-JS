//loop
let x = 0;

// while (x < 5) {
//   console.log(x);
// }

// for (let i = 0; i < 5; i++) { //i = i + 1
//   if(i == 2) {
//     break;
//   } 
//   console.log(i);
// }

function even() {
  for(let i = 0; i <= 20; i++) {
    if(i % 2 == 0) {
      console.log(i);
    }
  }
}

// even();

function cuuchuongTable(num) {
  for( let i=1; i<= 10; i++) {
    console.log(num * i);
  }
}

function cuuChuongAll() {
  for( let i =2 ; i<=10; i++) {
    for( let k = 1; k <=10 ; k++) {
      console.log(i * k);
    }
  }
}

cuuChuongAll();

let rainbow = ['blue','red','purple','yellow','tilt','cyan','grey'];

for( let  i= 0; i< rainbow.length ; i++) {
  console.log(rainbow[i]);
}

let boba = ['dingtea','bobabop','tocotoco'];
for( let i=0; i< boba.length; i++) {

  console.log('My ', i+1, 'choice is ', boba[i]);

}