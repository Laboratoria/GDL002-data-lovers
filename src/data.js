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
  let quantity;
  for(let i = 0; i <INJURIES.length; i++){
      quantity =INJURIES[i].Year;
      document.getElementById("Resultado").innerHTML = quantity;
 }
  return quantity;
 },
 
fillElements: (injuriesList, buttonElement) => {
  for(let i=0; i<injuriesList.length; i++) {
     let buttonInjurie = document.createElement("span");  
     buttonInjurie.id = 'Injurie' + [i];
     let array = injuriesList[i].Year;
     const newArray = parseInt(array);
     if(newArray<=2016 & newArray>=2000){
      buttonInjurie.innerHTML =`${newArray} <button id = "arrowDown${i}" onclick = buttonFunctions()>i</button><br />`;
      buttonElement.insertAdjacentElement("beforeend", buttonInjurie);
     }
   }
  }
 }

 //mostrarAño

 