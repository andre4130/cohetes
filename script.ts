var rocket:any[] = [];
var id:string;
var numberOfPropellers: number;
var propellerPower:number[];
var rocketCounter:number;
var counter:number;

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


  function createRocket(id:string, numberOfPropellers:number, propellerPower:number[], counter:number){

    var button = document.getElementById("buttonSet"), t:number = 0;
    button.onclick = function() {
      t += 1;
      console.log(t)
    };


      var id = (<HTMLInputElement>document.getElementById("rocketId")).value;
      id = id.toUpperCase();
      var numberOfPropellers = parseInt((<HTMLInputElement>document.getElementById("propellerNumber")).value);
      var propellerPower:number[] = new Array;
      for (let i = 0; i < numberOfPropellers; i++) {
        var tempPower = (parseInt((<HTMLInputElement>document.getElementById("power"+(i+1))).value));
        propellerPower.push(tempPower);
      };
    var rocketTemp:any[] = new Rocket (id, numberOfPropellers, propellerPower);
    rocket[t]=rocketTemp;
    console.log(rocket[t]);
    window.alert("Rocket is ready");
  };



function startRace(){
  document.getElementById("body").removeAttribute("body1");
  document.getElementById("body").setAttribute("class","body2");

  document.querySelector(".rocketCreate").style.display = "none";
  document.querySelector(".rocketCreateRace").style.display = "flex";
  document.querySelector(".jumbo1").style.opacity = "0";
  document.querySelector(".jumbo2").style.opacity = "0";
  document.querySelector(".jumbo3").style.opacity = "0.95";



};
