// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){

  document.getElementById("takeoff").addEventListener("click",function(){
let check=confirm("Confirm that the shuttle is ready for takeoff.");
    if (check) {
            flightStatus.innerText = "Shuttle in flight";
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerText = 10000;
    }

  });

  document.getElementById("landing").addEventListener("click",function(){
      alert("The shuttle is landing. Landing gear engaged.");
      flightStatus.innerHTML = "The shuttle has landed.";
      shuttleBackground.style.backgroundColor = "green";
      spaceShuttleHeight.innerText = 0;
  });

  document.getElementById("missionAbort").addEventListener("click",function(){
    let check1=confirm("Confirm that you want to abort the mission.");
    if (check1) {
        flightStatus.innerHTML = "Mission aborted!";
        shuttleBackground.style.backgroundColor = "green";
        spaceShuttleHeight.innerText = 0;
    }
});


document.getElementById("up").addEventListener("click",function(){
  document.getElementById("rocket").style.top = 10 + "px";
spaceShuttleHeight.innerText = Number(spaceShuttleHeight.innerText)+10000;
});

document.getElementById("down").addEventListener("click",function(){
  document.getElementById("rocket").style.bottom = 10 + "px";
   spaceShuttleHeight.innerText = Number(spaceShuttleHeight.innerText)-10000;
});

document.getElementById("left").addEventListener("click",function(){
  document.getElementById("rocket").style.left = 10 + "px";
    
});
document.getElementById("right").addEventListener("click",function(){
  document.getElementById("rocket").style.right = 100 + "px";
    
});

});