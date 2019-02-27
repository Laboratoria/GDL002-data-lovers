let globalPokemon;

//Control de pantallas
const displayScreen = (screenName) => {
    if (screenName === "details"){
        const displayList = document.getElementById("pokemonList");
        const displayPokemonCard = document.getElementById("pokemonCard");
        const displayPokemonCP = document.getElementById("divMaxCP");

        displayList.style.display = "none";
        displayPokemonCard.style.display = "block";
        displayPokemonCP.style.display = "block";
        return;
    }
    if (screenName === "search"){
        const displayList = document.getElementById("pokemonList");
        const displayPokemonCard = document.getElementById("pokemonCard");
        const displayPokemonCP = document.getElementById("divMaxCP");

        displayList.style.display = "none";
        displayPokemonCard.style.display = "block";
        displayPokemonCP.style.display = "block";
        displayInfo(validatePokemon());
        clearElement("divCPcalc");
        clearValue("idInputCP");
        return;
    }
    if (screenName === "list"){
        const displayList = document.getElementById("pokemonList");
        const displayPokemonCard = document.getElementById("pokemonCard");
        const displayPokemonCP = document.getElementById("divMaxCP");

        displayList.style.display = "block";
        displayPokemonCard.style.display = "none";
        displayPokemonCP.style.display = "none";
        
        // displayPokemonList(dataLovers.filterPokemon(window.POKEMON.pokemon, "type", "Water")); // ?
        // selectPokemonList("filter",);
        // displayPokemonList(dataLovers.filterPokemon(window.POKEMON.pokemon, "type", "Water"));
        return;
    }
    if (screenName === "home"){
        const displayList = document.getElementById("pokemonList");
        const displayPokemonCard = document.getElementById("pokemonCard");
        const displayPokemonCP = document.getElementById("divMaxCP");

        displayList.style.display = "none";
        displayPokemonCard.style.display = "block";
        displayPokemonCP.style.display = "block";
        pickPokemon(window.POKEMON.pokemon);
        return;
        }
};

// const findPokemon = (data) => {
//     const pokemonObject = data.find(pokemon => pokemon.name == getPokemon() || pokemon.id == getPokemon());
//     return pokemonObject;
// };

//Seleccionar Pokémon al azar
const pickPokemon = (data) => {
    return data[Math.floor(Math.random()*151)];
};

//Recibir el nombre del pokemon a buscar
const getPokemon = () => {
    return document.getElementById("searchBar").value;
};

//Validar si el texto escrito coincide con un Pokémon
const validatePokemon = () => {
    const wantedPokemon = dataLovers.findPokemon(window.POKEMON.pokemon,getPokemon());
    if (wantedPokemon == undefined) {
        return fail();
    }
    return wantedPokemon;
};

//Seleccionar lista a asignar con el botón
const selectPokemonList = (whichList, property, element) => {
    if (whichList === "filter") {
        displayPokemonList(dataLovers.filterPokemon(window.POKEMON.pokemon, property, element));
        displayScreen("list");
        return;
    } else if (whichList == "order") {
        displayPokemonList(dataLovers.orderPokemon(window.POKEMON.pokemon, property, element));
        displayScreen("list");
        return;
    }
};

//Mostrar alert y Pokemon aleatorio si se introduce un numero o nombre no valido
const fail = () => {
    alert("Tu búsqueda no coincide con ningún Pokémon, pero aquí tienes un Pokémon al azar :)");
    return pickPokemon();
};

// ------------------------------------------------------- FIND PROPERTY ARRAYS TO DISPLAY ----------------------------------------------

const findTypes = (pokemonObject) => {
    clearElement("divTypeImg");
    const divTypeImg = document.getElementById("divTypeImg");
    for (let i = 0 ; i < pokemonObject.typeImg.length ; i++) {
        const divEachTypeImg = document.createElement("div");
        const pokemonTypesFigure = document.createElement("figure");
        const pokemonTypeImg = document.createElement("img");

        pokemonTypeImg.src = pokemonObject.typeImg[i];
        pokemonTypesFigure.appendChild(pokemonTypeImg);
        divEachTypeImg.appendChild(pokemonTypesFigure);
        divTypeImg.appendChild(divEachTypeImg);
    }
};

const findWeaknesses = (pokemonObject) => {
    clearElement("divWeaknessesImg");
    const divWeaknessesImg = document.getElementById("divWeaknessesImg");
    for (let i = 0 ; i < pokemonObject.weaknessesImg.length ; i++) {
        const divEachWeaknessesImg = document.createElement("div");
        const pokemonWeaknessesFigure = document.createElement("figure");
        const pokemonWeaknessesImg = document.createElement("img");

        pokemonWeaknessesImg.src = pokemonObject.weaknessesImg[i];
        pokemonWeaknessesFigure.appendChild(pokemonWeaknessesImg);
        divEachWeaknessesImg.appendChild(pokemonWeaknessesFigure);
        divWeaknessesImg.appendChild(divEachWeaknessesImg);
    }
};

