var rocket:any[] = [];
var id:string;
var numberOfPropellers: number;
var propellerPower:number[];
var propeller:number[] = new Array;
var rocketCounter:number;
var counter:number;
var currentPower1:number[]=[0,0,0,0,0,0];
var currentPower2:number[]=[0,0,0,0,0,0];
var currentSpeed1:number = 0;
var currentSpeed2:number = 0;

// Propeller Counter Function
function propellerCounter(numberOfPropellers:number){
  var numberOfPropellers = parseInt((<HTMLInputElement>document.getElementById("propellerNumber")).value);
  for (let i = 0; i < numberOfPropellers; i++) {
    document.getElementById("power"+(i+1)).removeAttribute("disabled");}

    for (let n = numberOfPropellers; n < 7; n++) {
      let temp = <HTMLInputElement>document.getElementById("power"+(n+1));
      temp.disabled = true;
      temp.value ="";
    }
  };

  // Rocket Creation function
  function createRocket(id:string, numberOfPropellers:number, propellerPower:number[]){
    var button = document.getElementById("buttonSet"), t:number = -1;
    button.onclick = function createRocket() {
      t ++;
      var id = (<HTMLInputElement>document.getElementById("rocketId")).value;
      id = id.toUpperCase();

      var numberOfPropellers = parseInt((<HTMLInputElement>document.getElementById("propellerNumber")).value);
      var propellerPower:number[] = new Array;

      //the number of propellers is counted in the function above, that also enables and disables the inputs.
      for (let i = 0; i < numberOfPropellers; i++) {
        var tempPower = (parseInt((<HTMLInputElement>document.getElementById("power"+(i+1))).value));
        propellerPower.push(tempPower);
      };


      if(id === "" || numberOfPropellers === NaN || propellerPower == []){
        window.alert("Please Set Up Your Rocket Correctly");
        t=t-1;
      } else {
        var rocketTemp:any[] = new Rocket (id, numberOfPropellers);
        rocket[t]=rocketTemp;
        for (let i = 0; i < numberOfPropellers; i++) {
                rocket.addPropeller((new Propeller(propellerPower[i])))
            }

        console.log(rocket[t]);
        window.alert("Rocket number "+(t+1)+" is ready");
        document.getElementById("rocketId").value="";
        document.getElementById("propellerNumber").value="";
        for (let i = 0; i < numberOfPropellers; i++) {
          let temp = <HTMLInputElement>document.getElementById("power"+(i+1));
          temp.disabled = true;
          temp.value ="";
        }
        counter=t;

        return rocket[t];
      }
    };


// Add Propeller Function

function addPropellers(propeller:number[]){
  for (let i = 0; i < counter; i++) {
          rocket.addPropeller((new Propeller(propellerPower[i])))
        }
        return rocket;
}

  // Start Race Function

  function startRace(){
    let a:number = counter-1;
    let b:number = counter;

    document.getElementById("body").removeAttribute("body1");
    document.getElementById("body").setAttribute("class","body2");

    document.querySelector(".rocketCreate").style.display = "none";
    document.querySelector(".rocketCreateRace").style.display = "flex";
    document.querySelector(".jumbo1").style.opacity = "0";
    document.querySelector(".jumbo2").style.opacity = "0";
    document.querySelector(".jumbo3").style.opacity = "0.95";

    document.getElementById("idRocket1").innerHTML="ID:"+rocket[a]["id"];
    document.getElementById("propellerNumber1").innerHTML=rocket[a]["numberOfPropellers"]+" Propellers";
    document.getElementById("propellerPower1").innerHTML="Power: "+rocket[a]["propellerPower"];

    document.getElementById("idRocket2").innerHTML="ID:"+rocket[b]["id"];
    document.getElementById("propellerNumber2").innerHTML=rocket[b]["numberOfPropellers"]+" Propellers";
    document.getElementById("propellerPower2").innerHTML="Power: "+rocket[b]["propellerPower"];

  }




  function accelerate1(){
    let a:number = counter-1;
    var speed1:number;
    var n:number = rocket[a]["numberOfPropellers"]; //needed for the if function
    let currentSpeed:number[] = currentPower1;
    console.log(maxSpeed1);
    console.log(n)
    for (let i = 0; i < n; i++) {
      if (currentSpeed[i]<rocket[a]["propellerPower"][i]) {
        currentSpeed[i] = currentSpeed[i]+10;
      }else{
        currentSpeed[i]=currentSpeed[i];
      }
    }
    currentPower1=currentSpeed;
    var maxSpeed1:number = currentPower1.reduce(speedfunction);;
    function speedfunction(total:number, num:number){
      return total + num;
    }
    document.getElementById("speed1").innerHTML=maxSpeed1+".000 km/h";
    console.log(currentPower1);
    currentSpeed1=maxSpeed1;
    return currentPower1;
  };

  function accelerate2(){
    let a:number = counter;
    var speed1:number;
    var n:number = rocket[a]["numberOfPropellers"]; //needed for the if function
    let currentSpeed:number[] = currentPower2;
    console.log(maxSpeed2);
    console.log(n)
    for (let i = 0; i < n; i++) {
      if (currentSpeed[i]<rocket[a]["propellerPower"][i]) {
        currentSpeed[i] = currentSpeed[i]+10;
      }else{
        currentSpeed[i]=currentSpeed[i];
      }
    }
    currentPower2=currentSpeed;
    var maxSpeed2:number = currentPower2.reduce(speedfunction);;
    function speedfunction(total:number, num:number){
      return total + num;
    }
    document.getElementById("speed2").innerHTML=maxSpeed2+".000 km/h";
    console.log(currentPower2);
    currentSpeed2=maxSpeed2;
    return currentPower2;
  };


  function break1(){
    let a:number = counter-1;
    var speed1:number;
    var n:number = rocket[a]["numberOfPropellers"]; //needed for the if function
    let currentSpeed:number[] = currentPower1;
    console.log(maxSpeed1);
    console.log(n)
    for (let i = 0; i < n; i++) {
      if (currentSpeed[i]>=10) {
        currentSpeed[i] = currentSpeed[i]-10;
      }else{
        currentSpeed[i]=currentSpeed[i];
      }
    }
    currentPower1=currentSpeed;
    var maxSpeed1:number = currentPower1.reduce(speedfunction);;
    function speedfunction(total:number, num:number){
      return total + num;
    }
    document.getElementById("speed1").innerHTML=maxSpeed1+".000 km/h";
    console.log(currentPower1);
    currentSpeed1=maxSpeed1;
    return currentPower1;
  };

  function break2(){
    let a:number = counter;
    var speed1:number;
    var n:number = rocket[a]["numberOfPropellers"]; //needed for the if function
    let currentSpeed:number[] = currentPower2;
    console.log(n)
    for (let i = 0; i < n; i++) {
      if (currentSpeed[i]>=10) {
        currentSpeed[i] = currentSpeed[i]-10;
      }else{
        currentSpeed[i]=currentSpeed[i];
      }
    }
    currentPower2=currentSpeed;
    var maxSpeed2:number = currentPower2.reduce(speedfunction);;
    function speedfunction(total:number, num:number){
      return total + num;
    }
    document.getElementById("speed2").innerHTML=maxSpeed2+".000 km/h";
    console.log(currentPower2);
    currentSpeed2=maxSpeed2;
    return currentPower2;
  };

  function winner (currentSpeed1:number, currentSpeed2:number){
    if (currentSpeed1>currentSpeed2){
      console.log("winner is 1");
      document.getElementById("winner1").innerHTML= "Rocket "+rocket[counter-1]["id"]+" is ahead!";
    } else if (currentSpeed1<currentSpeed2){
      document.getElementById("winner1").innerHTML= "Rocket "+rocket[counter]["id"]+" is ahead!";
    } else if (currentSpeed1==currentSpeed2){
      document.getElementById("winner1").innerHTML= "We have a draw!";
    }
  };
