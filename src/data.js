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
  const years = INJURIES.filter(INJURIE => valueButton == INJURIE.Year);
  for(let i = 0; i<48; i++){
    const result = Object.keys(years[0])[i] + ":" + Object.values(years[0])[i];
    document.getElementById("Resultado").innerHTML += result + `<br />`;
  }
},
 
 
fillElements: (injuriesList, buttonElement) => {
  for(let i=0; i<injuriesList.length; i++) {
     let buttonInjurie = document.createElement("span");  
     buttonInjurie.id = "Injurie" + [i];
     let array = injuriesList[i].Year;
     const newArray = parseInt(array);
     if(newArray<=2016 & newArray>=2000){
      buttonInjurie.innerHTML =`${newArray} <button value = "${array}" onclick = "window.data.mostrarNumeros()" >i</button><br />`;
      buttonElement.insertAdjacentElement("beforeend", buttonInjurie);
      
     }
   }
   //document.getElementsByName("array").addEventListener("click",window.data.mostrarNumeros());
  }
  
 };
 

 

 