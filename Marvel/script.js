let privateKey = 'eead925b000a736c9052e33b9dc89d1eb5275a56';
let publicKey = '14f228c22c73b7038b6eb37f682c5d40';
let apiURL = 'https://gateway.marvel.com:443/v1/public/characters';

//generate key
let key = marvelKey(privateKey, publicKey);

let fullURL = `${apiURL}?${key}`;

async function getCharacters() {
  let data = await fetch(fullURL);
  let dataJSON = await data.json();

  let results = dataJSON.data.results;

  let renderData = "";

  for(let i = 0; i < results.length; i++) {
    let name = results[i].name;
    let path = results[i].thumbnail.path;
    let extension = results[i].thumbnail.extension;
    let available = results[i].comics.available;

    renderData += `
    <div class="character">
      <img src="${ path + '.' + extension }" alt="">
      <h5>${name}</h5>
      <h6>Comics : ${available}</h6>
    </div>
    `
    $('#root').html(renderData);
  }
}

getCharacters();