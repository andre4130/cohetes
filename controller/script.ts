var rocket:any[] = [];
var id:string;
var numberOfPropellers: number;
var propellerPower:number[];
var rocketCounter:number;
var counter:number;
var currentPower1:number[]=[0,0,0,0,0,0];
var currentPower2:number[]=[0,0,0,0,0,0];
var currentSpeed1:number = 0;
var currentSpeed2:number = 0;
var currentPower:any[]=new Array ([],[]);
currentPower[0] = new Array(0, 0, 0, 0, 0, 0);
currentPower[1] = new Array(0, 0, 0, 0, 0, 0);
var currentSpeed:any[]=new Array([],[]);
currentSpeed[0] = new Array (0,0,0,0,0,0);
currentSpeed[1] = new Array (0,0,0,0,0,0);

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
      console.log(propellerPower)
      console.log(numberOfPropellers)
      if(propellerPower === [] || id === "" || numberOfPropellers === NaN){
        window.alert("Please Set Up Your Rocket Correctly");
        t=t-1;
      }else if (propellerPower == [NaN]) {
        window.alert("Please Add Power to your Propellers");
        t=t-1;
      }
      else {
        var rocketTemp:any[] = new Rocket (id, numberOfPropellers);
        for (let i = 0; i < numberOfPropellers; i++) {
                rocketTemp.addPropeller((new Propeller(propellerPower[i])))
            }
        rocket[t]=rocketTemp;
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
  };

  // Start Race Function
  function startRace(){
    let a:number = counter-1;
    let b:number = counter;
    let powerArray1: number[] = new Array;
    let powerArray2:number[]= new Array;

    document.getElementById("body").removeAttribute("body1");
    document.getElementById("body").setAttribute("class","body2");

    document.querySelector(".rocketCreate").style.display = "none";
    document.querySelector(".rocketCreateRace").style.display = "flex";
    document.querySelector(".jumbo1").style.opacity = "0";
    document.querySelector(".jumbo2").style.opacity = "0";
    document.querySelector(".jumbo3").style.opacity = "0.95";
    //information rocket 1
    document.getElementById("idRocket1").innerHTML="ID:"+rocket[a]["id"];
    let number1:number = rocket[a]["numberOfPropellers"];
    document.getElementById("propellerNumber1").innerHTML=number1+" Propellers";
    for (let i = 0; i < number1; i++) {
        powerArray1.push(rocket[a].propellerPower[i].propellerPower);
    }
    document.getElementById("propellerPower1").innerHTML="Power: "+powerArray1;

    //information rocket 2
    document.getElementById("idRocket2").innerHTML="ID:"+rocket[b]["id"];
    let number2:number = rocket[b]["numberOfPropellers"];
    document.getElementById("propellerNumber2").innerHTML=number2+" Propellers";
    for (let j = 0; j < number2; j++) {
        powerArray2.push(rocket[b].propellerPower[j].propellerPower);
    }
    document.getElementById("propellerPower2").innerHTML="Power: "+powerArray2;
  }

function speed(s:number, v:number){
  const speedfunction = (total:number, num:number) => total + num;
  let a:number;
  let n:number;
  let b:number;
if (v==1) {
a = counter-1;
n = rocket[a]["numberOfPropellers"];
b = 0;
} else if (v==2) {
  a = counter;
  n = rocket[a]["numberOfPropellers"];
  b = 1;
}
  if(s==1){ //function accelerate
    for (let i = 0; i < n; i++) {
      if (currentSpeed[b][i]<rocket[a].propellerPower[i].propellerPower) {
        currentSpeed[b][i] = currentSpeed[b][i]+10;
      }else{
        currentSpeed[b][i]=currentSpeed[b][i];
      }
    }
    currentPower[a]=currentSpeed[b];
    var maxSpeed1:number = (currentPower[a]).reduce(speedfunction);
    document.getElementById("speed"+v).innerHTML=maxSpeed1+".000 km/h";

  } else if (s==2) { // function break
    for (let i = 0; i < n; i++) {
      if (currentSpeed[b][i]>=10) {
        currentSpeed[b][i] = currentSpeed[b][i]-10;
      }else{
        currentSpeed[b][i]=currentSpeed[b][i];
      }
    }
  currentPower[a]=currentSpeed[b];
    var maxSpeed1:number = (currentPower[a]).reduce(speedfunction);
    document.getElementById("speed"+v).innerHTML=maxSpeed1+".000 km/h";
}};

function winner (currentSpeed1:number, currentSpeed2:number){
    const speedfunction = (total:number, num:number) => total + num;
    let a:number = counter-1;
    let b:number = counter;
    currentSpeed1 =  (currentPower[a]).reduce(speedfunction);
    currentSpeed2 =  (currentPower[b]).reduce(speedfunction);
    console.log(currentSpeed1);
    console.log(currentSpeed2);
  if (currentSpeed1>currentSpeed2){
    console.log("winner is 1");
    document.getElementById("winner1").innerHTML= "Rocket "+rocket[counter-1]["id"]+" is ahead!";
  } else if (currentSpeed1<currentSpeed2){
    console.log("winner is 2");
    document.getElementById("winner1").innerHTML= "Rocket "+rocket[counter]["id"]+" is ahead!";
  } else if (currentSpeed1==currentSpeed2){
    console.log("It's a Draw");
    document.getElementById("winner1").innerHTML= "We have a draw!";
  }
};
