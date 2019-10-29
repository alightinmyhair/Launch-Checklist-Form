function init(){
   let pilotNameInput =document.getElementById("pilotName");
   let button =document.getElementById("formSubmit");
   let copilotNameInput =document.querySelector('input[name="copilotName"]');
   let fuelLevelInput =document.querySelector('input[name="fuelLevel"]');
   let cargoMassInput =document.querySelector('input[name="cargoMass"]');
   let form= document.querySelector("form");
   
   console.log("yo yo");
   
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
   form.addEventListener("submit", function(event){
      isValid(event);
   });
}






//       function updatingLaunchInfo(){
//          let pilotStatusInput =document.getElementById("pilotStatus");
//          let copilotStatusInput=document.getElementById("copilotStatus");
//          let fuelLevelStatusInput=document.getElementById("fuelStatus");
//          let cargoMassStatusInput=document.getElementById("cargoStatus");

//          pilotStatusInput.innerHTML =`Pilot ${pilotNameInput.value} ready`;
//          console.log(pilotStatusInput.innerHTML =`Pilot ${pilotNameInput.value} ready`);
//          console.log(copilotStatusInput.innerHTML=`CoPilot ${copilotNameInput.value} ready`);
         
//       }
//    }
//       button.addEventListener("click", updatingLaunchInfo);

// }



// window.addEventListener("load", init);

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
window.onload = init;