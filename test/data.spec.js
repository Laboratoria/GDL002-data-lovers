require("../src/data/worldbank/worldbank.js");
require('../src/data.js');

 //AVERAGE
describe('calcAvg', () => {
  it('is a function', () => {
    expect(typeof window.calcAvg).toBe('function');
  });
  window.resultsObject = {};
  window.resultsObject["1990"] = 42;
  window.resultsObject["1991"] = 43;
  window.resultsObject["1992"] = 44;
  it('Returns the average statistical data', () => {
    expect(window.calcAvg()).toBe(43);
  });
}); 


//FILTER DATA
describe('filterData ', () => {
  it('is a function', () => {
    expect(typeof window.filterData ).toBe('function');
  });
  it('Returns the statistic value for the given country, indicator and year', () => {
    expect(window.filterData("PER", "Empleo de tiempo parcial, mujeres (% del total de mujeres empleadas)", "2002")).toBe(31.4799995422363);
  });
});






