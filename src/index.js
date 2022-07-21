const URL = "http://localhost:3000/pokemon";

document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  //YOUR CODE HERE
  const pokemonContainer = document.querySelector("#pokemon-container");
  const pokemonSearch = document.querySelector("#pokemon-search-form");

  pokemonContainer.innerHTML = addPokeToArray(POKEMON);

  pokemonContainer.addEventListener("click", event => {
    if (event.target.dataset.action === 'flip') {
      const thatPoke = POKEMON.find(pokeObj => pokeObj.id == event.target.dataset.id)

      if (event.target.src === thatPoke.sprites.front) {
        event.target.src = thatPoke.sprites.back
      }else {
        event.target.src = thatPoke.sprites.front
      }
      }

  })

  pokemonSearch.addEventListener("submit", event => {
    event.preventDefault();

    const filterPoke = POKEMON.filter(pokeObj => pokeObj.name.includes(event.target.value))
    const filterPokeHTML = addPokeToArray(filterPoke);

    pokemonContainer.innerHTML = filterPokeHTML? filterPokeHTML : `<p><center>There are no Pokémon here</center></p>`;
  })
})

function addPokeToArray (pokemonArray) {
  return pokemonArray.map(addPoke).join('')
};
function addPoke(pokemon) {
  return (`<div class="pokemon-card">
  <div class="pokemon-frame">
    <h1 class="center-text">${pokemon.name}</h1>
    <div class="pokemon-image">
      <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
    </div>
  </div>
</div>`)
};
