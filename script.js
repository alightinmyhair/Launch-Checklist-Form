function init(){
   let pilotNameInput =document.getElementById("pilotName");
   let copilotNameInput =document.querySelector('input[name="copilotName"]');
   let fuelLevelInput =document.querySelector('input[name="fuelLevel"]');
   let cargoMassInput =document.querySelector('input[name="cargoMass"]');
   let form= document.querySelector("form");
   let pilotStatusInput =document.getElementById("pilotStatus");
   let copilotStatusInput=document.getElementById("copilotStatus");
   let fuelLevelStatusInput=document.getElementById("fuelStatus");
   let cargoMassStatusInput=document.getElementById("cargoStatus");
   let items = document.getElementById("faultyItems");
   let launchStatus = document.getElementById("launchStatus")
   let missionTarget = document.getElementById("missionTarget");

   // window.addEventListener("load", function(){
      fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
         response.json().then(function (json){;
            for(let i=0; i < json.length; i++){
               missionTarget.innerHTML = `
               <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${json[2].name}</li>
                  <li>Diameter: ${json[2].diameter}</li>
                  <li>Star: ${json[2].star}</li>
                  <li>Distance from Earth: ${json[2].distance}</li>
                  <li>Number of Moons: ${json[2].moons}</li>
               </ol>
               <img src="${json[2].image}"></img>`
               }
                     // return json;
            })      
         })
   // })
   
   function isValid(event){
      let valid = true;
      if(pilotNameInput.value === ""|| copilotNameInput.value === "" || fuelLevelInput.value ==="" || cargoMassInput.value ===""){
         alert("All fields are required!");
         valid = false;
         event.preventDefault();
      }else if(!isNaN(pilotNameInput.value) || !isNaN(copilotNameInput.value)|| isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)){
         alert("Please enter text for names and numbers for fuel and cargo levels");
         valid = false;
         event.preventDefault();
         }
         return valid;
   }

   function notReadyStatus(){
      // if(fuelLevelCheck()===true || cargoLevelCheck()===true){
         launchStatus.innerHTML = `Shuttle not ready for launch`
         launchStatus.style.color = "red"
      // }
   }
   
   function readyStatus(){
      // if(fuelLevelCheck() ===false || cargoLevelCheck()===false){
         launchStatus.innerHTML = `Shuttle ready for launch`
         launchStatus.style.color = "green";
      // }
   }
   
   
   function fuelLevelCheck(){
      let fuel =fuelLevelInput.value;
      if (fuel < 10000){
         fuelLevelStatusInput.innerHTML = `Fuel level too low for launch`;
         notReadyStatus();
   }else{
      readyStatus();
      fuelLevelStatusInput.innerHTML = `Fuel level high enough for launch`;
   }
}

   
   function cargoLevelCheck(){
      let cargo = cargoMassInput.value;
      if (cargo > 10000){
         cargoMassStatusInput.innerHTML = `Cargo mass is too heavy for launch`;
         notReadyStatus();
   }else{
      // readyStatus();
      cargoMassStatusInput.innerHTML = `Cargo mass low enough for launch`;
   }
}
   
   function updateDefaultItems(){
      pilotStatusInput.innerHTML =`Pilot ${pilotNameInput.value} ready`;
      copilotStatusInput.innerHTML = `Co-pilot ${copilotNameInput.value} ready`;
      fuelLevelCheck(); 
      cargoLevelCheck();
      items.style.visibility = "visible";
   }
   
   //submit event handler
   form.addEventListener("submit", function(event){
      if(isValid(event)){
         updateDefaultItems();
         event.preventDefault();
      }else{
         items.style.visibility = "hidden";
         event.preventDefault();
      }
   });
}

 


// window.onload = init;
window.addEventListener("load", init);