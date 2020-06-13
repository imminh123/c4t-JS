
let interestRate = 0.3;
interestRate = 1;

let name  = 'My';
let age = 18;
let boyfriend = false;
let married;
let children = null;

//array
let student = ['Huong', 'My', 'Tuan', 'Tuan'];
// console.log(student.length);
// console.log(student[student.length-1]);

//object
let BacHo = {
    name: 'Nguyen Tat Thanh',
    age: 78,
    dob: '19/05/1890',
    language: ['French', 'Russian', 'Chinese']
}

BacHo.language.push('English');
BacHo.language.pop();

console.log(BacHo.language);

// let weight = prompt('Enter you can :');
// let height = prompt('Enter you chieu cao: ');
// let result = weight / ( (height*height) / 10000 ); 
// console.log(result);


// let hobbies = ['Soccer', 'Basketball', 'Thuoclao'];
// //write code here
// let index = prompt('Enter index');
// let hobby = prompt('Enter hobby:');
// hobbies[index-1] = hobby;

//function
function logName(name) {
    console.log('Hello ' + name);
}

// logName('Huong');
// logName('Vanh');
// logName('Tuan');

function checkYeuNuoc(name) {
    if(name == 'Duong') {
        console.log('Yeu nuoc');
    }else if(name == 'My'){
        console.log('Yeu My');
    }else if(name == 'Huong') {
        console.log('Cha yeu cai gi')
    }else {
        console.log('///')
    }
}

checkYeuNuoc('Duong');

function calculate(first, second, operator) {
    let result = 0;
    if(operator == '+') {
        result = first + second;
    }else if(operator == '-') {
        result = first - second;
    }
    return result ;
}

let something = calculate(20,2,'-');
console.log(something);