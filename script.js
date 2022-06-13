const convertBtn = document.getElementById("convert-btn")
const convertValue = document.getElementById("convert-value")

const lengthValue = document.getElementById("length-value")
const volumeValue = document.getElementById("volume-value")
const massValue = document.getElementById("mass-value")

// Conversion variables
const meterToFeet = 3.28;
const feetToMeter = 0.3;

const literToGallon = 0.22;
const gallonToLiter = 4.55;

const kiloToPound = 2.2;
const poundToKilo = 0.45;

// Converted values
let meters = 0.00;
let feet = 0.00;

let gallons = 0.00;
let liters = 0.00;

let kilograms = 0.00;
let pounds = 0.00;




// Get the input value when the button is clicked
convertBtn.addEventListener("click", function(){
// convert meters to feet

meters = getLength(convertValue.value,feetToMeter);
feet = getLength(convertValue.value,meterToFeet);

gallons = getVolume(convertValue.value,literToGallon);
liters = getVolume(convertValue.value,gallonToLiter);

kilograms = getMass(convertValue.value,poundToKilo);
pounds = getMass(convertValue.value,kiloToPound);


// Length output
lengthValue.textContent = (`${convertValue.value} meters = ${feet} feet | ${convertValue.value} feet = ${meters} meters`)

volumeValue.textContent = (`${convertValue.value} liters = ${gallons} gallons | ${convertValue.value} gallons = ${liters} liters`)

massValue.textContent = (`${convertValue.value} kilos = ${pounds} pounds | ${convertValue.value} pounds = ${kilograms} kilos`)

// console.log("Meters: " + meters)
// console.log("Feet: " + feet)

// console.log("Gallons: " + gallons)
// console.log("Liters: " + liters)

// console.log("kiograms: " + kilograms)
// console.log("Pounds: " + pounds)


});

function getLength(value,conversion){
    return (value * conversion).toFixed(3)
}

function getVolume(value,conversion){
    return value * conversion
}

function getMass(value,conversion){
    return value * conversion
}

// function valueToFeet(){

// }