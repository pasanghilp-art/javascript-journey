function convertToFahrenheit(celsius){
    console.log((celsius*9/5)+32);
}
convertToFahrenheit(22);

function convertToCelsius(fahrenheit){
    console.log((fahrenheit*9/5)+32);
}
convertToCelsius(22);

function convertTemprature(degree, unit){
    if(unit === 'C'){
        result = convertToFahrenheit;
        return `${result}F`;
    } else if(unit === 'F') {
        result = convertToCelsius;
        return `${result}C`;
    }
}
console.log(convertTemprature(30,'C'));
console.log(convertTemprature(30,'F'));