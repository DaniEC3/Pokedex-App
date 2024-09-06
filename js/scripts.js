let pokemonRepository = (function () {
	let pokemonList = [];
	let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
  let modalContainer = document.querySelector('#modal-container');

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

  function addListItem(pokemon){
  	let pokemon_list = document.querySelector('.pokemon-list');
		let listItem = document.createElement('li');
		let button = document.createElement('button');

		button.classList.add('list-button');

		button.innerText = pokemon.name;
		listItem = pokemon_list.appendChild(listItem);
		listItem.appendChild(button);
		add_event(button, pokemon);

  }

  function add_event(button, pokemon) {
  	button.addEventListener('click', function() {
  		showDetails(pokemon, button);

  	})
  	
  }

  // Shows the details of a pokemon with a modal

  function showDetails(pokemon,button) {

  	loadDetails(pokemon).then(function () {
    	//Creates the modal container

      modalContainer.innerHTML = '';
      let modal = document.createElement('div');
      modal.classList.add('modal');

      let closeButtonElement = document.createElement('button');
      closeButtonElement.classList.add('modal-close');
      closeButtonElement.innerText = 'Close';
      closeButtonElement.addEventListener('click', hideModal);

      let titleElement = document.createElement('h2');
      titleElement.innerText = pokemon.name;

      let pokemonInfoElement = document.createElement('div');
      pokemonInfoElement.classList.add('pokemon-info');

      let pokemonHeightElement = document.createElement('div');
      pokemonHeightElement.classList.add('height-info');
      pokemonHeightElement.innerText = 'Height: '+ pokemon.height;

      let pokemonTypeElement = document.createElement('div');
      pokemonTypeElement.classList.add('type-info');
      pokemonTypeElement.innerText = 'Type: '+ pokemon.types[0].type.name;
   
      let pokemonImgElement = document.createElement('img');
      pokemonImgElement.classList.add('pokemon-img');
      pokemonImgElement.src = pokemon.imageUrl;
      pokemonImgElement.alt = 'Pokemon Image';

      pokemonInfoElement.appendChild(pokemonHeightElement);
      pokemonInfoElement.appendChild(pokemonTypeElement);
      modal.appendChild(closeButtonElement);

      modal.appendChild(titleElement);
      modal.appendChild(pokemonInfoElement);
      modal.appendChild(pokemonImgElement);
      modalContainer.appendChild(modal);
      
      modalContainer.classList.add('is-visible'); 

      backGroundType(pokemon,button)

  	});
	}

  function hideModal() {
    modalContainer.classList.remove('is-visible');
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();  
    }
  });

  function backGroundType(pokemon,button) {
    if (pokemon.types[0].type.name === 'normal') {
      let pokemonModal = document.querySelector('.modal');
      pokemonModal.style.backgroundColor = '#CFCFCF';
      button.style.backgroundColor = '#CFCFCF';
    }
    else if (pokemon.types[0].type.name === 'fighting') {
      let pokemonModal = document.querySelector('.modal');
      pokemonModal.style.backgroundColor = '#FFBF7F';
      button.style.backgroundColor = '#FFBF7F';
    }
    else if (pokemon.types[0].type.name === 'flying') {
      let pokemonModal = document.querySelector('.modal');
      pokemonModal.style.backgroundColor = '#C0DCF7';
      button.style.backgroundColor = '#C0DCF7';
    }
    else if (pokemon.types[0].type.name === 'poison') {
      let pokemonModal = document.querySelector('.modal');
      pokemonModal.style.backgroundColor = '#C0DCF7';
      button.style.backgroundColor = '#C0DCF7';
    }
    else if (pokemon.types[0].type.name === 'ground') {
      let pokemonModal = document.querySelector('.modal');
      pokemonModal.style.backgroundColor = '#C8A78C';
      button.style.backgroundColor = '#C8A78C';
    }
    else if (pokemon.types[0].type.name === 'rock') {
      let pokemonModal = document.querySelector('.modal');
      pokemonModal.style.backgroundColor = '#D7D4C0';
      button.style.backgroundColor = '#D7D4C0';
    }
    else if (pokemon.types[0].type.name === 'bug') {
      let pokemonModal = document.querySelector('.modal');
      pokemonModal.style.backgroundColor = '#C8D088';
      button.style.backgroundColor = '#C8D088';
    }
    else if (pokemon.types[0].type.name === 'ghost') {
      let pokemonModal = document.querySelector('.modal');
      pokemonModal.style.backgroundColor = '#B79EB7';
      button.style.backgroundColor = '#B79EB7';
    }
    else if (pokemon.types[0].type.name === 'steel') {
      let pokemonModal = document.querySelector('.modal');
      pokemonModal.style.backgroundColor = '#AFD0DB';
      button.style.backgroundColor = '#AFD0DB';
    }
    else if (pokemon.types[0].type.name === 'fire') {
      let pokemonModal = document.querySelector('.modal');
      pokemonModal.style.backgroundColor = '#F29091';
      button.style.backgroundColor = '#F29091';
    }
    else if (pokemon.types[0].type.name === 'water') {
      let pokemonModal = document.querySelector('.modal');
      pokemonModal.style.backgroundColor = '#91BFF7';
      button.style.backgroundColor = '#91BFF7';
    }
    else if (pokemon.types[0].type.name === 'grass') {
      let pokemonModal = document.querySelector('.modal');
      pokemonModal.style.backgroundColor = '#9DD091';
      button.style.backgroundColor = '#9DD091';
    }
    else if (pokemon.types[0].type.name === 'electric') {
      let pokemonModal = document.querySelector('.modal');
      pokemonModal.style.backgroundColor = '#FCDF7F';
      button.style.backgroundColor = '#FCDF7F';
    }
    else if (pokemon.types[0].type.name === 'psychic') {
      let pokemonModal = document.querySelector('.modal');
      pokemonModal.style.backgroundColor = '#F69EBC';
      button.style.backgroundColor = '#F69EBC';
    }
    else if (pokemon.types[0].type.name === 'ice') {
      let pokemonModal = document.querySelector('.modal');
      pokemonModal.style.backgroundColor = '#9DEBFF';
      button.style.backgroundColor = '#9DEBFF';
    }
    else if (pokemon.types[0].type.name === 'dragon') {
      let pokemonModal = document.querySelector('.modal');
      pokemonModal.style.backgroundColor = '#A6AFF0';
      button.style.backgroundColor = '#A6AFF0';
    }
    else if (pokemon.types[0].type.name === 'dark') {
      let pokemonModal = document.querySelector('.modal');
      pokemonModal.style.backgroundColor = '#A69E9D';
      button.style.backgroundColor = '#A69E9D';
    }
    else if (pokemon.types[0].type.name === 'fairy') {
      let pokemonModal = document.querySelector('.modal');
      pokemonModal.style.backgroundColor = '#F6B7F7';
      button.style.backgroundColor = '#F6B7F7';
    }
    else if (pokemon.types[0].type.name === 'stellar') {
      let pokemonModal = document.querySelector('.modal');
      pokemonModal.style.backgroundColor = '#9370DB';
      button.style.backgroundColor ='#9370DB';
    }
    else if (pokemon.types[0].type.name === 'unknown') {
      let pokemonModal = document.querySelector('.modal');
      pokemonModal.style.backgroundColor = '#DCDCDC';
      button.style.backgroundColor ='#DCDCDC';
    }
  }

  modalContainer.addEventListener('click', (e) => {
    // Since this is also triggered when clicking INSIDE the modal
    // We only want to close if the user clicks directly on the overlay
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

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
	}
})();

pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);

  });
});



