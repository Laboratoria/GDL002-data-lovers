<<<<<<< HEAD
let listPokemon = window.POKEMON.pokemon;
=======


>>>>>>> master
//funcion home icon
function homeIcon(){
	document.getElementById('pokedexScreen').style.display = "none";
	document.getElementById('compareScreen').style.display = "none";
	document.getElementById('exitScreen').style.display = 'none';
	document.getElementById('home').style.display = 'block';
}
document.getElementById('homeBtn').addEventListener('click',homeIcon);
<<<<<<< HEAD
//funcion para cambiar a la pantalla de comparar al darle click en 'compareBtn' se encuentran los selectores
function compare() {
=======

//funcion para cambiar a la pantalla de comparar al darle click en 'compareBtn'
function compare(event) {//
	 //console.log(event.target);	
>>>>>>> master
	document.getElementById('home').style.display = "none"; //darle invisibilidad
	document.getElementById('compareScreen').style.display = "block"; //mostrar el bloque (pantalla/slide)
}
	document.getElementById('compareBtn').addEventListener('click', compare);
<<<<<<< HEAD
=======

>>>>>>> master


//funcion de salir en la pantalla de 'comparar'
function exit() {
	document.getElementById('compareScreen').style.display = "none"; //darle invisibilidad
	document.getElementById('exitScreen').style.display = "block";
}
<<<<<<< HEAD
	document.getElementById('exit').addEventListener('click', exit);
=======

	document.getElementById('exit').addEventListener('click', exit);


// 	//funcion para limpiar y poder comparar otro
// function compareAgain(){
// 	document.getElementById('imagePokemon').value="";
// }
// 	document.getElementById('compareAgain').addEventListener('click', compareAgain);
>>>>>>> master

/**Funcion por si escoge 'debilidades' lo mande a esa pantalla */

<<<<<<< HEAD
/**Funcion si escoge 'pokedex' lo mande a esa pantalla */
function pokedexInfo(){
	document.getElementById('home').style.display = "none";
	document.getElementById('pokedexScreen').style.display = "block";
	//document.getElementById('root').style.display = "none";
}
document.getElementById('pokedexBtn').addEventListener('click',pokedexInfo);

	
//función salir en pantalla 'pokedex'
=======
function weaknessScreen(){
	document.getElementById('home').style.display = "none";
	document.getElementById('weaknessScreen').style.display = "block";
}

	document.getElementById('weaknessBtn').addEventListener('click',weaknessScreen);


//funcion para cambiar de la 'weaknessScreen' a 'resultsScreen'
function weaknessResults(){
	document.getElementById('weaknessScreen').style.display = "none";

	document.getElementById('exitScreen').style.display = "block";
}
    document.getElementById('exitBtn').addEventListener('click', weaknessResults);



//función salir en pantalla 'debilidades'
>>>>>>> master
function exit2() {
	document.getElementById('pokedexScreen').style.display = "none";
	document.getElementById('exitScreen').style.display = "block";
	
}
<<<<<<< HEAD
	document.getElementById('exitBtn').addEventListener('click', exit2);

//funcion para llenar los selectores de HTML y ordenarlos alfabeticamente
let fillInSelect = (selectId) => {
   let selectElement = document.getElementById(selectId);
   listPokemon.sort((a,b)=> {	//es la funcion que ordena alfabeticamente cada pokemon de la base de datos
=======

	document.getElementById('exit').addEventListener('click', exit2);

//funcion para llenar los selectores de HTML
let listPokemon = POKEMON.pokemon
let fillInSelect = (selectId) => {
   let selectElement = document.getElementById(selectId);
   listPokemon.sort((a,b)=> {
>>>>>>> master
       if (a.name < b.name) {
           return -1;
         }
         if (a.name > b.name) {
           return 1;
         }

         return 0;
   }).forEach(pokemon => {
       let option = document.createElement("option");
       option.text = pokemon.name;
       selectElement.add(option);
   });
};
<<<<<<< HEAD
fillInSelect("selectPokemon"); //aquí es donde se rellenan los selectores
fillInSelect("selectOpponent");

//es un string template donde se muestran: imagenes, tipos y debilidades de c/ pokemon elegido
function pokeCard(objetPoke) {
	//console.log(objetPoke);
  return `
	<div class="poke-box">
	<p>Name: ${objetPoke.name}</p>
	<p><img src="${objetPoke.img}"></p>
	<p>Type: ${objetPoke.type}</p>
	<p>Weakness: ${objetPoke.weaknesses}</p>
	</div>
`;
}
//muestra en la pantalla el pokemon seleccionado por el usuario junto con imagene, tipo y debilidades
document.getElementById("selectPokemon").addEventListener("change", (event) => {
	let objetPoke = window.allPokemons.filterData(listPokemon, event.target.value);
	document.getElementById('featuresPokemon').innerHTML= pokeCard(objetPoke);
	console.log(JSON.stringify(objetPoke));
  });
//muestra en la pantalla el oponente seleccionado por el usuario junto con imagene, tipo y debilidades
document.getElementById("selectOpponent").addEventListener("change", (event) => {
	const newObject = window.allPokemons.filterData(listPokemon, event.target.value);
	
	document.getElementById("featuresOpponent").innerHTML = pokeCard(newObject);
	});
//Se manda llamar la función computStats y el resultado, lo muestra en la pantalla
document.getElementById('candies', 'selectPokemon').addEventListener("keyup", (event) => {
	//console.log("hola");
	let selectPokemon = document.getElementById("selectPokemon");
	const candyObject = window.allPokemons.computeStats(listPokemon,selectPokemon, event.target.value);
	console.log(JSON.stringify(candyObject));
	document.getElementById("results").innerHTML = candyObject;
	});

let orderNameList = document.getElementById("orderName");
orderNameList.addEventListener("click", () => {
  let pokeList = allPokemons.sortData(window.POKEMON.pokemon);
  let pokemonBox = document.getElementById("allList");
  let htmlBox = "";
  for (let contPokemon = 0; contPokemon < pokeList.length; contPokemon++) {
		htmlBox += `<section class="pokemonImgs"><span>${pokeList[contPokemon].num} ${pokeList[contPokemon].name}
								${pokeList[contPokemon].weight}${pokeList[contPokemon].height}
                <div><img src="${pokeList[contPokemon].img}"/></div></span></section>`;
  }
  pokemonBox.innerHTML = htmlBox;
});
=======
fillInSelect("selectPokemon");
fillInSelect("selectOpponent");

document.getElementById("selectPokemon").addEventListener("change", (event) => {
   document.getElementById("imagePokemon").src = filterImage(listPokemon, event.target.value)
});

document.getElementById("selectOpponent").addEventListener("change", (event) => {
   document.getElementById("imageOpponent").src = filterImageOpponent(listPokemon, event.target.value)
});
>>>>>>> master
