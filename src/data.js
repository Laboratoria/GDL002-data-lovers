window.data = {
 
ShowNumbers: () => {
  let wordAndValues = "";
  let result = [];
  const valueButton = event.target.value;
  const years = INJURIES.filter(INJURIE => valueButton === INJURIE.Year);
  for(let i = 0; i<48; i++){
    let value = Object.values(years[0])[i];
    let key = Object.keys(years[0])[i];
    if(value === null){
      value = 0;
      wordAndValues = key + "     :     " + value;
    }else{
      wordAndValues = key + "     :     " + value;
    }
    result.push(wordAndValues);
  }
  return result;
},
 
 
fillElements: (injuriesList, buttonElement) => {
  const arrayYear = [];
  let year = "";
  for(let i=0; i<injuriesList.length; i++) {
     let spanInjurie = document.createElement("span");  
     spanInjurie.id = "Injurie" + [i];
     year = parseInt(injuriesList[i].Year);
     if(year <=2016 & year>=2000){
       let buttonInjurie = document.createElement("button");
       buttonInjurie.value = year;
       spanInjurie.appendChild(buttonInjurie);
       spanInjurie.innerHTML =` <button name="button" value = "${injuriesList[i].Year}">${year}</button>`;
       buttonElement.insertAdjacentElement("beforeend", spanInjurie);
     }
   }
   return arrayYear.push(year);
},

fillElementsOrder: (injuriesList, buttonElement) => {
  const arrayYear = [];
  let year = "";
  for(let i=0; i<injuriesList.length; i++) {
    year = parseInt(injuriesList[i].Year);
    if(year <=2016 & year>=2000){
      arrayYear.push(year);
    }
  }
  arrayYear.reverse();
  for(let j=0; j<arrayYear.length; j++){
    let spanInjurie = document.createElement("span");  
    spanInjurie.id = "Injurie" + [j];
    let buttonInjurie = document.createElement("button");
    buttonInjurie.value = arrayYear[j];
    spanInjurie.appendChild(buttonInjurie);
    spanInjurie.innerHTML =` <button name="button" value = "${injuriesList[j].Year}">${arrayYear[j]}</button>`;
    buttonElement.insertAdjacentElement("beforeend", spanInjurie);
  }
   return arrayYear.push(year);
},

showNumbersOfCalculate: () => {
  //elementsOfDOM();
  let averache = [];
  let result = 0;
  const valueButton = event.target.value;
  const years = INJURIES.filter(INJURIE => valueButton === INJURIE.Year);
  for(let i = 0; i<48; i++){
    let values =  Object.values(years[0])[i];
    let value = Object.values(years[0])[i];
    if(value === null){
      value = 0;
    }else{
      averache.push(values);
    }
  }
  averache.forEach(function(element){
    result += element;
  });
  result = Math.round(result/48);
  // console.log(result);
  document.getElementById("Resultado").innerHTML += "El promedio de accidentes en el año " + valueButton + " es de " + result + `<br />`;
  return result;
}

};
