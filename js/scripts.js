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

for (let i = 0; i < pokemonList.length; i++){ 

	if (pokemonList[i].height < 0.7){
		document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + 'm). <br/>');
	}
	else{
		document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + 'm) ' + '- Wow, that`s big!. <br/>');
	}
}