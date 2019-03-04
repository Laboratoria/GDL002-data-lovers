//FUNCIÓNES PARA FILTRAR DATA

const filterData = (country,indicatorNm,year) =>{
  const countryData = window.WORLDBANK[country];
  const countryIndicators = countryData.indicators;
  for (let i= 0;  i < countryIndicators.length; i++) {
    const indicatorData= countryIndicators[i];
    if (indicatorData.indicatorName == indicatorNm ) {
     const statistic = indicatorData.data[year];
     window.resultsObject[year] = statistic;
     if (statistic == "") {
         return null;
     }
     const resultOk = statistic;
     return resultOk;
    }
  }
  return null;
};
 
const rangeFilterData = (country, indicatorNm, sinceYear, untilYear) => {
  const yearsData = [];
  for (let currentYear = sinceYear; currentYear <= untilYear; currentYear++){
    let statVal = filterData(country, indicatorNm, currentYear);
    if (null == statVal) statVal = `"ND"`;
    else statVal = statVal.toFixed(1);
    const myParagraph = `<p id= "statResult">` + currentYear + ` : ` + statVal + `</p>`;

    yearsData [currentYear -sinceYear]= myParagraph;
 
  }
  return yearsData.join("");
 
};





//FUNCION PARA ORDERNAR DE MAYOR A MENOR

const orderMax = () => {
  const resultsArray = [];

  for (let year in window.resultsObject) {
    console.log(typeof(window.resultsObject[year]));
    resultsArray.push([year,window.resultsObject[year]]);
  }

  const arrayFinal = resultsArray.sort (function (a,b) {
    return b[1]  -a [1];
  });
  let prettyResult = "<table id=\"tResults\">";
  prettyResult += "<tr><center><th>Año</th><th>Estadistica</th></tr>";
  arrayFinal.forEach(y2valPair => {
    prettyResult += "<tr><td>" + y2valPair[0] + "</td><td>" + y2valPair[1] + "</td></tr>";
  });
  prettyResult += "</table>";
  document.getElementById("order-min-result").innerHTML =`<strong>ORDEN DESCENDENTE: </strong><br>` + prettyResult;

  return arrayFinal.join("\n");
};


//FUNCION PARA ORDENAR DE MENOR A MAYOR

const orderMin = () => {
  const resultsArray = [];

  for (let year in window.resultsObject) {
    console.log(typeof(window.resultsObject[year]));
    resultsArray.push([year,window.resultsObject[year]]);
  }

  const arrayFinal = resultsArray.sort (function (a,b) {
    return a[1]  -b [1];
  });
  let prettyResult = "<table id=\"tResults\">";
  prettyResult += "<tr><th>Año</th><th>Estadistica</th></tr>";
  arrayFinal.forEach(y2valPair => {
    prettyResult += "<tr><td>" + y2valPair[0] + "</td><td>" + y2valPair[1] + "</td></tr>";
  });
  prettyResult += "</table>";
  document.getElementById("order-min-result").innerHTML =`<strong>ORDEN DESCENDENTE: </strong><br>` + prettyResult;

  return arrayFinal.join("\n");
};

   
//Funcion para calcular promedio de las estadisticas
const calcAvg =() => {
  const dataAvg = Object.values(window.resultsObject);
  let dataFilter = dataAvg.filter(x => x != "");
  if (0 < dataFilter.length) {
    let avg =dataFilter.reduce(function(a, b){ return a + b; });
    let promedio =  avg /dataFilter.length;
    return promedio;
  }
};
  

window.resultsObject = {};
window.filterData = filterData;
window.rangeFilterData = rangeFilterData;
window.calcAvg = calcAvg;
window.orderMin = orderMin;
window.orderMax = orderMax;
