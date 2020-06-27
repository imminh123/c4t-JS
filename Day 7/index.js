function helloWorld(language) {
  let result = '';
  //write code
  if (language == 'en') {
    result = 'Hello';
  } else if (language == 'es') {
    result = 'Holo';
  } else if (language == 'kr') {
    result = 'Anyoung';
  }

  console.log(result);
}

// helloWorld('en'); // Hello
// helloWorld('es'); // Hola
// helloWorld('kr'); // Anyoung

// helloWorld('fr'); // Bonjour
// helloWorld('vn'); // Xin chao
// helloWorld('ch'); // Nihao
// helloWorld('jp'); // Konichioa

//if else
function helloDuc(name) {
  console.log('Nihao ' + name);
}

function add(a, b) {
  console.log(a + b);
}

let language = ['en', 'es', 'kr', 'cn', 'jp'];

function helloWorldArray(language) {
  for (let i = 0; i < language.length; i++) {
    
    let result = '';
    if (language[i] == 'en') {
      result = 'Hello';
    } else if (language[i] == 'es') {
      result = 'Holo';
    } else if (language[i] == 'kr') {
      result = 'Anyoung';
    }

    console.log(result);
  }
}

helloWorldArray(language);

//Hello, Ola, Anyoung, Nihao, Konichiwa
