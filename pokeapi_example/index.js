async function fetchData() {

    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/${pokemonName}');
    
        if(!response.ok){
            throw new Error("Could not fetch data");
        }
        const data = await response.json();
        const pokemonsprite = data.sprites.front_default;
        const pokemonImage = document.getElementById("pokemonImage");

        pokemonImage.src = pokemonsprite;
        pokemonImage.style.display = "bloc"
    }
    catch(error){
        console.error(error);
    }
}
