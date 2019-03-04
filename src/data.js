
const filterType = (data, type) => {
		console.log("filterType");
		//data: debe ser un arreglo de objetos POKEMON.pokemon
		//type debe ser un string

		const arrType = [];
		for(let i = 0; i < data.length; i++){

			if((data[i].type.indexOf(type)) > -1) {
				arrType.push(data[i]);

			}

		}

		return arrType;
};



//order by name A - Z
const alphabeticalOrder = (data) => {
	const orderByName = data.map((obj) => {return obj.name;}).sort();
	const pokemonByName = orderByName.map((name) => data.filter(pokemon => pokemon.name === name)[0]);
	return pokemonByName;
};



//order Z - A
const alphabeticalInverseOrder = (data) => {
	const orderByName = data.map((obj) => {return obj.name;}).sort().reverse();
	const pokemonByName = orderByName.map((name) => data.filter(pokemon => pokemon.name === name)[0]);
	return pokemonByName;
};



const moda = (data) => {
	const objModaType = {};
	for(let i = 0; i < data.length; i++){
		for(let j = 0; j < data[i].type.length; j++){
			if(objModaType.hasOwnProperty(data[i].type[j])){
				objModaType[data[i].type[j]]+= 1;
			} else {
				objModaType[data[i].type[j]] = 1;
			}
		}
	}
	//console.log(JSON.stringify (objModaType));
	return objModaType;
};



window.alphabeticalInverseOrder = alphabeticalInverseOrder;
window.alphabeticalOrder = alphabeticalOrder;
window.filterType = filterType;
window.moda = moda;



/*

//función simplificada que ordena de A-Z

const alphabeticalOrder = (data) => {
	const orderByName = data.map((obj) => {return obj.name}).sort();
	const pokemonByName = orderByName.map((name) => data.filter(pokemon => pokemon.name === name)[0]);

	return pokemonByName;
}

const alphabeticalOrderExplicado = (data) => {
	const orderByName = data.map((obj) => {return obj.name}).sort();
	const pokemonByName = orderByName.map((name) => {
		return data.filter(pokemon => {
			return pokemon.name === name;
		})[0];
	});

	return pokemonByName;
}

*/

/*

const alphabeticalOrderZtoA = (data) => {
	//debe ser un array con objetos

	//genera un arreglo con nombres ordenados alfabeticamente Z-A
	const orderByName = data.map((obj) => {return obj.name}).sort();
	orderByName = orderByName.reverse();


	const arrAlphabetical = [];
	for(let i = 0; i < orderByName.length; i++){

		for(let j = 0; j < data.length ; j++ ){
			//console.log(pokemonNames[i], arrPokemons[j].name);
			//genera un array con los objetos ordenados alfabeticamente
			if (orderByName[i] === data[j].name){
				arrAlphabetical.push(data[j]);

}
*/