const findEvolution = (data, evolution) => {
    if (data.hasOwnProperty(evolution)) {
        let evolutionArray = [];
        for (let i = 0 ; i < data[evolution].length ; i++) {
            evolutionArray.push(data[evolution][i].name);
        }
        return evolutionArray.join();
    } else {
        return "NA";
    }
};

// -----------------------------------------------------------DISPLAY FUNCTIONS ---------------------------------------------
const displayInfo = (pokemonObject) => {
    globalPokemon = pokemonObject;
    document.getElementById("pokeName").innerHTML = pokemonObject.name;
    document.getElementById("pokeNum").innerHTML = pokemonObject.num;
    document.getElementById("pokemonPicture").src = pokemonObject.img;
    document.getElementById("divTypeImg").src = findTypes(pokemonObject);
    document.getElementById("pokePreEvolution").innerHTML = findEvolution(pokemonObject, "prev_evolution");
    document.getElementById("pokeEvolution").innerHTML = findEvolution(pokemonObject, "next_evolution");
    document.getElementById("pokeHeight").innerHTML = pokemonObject.height;
    document.getElementById("pokeWeight").innerHTML = pokemonObject.weight;
    document.getElementById("pokeDescription").innerHTML = pokemonObject.description;
    document.getElementById("divWeaknessesImg").src = findWeaknesses(pokemonObject);
    document.getElementById("frequencySpawn").innerHTML = pokemonObject.avg_spawns;
    document.getElementById("timeSpawn").innerHTML = pokemonObject.spawn_time;
    document.getElementById("kmEgg").innerHTML = pokemonObject.egg;
    document.getElementById("candies").innerHTML = pokemonObject.candy_count;
    clearValue("searchBar");
    if (pokemonObject.multipliers == null) {
        disableDOMElement("idInputCP");
        disableDOMElement("calculateButton");
    } else {
        enableDOMElement("idInputCP");
        enableDOMElement("calculateButton");
    }
};

const displayPokemonList = (listToDisplay) => {
    const pokemonList = document.getElementById("pokemonList");
    for (let i = 0 ; i < listToDisplay.length ; i++) {
        const pokemonDiv = document.createElement("div");
        const pokemonLabel = document.createElement("label");
        const pokemonFigure = document.createElement("figure");
        const pokemonImg = document.createElement("img");
        const pokemonLink = document.createElement("a");
        pokemonDiv.className = "pokemonElement";

        pokemonLabel.appendChild(document.createTextNode("#" + listToDisplay[i].num + " "));
        pokemonLabel.appendChild(document.createTextNode(listToDisplay[i].name));
        pokemonDiv.appendChild(pokemonLabel);
        pokemonList.appendChild(pokemonDiv);

        pokemonImg.src = listToDisplay[i].img;
        pokemonFigure.appendChild(pokemonImg);
        pokemonDiv.appendChild(pokemonFigure);
        pokemonList.appendChild(pokemonDiv);

        pokemonLink.href = document.getElementById("pokemonCard");
        pokemonDiv.appendChild(pokemonLink);
        pokemonList.appendChild(pokemonDiv);

        pokemonDiv.addEventListener("click",function(){
            clearValue("idInputCP");
            clearElement("divCPcalc");
            displayScreen("details");
            displayInfo(listToDisplay[i]);
        });
    }
};

const displayMaxCP = (pokemonObject) => {
    clearElement("divCPcalc");
    const cpPokemon = document.getElementById("divCPcalc");
    const cp = document.getElementById("idInputCP").value;
    const labelNewCP = document.createElement("label");
    labelNewCP.appendChild(document.createTextNode("  Nuevo CP estimado:  "));
    cpPokemon.appendChild(labelNewCP);
    for (let i = 0 ; i < pokemonObject.multipliers.length ; i++) {
        if (i != pokemonObject.multipliers.length-1) {
            const cpLabel = document.createElement("label");
            const cpValue = dataLovers.calculateMaxCP(pokemonObject.multipliers[i],cp);
            cpLabel.appendChild(document.createTextNode(cpValue + " - "));
            cpPokemon.appendChild(cpLabel);
        } else {
            const cpLabel = document.createElement("label");
            const cpValue = dataLovers.calculateMaxCP(pokemonObject.multipliers[i],cp);
            cpLabel.appendChild(document.createTextNode(cpValue));
            cpPokemon.appendChild(cpLabel);
        }
    }
};

//------------------------------------------------------------------ CLEAR FUNCTIONS ---------------------------------------------------------------------
const clearElement = (element) => {
    document.getElementById(element).innerHTML = "";
};

const clearValue = (element) => {
    document.getElementById(element).value = "";
};

const disableDOMElement = (element) => {
    document.getElementById(element).disabled = true;
};

const enableDOMElement = (element) => {
    document.getElementById(element).disabled = false;
};

// ----------------------------------------------------------------- ADD EVENT LISTENERS --------------------------------------------------------------------------
document.getElementById("searchButton").addEventListener("click", () => displayScreen("search"));
document.getElementById("calculateButton").addEventListener("click", () => displayMaxCP(globalPokemon));
document.getElementById("typeNormal").addEventListener("click", () => selectPokemonList("order","name","asc"));