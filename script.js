// Write your JavaScript code here!

const { myFetch } = require("./scriptHelper");

//const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {

    let form = document.querySelector('form');
    let list = document.getElementById('faultyItems');
    list.style.visibility = 'hidden';
    form.addEventListener("submit", function(event) {
     event.preventDefault();
     let pilotName = document.querySelector('input[name=pilotName]');
     let copilotName = document.querySelector('input[name=copilotName]');
     let fuelLevel = document.querySelector('input[name=fuelLevel]');
     let cargoMass = document.querySelector('input[name=cargoMass]');

     //console.log(pilotName);
     formSubmission(document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value)
    });
   let listedPlanets = planets; //is this correct?
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse; // this will be a promise? will it be await fecth(url)?
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       // pickPlanet(planets);
       // addDestinationInfo(selectedPlanet); ?? could i not just do addDestinationInfo(pickPlanet)?
   })
   
});