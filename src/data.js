window.data = {
 mostrarPalabra: () => {
  let word;
  for(let i = 0; i <= INJURIES.length; i++){
    word = Object.keys(INJURIES[i]);
    word.forEach(function (element) {
    document.write(element);
  });
 }
  return word;
 },
 
 mostrarNumeros: () => {
  document.getElementById("Resultado").innerHTML = "";
  document.getElementById("closeModal").style.display = "block";
  document.getElementById("Resultado").style.display = "block";
  const valueButton = event.target.value;
  const years = INJURIES.filter(INJURIE => valueButton === INJURIE.Year);
  console.log(years);
  
  for(let i = 0; i<48; i++){
    const result = Object.keys(years[0])[i] + ":" + Object.values(years[0])[i];
    document.getElementById("Resultado").innerHTML += result + `<br />`;
  }
},
 
 
fillElements: (injuriesList, buttonElement) => {
  for(let i=0; i<injuriesList.length; i++) {
     let spanInjurie = document.createElement("span");  
     spanInjurie.id = "Injurie" + [i];
     let year = parseInt(injuriesList[i].Year);
     if(year <=2016 & year>=2000){
       let buttonInjurie = document.createElement("button");
       buttonInjurie.value = year;
       spanInjurie.appendChild(buttonInjurie);
       spanInjurie.innerHTML =`${year} <button name="button" value = "${injuriesList[i].Year}">i</button><br />`;
       buttonElement.insertAdjacentElement("beforeend", spanInjurie);
     }
   }
  }
 };
 

 

 