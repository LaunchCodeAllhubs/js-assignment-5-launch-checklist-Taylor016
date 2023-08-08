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

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    const pilotStatus = document.getElementById('pilotStatus');
    const copilotStatus = document.getElementById('copilotStatus');
    const fuelStatus = document.getElementById('fuelStatus');
    const cargoStatus = document.getElementById('cargoStatus');
    const launchStatus = document.getElementById('launchStatus');
//console.log(pilot)
   if(validateInput(pilot) === 'Empty' || validateInput(copilot) === 'Empty' || validateInput(fuelLevel) === 'Empty' || validateInput(cargoMass) === 'Empty') {
window.alert("All fields required");
   }

else if (validateInput(pilot) === 'Is a Number' || validateInput(copilot) === 'Is a Number' || validateInput(fuelLevel) === 'Not a Number' || validateInput(cargoMass) === 'Not a Number') {
window.alert("Correct information for each field is required");

   } else { 
       list.style.visibility = 'visible';
       pilotStatus.innerHTML = `Pilot ${pilot}`;
       copilotStatus.innerHTML = `Copilot ${copilot}`;
            if(fuelLevel < 10000) {
            //list.style.visibility = 'visible';
            launchStatus.style.color = 'red';
            console.log(launchStatus.style.color);
            fuelStatus.innerHTML = "Fuel level is NOT high enough for launch";
            launchStatus.innerHTML = "Shuttle Not Ready For Launch";
            //launchStatus.style.color = '#C7254H';
       
            } else if (cargoMass > 10000) {
              cargoStatus.innerHTML = 'Cargo mass is too high for takeoff';
              launchStatus.innerHTML = 'Shuttle Not Ready For Launch';
              launchStatus.style.color = '#C7254E';
            } else {
                launchStatus.stlye.color = '#419F6A';
                launchStatus.innerHTML = 'Shuttle Is Ready For Launch';
            }
   }
   

}

async function myFetch() {
    // let planetsReturned;

    // planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
    //     return response.json();
    //     });

    // return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
