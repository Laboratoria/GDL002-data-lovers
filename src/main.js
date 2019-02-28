const mostrarData = () => {
  document.getElementById("infoBlock").style.display = "block";
 };
  document.getElementById("Enter").addEventListener("click", mostrarData);
 
 
 const showInjuries = () => {
    let injuriesList = INJURIES;
    let buttonInjuriesList = document.getElementById("totalData");
    window.data.fillElements(injuriesList, buttonInjuriesList);
 };

 
 const filter = () =>{
  document.getElementById("totalData").innerHTML = '';
   const values = document.getElementById("filterMenu").value;
   switch(values){
    case "filterForYear":
      mostrarData();
      showInjuries();
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

 const activateButton = document.getElementsByName("button");
 //console.log(activateButton);
 const arrayButton = Array.from("activateButton");
 console.log(arrayButton);


