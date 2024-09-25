let pokemonRepository = (function () {
	let pokemonList = [];
	let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let pokemonTypes = ['normal','fighting','flying','poison','ground','rock','bug','ghost','steel','fire','water','grass','electric','physic','ice','dragon','dark','fairy','stellar','unknow'];
  let pokemonTypesColor = ['#CFCFCF','#FFBF7F','#C0DCF7','#C89EE5','#C8A78C','#D7D4C0','#C8D088','#B79EB7','#AFD0DB','#F29091','#91BFF7','#9DD091','#FCDF7F','#F69EBC','#9DEBFF','#A6AFF0','#A69E9D','#F6B7F7','#9370DB','#DCDCDC'];

	function getAll(){
		return pokemonList;
	}

	function add(newPokemon){
		if (
      typeof newPokemon === 'object' &&
      'name' in newPokemon
    ) {
      pokemonList.push(newPokemon);
    } else {
    	console.log('pokemon is not correct');
    }
	}

  // Add the pokemon to the list

  function addListItem(pokemon){
  	let pokemon_list = document.querySelector('.pokemon-list');
    let listRow = document.querySelector('.row');
    listRow.classList.add('row');
		let listItem = document.createElement('li');
    listItem.classList.add('col-lg-4','col-md-6','col-12','list-group-item');

		let button = document.createElement('button');
		button.classList.add('list-button','btn');
		button.innerText = pokemon.name;
    button.setAttribute('data-toggle', 'modal');
    button.setAttribute('data-target', '#pokemonModal');

    listRow.appendChild(listItem);
    listItem.appendChild(button);


    pokemon_list.appendChild(listRow);

		add_event(button, pokemon);

  }

  //Shows thge details of the pokemon when the button is clicked

  function add_event(button, pokemon) {
  	button.addEventListener('click', function() {
  		showDetails(pokemon, button);

  	});
  	
  }

  // Search Button
  function searchButton(event) {
    event.preventDefault(); // Prevents the form from submitting and the page from reloading
    
    let searchInput = document.querySelector('.form-control[type="search"]');
    let query = searchInput.value.toLowerCase(); // Convert to lowercase for case-insensitive search

    let filterPokemon = filterItems(pokemonList,query);
    let pokemon_list = document.querySelector('.row');
    console.log(pokemonList);

    while (pokemon_list.firstChild) {
      pokemon_list.removeChild(pokemon_list.firstChild);
    }

    filterPokemon.forEach(function(pokemon){
      addListItem(pokemon);
      console.log(pokemon);
      });

  }

  let myButton = document.querySelector('#pokemon-searcher');
  myButton.addEventListener('click',searchButton);

  // Prevents the page reload when the user submit something in the search bar

  document.querySelector('.form-inline').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the page reload
  });

  // Filters the pokemons with the user input

  function filterItems(pokemonArray, query) {
    return pokemonArray.filter((pokemon) => 
        pokemon.name.toLowerCase().includes(query)
    );
}

  // Shows the details of a pokemon with a modal

  function showDetails(pokemon,button) {

  	loadDetails(pokemon).then(function () {
    	//Creates the modal container

      let modalTitle = document.querySelector('#pokemonName');
      

      let informationContainer = document.querySelector('.modal-body');
      informationContainer.innerHTML = ''; // Clear previous content

      modalTitle.innerHTML = ''; // Clear existing title
      modalTitle.innerHTML = pokemon.name;

      let pokemonImgElement = document.createElement('img');
      pokemonImgElement.classList.add('pokemon-img','col-md-6');
      pokemonImgElement.src = pokemon.imageUrl;
      pokemonImgElement.alt = 'Pokemon Image';

      let pokemonInformation = document.createElement('div');
      pokemonInformation.classList.add('col-md-6','pokemon-info');

      let pokemonHeightElement = document.createElement('div');
      pokemonHeightElement.classList.add('height-info');
      pokemonHeightElement.innerText = 'Height: '+ pokemon.height;

      let pokemonTypeElement = document.createElement('div');
      pokemonTypeElement.classList.add('type-info');
      pokemonTypeElement.innerText = 'Type: '+ pokemon.types[0].type.name;

      pokemonInformation.appendChild(pokemonHeightElement);
      pokemonInformation.appendChild(pokemonTypeElement);

      informationContainer.appendChild(pokemonImgElement);
      informationContainer.appendChild(pokemonInformation);

      backGroundType(pokemon,button);

  	});
	}

  function backGroundType(pokemon,button) {

    pokemon = pokemon.types[0].type.name;

    pokemonTypes.forEach(function(item, index){
    if (item === pokemon) {
      // Select the modal footer and header
      let modalContent = document.querySelector('.modal-content');
      // Change background colors based on Pokémon type
      modalContent.style.backgroundColor = pokemonTypesColor[index];
      button.style.backgroundColor = pokemonTypesColor[index];

      let header = document.querySelector('.navbar');
      header.style.backgroundColor = pokemonTypesColor[index];
      }
    });
   };

	// Fetch o get the pokemon list

  function loadList() {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon); 
        });
      })
      .catch(function (e) {
        console.error(e);
      });
	}

  	// Load details of the pokemon list

  function loadDetails(pokemon) {
    let url = pokemon.detailsUrl;
    return fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (details) {
      // Now we add the details to the item
      pokemon.imageUrl = details.sprites.front_default;
      pokemon.height = details.height;
      pokemon.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }

	return {
		getAll: getAll,
		add: add,
		addListItem: addListItem,
		showDetails: showDetails,
		loadList: loadList,
		loadDetails: loadDetails
	};
})();

pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});



