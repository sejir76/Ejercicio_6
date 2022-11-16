//Crea un array de 3 pokemons, el tipo de dato a usar será un objeto. Deberá contener nombre, tipoDePokemon.

var pokemons = [
	{
		nombre: "Charmander",
		tipoDePokemon: "Fuego",
	},
	{
		nombre: "Pikachu",
		tipoDePokemon: "Electrico",
	},
	{
		nombre: "Bulbasaur",
		tipoDePokemon: "Veneno",
	},
]

//Crea una condición y si el tipo de pokemon es fuego muestra por consola el mensaje ¡Es un pokemon de fuego!.

for (var i = 0; i < pokemons.length; i++) {
	if (pokemons[i].tipoDePokemon == "Fuego") {
		console.log("¡Es pokemon de fuego!")
		break
	} else {
		console.log("Te has confundido")
	}
}
