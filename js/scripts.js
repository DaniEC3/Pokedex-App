let pokemonRepository = (function () {
	let pokemonList = [
		{ 
		name : 'Bulbasaur',
		height : 0.7, 
		types : ['Grass','Poison']
		},
		{ 
		name : 'Charmander',
		height : 0.6,
		types : ['Fire']
		},
		{ 
		name : 'Squirtle',
		height : 0.5,
		types : ['Water']
		}
	]

	function getAll(){
		return pokemonList;
	}

	function add(newPokemon){
		if (
      typeof newPokemon === "object" &&
      "name" in newPokemon
    ) {
      pokemonList.push(newPokemon);
    } else {
    	console.log("pokemon is not correct");
    }
	}

  function addListItem(pokemonList){
  	let pokemon_list = document.querySelector('.pokemon-list')
		let listItem = document.createElement('li')
		let button = document.createElement('button')

		button.classList.add('list-button')

		button.innerText = pokemonList.name
		listItem = pokemon_list.appendChild(listItem)
		listItem.appendChild(button)
		add_event(button, pokemonList)
  }

  function add_event(button, pokemon) {
  	button.addEventListener('click', function() {
  		showDetails(pokemon)
  	})
  	
  }

  function showDetails(pokemon) {
  	console.log(pokemon)
  }
	

	return {
		getAll: getAll,
		add: add,
		addListItem: addListItem,
		showDetails: showDetails
	}
})();

pokemonList = pokemonRepository.getAll()

pokemonList.forEach(function(pokemon){
	pokemonRepository.addListItem(pokemon)
});



