const mostrarData = () => {
  document.getElementById("Info").style.display = "block";
 };

const showInjuries = () => {
    let injuriesList = INJURIES;
    let buttonInjuriesList = document.getElementById("totalData");
    window.data.fillElements(injuriesList, buttonInjuriesList);
};

const buttonFunctions = () =>{
  window.data.mostrarNumeros();
};

 const filtrados = () =>{
   const values = document.getElementById("filtrar").value;
   switch(values){
    case 'Year':
      mostrarData();
      showInjuries();
      break;
   // case "filterForRisk":

   }
 };
 document.getElementById('filtrar').addEventListener('change',filtrados);



 

