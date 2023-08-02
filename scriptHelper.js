// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    let numberInput = Number(testInput);
    if(testInput === '') 
    {
       return "Empty";
    } 
    else if (isNaN(numberInput))
    {
     return "Not a Number";

    } 
    else if (isNaN(numberInput) === false) 
    
    {
    return "Is a Number";

    }

   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   const pilot = document.getElementById('pilotName');
   const copilot = document.getElementById('copilotName');
   const fuelLevel = document.getElementById('fuelLevel');
   const cargoLevel = document.getElementById('cargoMass');

   if(validateInput(pilot) === '' || validateInput(copilot) === '' || validateInput(fuelLevel) === '' || validateInput(cargoLevel) === '') {
alert("All field required");

if()


   }
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
