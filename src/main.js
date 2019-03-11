const mostrarData = () => {
  document.getElementById("infoBlock").style.display = "block";
 };

 //document.getElementById("Enter").addEventListener("click", mostrarData);
 
 const showInjuriesFilter = () => {
    let buttonInjuriesList = document.getElementById("totalData");
    window.data.fillElements(INJURIES, buttonInjuriesList);
    
 };
 
 const showInjuriesOrder = () => {
  let buttonInjuriesList = document.getElementById("totalData");
  window.data.fillElementsOrder(INJURIES, buttonInjuriesList);
};
 

const filter = () =>{
  document.getElementById("totalData").innerHTML = '';
   const values = document.getElementById("filterMenu").value;
   switch(values){
    case "filterForYear":
      mostrarData();
      showInjuriesFilter();
      activateButtonFunctionFilterOrder();
      break;
   // case "filterForRisk":
 
   }
};

document.getElementById("filterMenu").addEventListener("change",filter);

const order = () =>{
  document.getElementById("totalData").innerHTML = '';
   const values = document.getElementById("orderMenu").value;
   switch(values){
    case "lastToFirst":
      mostrarData();
      showInjuriesOrder(INJURIES);
      activateButtonFunctionFilterOrder(INJURIES);
      break;
    case "FirstToLast":
      mostrarData();
      showInjuriesFilter();
      activateButtonFunctionFilterOrder();
      break;
    case "default":
     alert("No has elegido ninguno");
   }
};

document.getElementById("orderMenu").addEventListener("change",order);

const calculate = () =>{
  document.getElementById("totalData").innerHTML = '';
   const values = document.getElementById("calculusMenu").value;
   switch(values){
    case "YearWithFewerInjuries":
      mostrarData();
      showInjuriesFilter();
      activateButton();
      break;
   // case "filterForRisk":
 
   }
};

document.getElementById("calculusMenu").addEventListener("change",calculate);

 const closeModal = () =>{
   document.getElementById("closeModal").style.display = "none";
   document.getElementById("Resultado").style.display = "none";
 };
 document.getElementById("closeModal").addEventListener("click",closeModal);

const activateButtonFunctionFilterOrder = (INJURIES) =>{
  let activateButton = document.getElementsByName("button");
  let arrayButton = Array.from(activateButton);
  arrayButton.forEach(function (element) {
    element.addEventListener("click",()=>{
      elementsOfDOM();
      let showNumber = window.data.ShowNumbers(INJURIES);
      console.log(showNumber);
      
      return showNumber.forEach((element)=>{
        document.getElementById("Resultado").innerHTML += element + `<br />`;
      });
    });
  });
};

const elementsOfDOM = () =>{
  document.getElementById("Resultado").innerHTML = "";
  document.getElementById("closeModal").style.display = "block";
  document.getElementById("Resultado").style.display = "block";
};

const activateButton = () =>{
  let activateButton = document.getElementsByName("button");
  let arrayButton = Array.from(activateButton);
  arrayButton.forEach(function (element) {
    element.addEventListener("click",()=>{
      elementsOfDOM();
      let showNumber = window.data.ShowNumbers(INJURIES);
      return showNumber.forEach((element)=>{
        document.getElementById("Resultado").innerHTML += element + `<br />`;
      });
    });
  });
};

// const activateButtonFunctionToCalculate = () =>{
//   let activateButton = document.getElementsByName("button");
//   let arrayButton = Array.from(activateButton);
//   arrayButton.forEach(function (element) {
//     element.addEventListener("click",window.data.showNumbersOfCalculate);
//   });
// };

//document.getElementById("Resultado").addEventListener("click",window.data.showNumbersOfCalculate())