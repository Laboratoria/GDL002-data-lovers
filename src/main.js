const mostrarData = () => {
  const show = document.getElementById("Info").style.display = "block";
 }

 document.getElementById("Enter").addEventListener("click",mostrarData);

 function fillElements (injuriesList, buttonElement){
 for(let i=0; i<injuriesList.length; i++) {
    let buttonInjurie = document.createElement("span");
    buttonInjurie.id = 'Injurie' + [i];
    let array = INJURIES[i].Year;
    const newArray = parseInt(array);
    if(newArray<=2016 & newArray>=2000){
      buttonInjurie.innerHTML = newArray + "<br>";
      buttonElement.insertAdjacentElement("beforeend", buttonInjurie);
    }
  }
 }

 function showInjuries(){
 let injuriesList = INJURIES;
 let buttonInjuriesList = document.getElementById("totalData");
 fillElements(injuriesList, buttonInjuriesList);
 }
 document.getElementById("Enter").addEventListener("click",showInjuries);

 