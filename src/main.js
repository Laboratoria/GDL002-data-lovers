const ctSelector = document.getElementById("country");
const ctNameToCtCode = {}

function loadCountry (loadIndicator) {
    const ctOptions = Object.keys(WORLDBANK)
    for (i = 0; i < ctOptions.length; i++) {
        const ctCode = ctOptions[i]
        const ctName = WORLDBANK[ctCode].indicators[0].countryName
        ctNameToCtCode[ctName] = ctCode
        ctSelector.options[i + 1] = new Option(ctName, i + 1)
    }
};

// user actions 

function loadYear () {
    const yrSelector = document.getElementById("year");
    for (i = 1960; i <= 2017 ; i++) {
        yrSelector.options[i - 1959] = new Option(i, i - 1959)
    }
};


function loadIndicator(evento) {
    const indSelector = document.getElementById("select-indicator");
    indSelector.options= [];
    indSelector.options [0] = new Option ("Seleccionar", 0)
    const country = ctSelector.options[evento.target.value].innerHTML
    //alert ("Cargando indicadores de: " + country + " " + ctNameToCtCode[country]);
    const countryIndicators = WORLDBANK[ctNameToCtCode[country]].indicators
    for (i =0; i < countryIndicators.length; i++) {
        const indicatorName = countryIndicators [i].indicatorName

        indSelector.options [i+1] = new Option (indicatorName, i +1)
    }
    //alert (countryIndicators) 
};

// begining page selectors loading
loadCountry()
loadYear()
ctSelector.addEventListener ("change", loadIndicator)