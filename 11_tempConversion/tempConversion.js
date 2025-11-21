const convertToCelsius = function(temperature) {

    let result = Number(((temperature - 32) * (5/9)).toFixed(1));
    return result;

};

const convertToFahrenheit = function(temperature) {

    let result = Number(((temperature * (9/5)) + 32).toFixed(1));
    return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
