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
		pokemonList.push({ 
		name : newPokemon,
		height : '', 
		types : ['']
		})
	}

	return {
		getAll: getAll,
		add: add
	}
})();

pokemonList = pokemonRepository.getAll()

pokemonList.forEach(function(pokemon){
	function big(){
		if (pokemon.height >= 0.7){
			return '- Wow, that`s big!. <br/>'
		} 
		else {
			return '<br/>'
		}
	}
	return document.write(pokemon.name + ' (height: ' + pokemon.height + 'm).' + big());
});

