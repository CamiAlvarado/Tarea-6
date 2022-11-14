const pokemonContainer = document.querySelector(".poke_container");
const pokeApi = async (id) => {
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const datos = await respuesta.json()
        console.log(datos)
        createPokemon(datos)

    } catch (error) {
        console.log("Hay un error" + error)
    }
}
const fetchPokemons = async (number) => {
    for (let i = 1; i <= number; i++) {
        await pokeApi(i)
    }
}
function createPokemon(pokemon) {
    //Card
    const card = document.createElement('div');
    card.classList.add('card-pokemon');

    //Imagen
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');

    const image = document.createElement('img');
    image.src = pokemon.sprites.other['official-artwork'].front_default;

    //Contenedor de la imagen
    imageContainer.appendChild(image);

    const number = document.createElement('p');
    number.classList.add('card-pokemon__number')
    number.textContent = pokemon.id

    //Nombre
    const name = document.createElement('p');
    name.classList.add('card-pokemon__name');
    name.textContent = pokemon.name;

    card.appendChild(imageContainer);
    card.appendChild(number);
    card.appendChild(name);

    pokemonContainer.appendChild(card);
}
fetchPokemons(20);
