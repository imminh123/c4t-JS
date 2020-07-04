async function getPokemon() {
  let data = await fetch('https://pokeapi.co/api/v2/pokemon');
  let pokemon = await data.json();

  let result = '';

  for(let i = 0; i < pokemon.results.length ; i++) {
   result = result +  `<h3>${pokemon.results[i].name}</h3>`;
  }

  let listPokemon = $('#list');
  listPokemon.html(result);

}

// getPokemon();

let name = $('#name');
let url = $('#url');
let listPokemon = $('#list');

async function getAbilities() {
  let data = await fetch('https://pokeapi.co/api/v2/pokemon/1/');
  let pokemon = await data.json();

  let result = '';
  for(let i=0 ; i < pokemon.abilities.length; i++) {
    result = result + `<h3>Name : ${pokemon.abilities[i].ability.name}</h3>   <h3>URL : ${pokemon.abilities[i].ability.url}</h3>`
  }

  listPokemon.html(result);
}

getAbilities();