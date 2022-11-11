//Crea un array de 3 pokemons, el tipo de dato a usar será un objeto. Deberá contener nombre, tipoDePokemon.

var pokemons = [
	(pokemon1 = {
		nombre: "Charmander",
		tipoDePokemon: "Fuego",
	}),
	(pokemon2 = {
		nombre: "Pikachu",
		tipoDePokemon: "Electrico",
	}),
	(pokemon3 = {
		nombre: "Bulbasaur",
		tipoDePokemon: "Veneno",
	}),
]

//Crea una condición y si el tipo de pokemon es fuego muestra por consola el mensaje ¡Es un pokemon de fuego!.

for (var i = 0; i < pokemons.length; i++) {
	if (pokemons[i].tipoDePokemon == "Fuego") {
		console.log("¡Es pokemon de fuego!")
	} else {
		console.log("Te has confundido")
	}
}
