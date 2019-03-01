const mostrarData = () => {
  document.getElementById("infoBlock").style.display = "block";
 };
  document.getElementById("Enter").addEventListener("click", mostrarData);
 
 
 const showInjuries = () => {
    let buttonInjuriesList = document.getElementById("totalData");
    window.data.fillElements(INJURIES, buttonInjuriesList);
 };

 
 const filter = () =>{
  document.getElementById("totalData").innerHTML = '';
   const values = document.getElementById("filterMenu").value;
   switch(values){
    case "filterForYear":
      mostrarData();
      showInjuries();
      activateButtonFunction();
      break;
   // case "filterForRisk":
 
   }
 };
 document.getElementById("filterMenu").addEventListener("change",filter);

 const closeModal = () =>{
   document.getElementById("closeModal").style.display = "none";
   document.getElementById("Resultado").style.display = "none";
 };
 document.getElementById("closeModal").addEventListener("click",closeModal);

const activateButtonFunction = () =>{
  let activateButton = document.getElementsByName("button");
  let arrayButton = Array.from(activateButton);
  arrayButton.forEach(function (element) {
    element.addEventListener("click",window.data.mostrarNumeros);
  });
};


