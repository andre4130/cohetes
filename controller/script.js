var rocket = [];
var id;
var numberOfPropellers;
var propellerPower;
var rocketCounter;
var counter;
var currentPower1 = [0, 0, 0, 0, 0, 0];
var currentPower2 = [0, 0, 0, 0, 0, 0];
var currentSpeed1 = 0;
var currentSpeed2 = 0;
// Propeller Counter Function
function propellerCounter(numberOfPropellers) {
    var numberOfPropellers = parseInt(document.getElementById("propellerNumber").value);
    for (var i = 0; i < numberOfPropellers; i++) {
        document.getElementById("power" + (i + 1)).removeAttribute("disabled");
    }
    for (var n = numberOfPropellers; n < 7; n++) {
        var temp = document.getElementById("power" + (n + 1));
        temp.disabled = true;
        temp.value = "";
    }
}
;
// Rocket Creation function
function createRocket(id, numberOfPropellers, propellerPower) {
    var button = document.getElementById("buttonSet"), t = -1;
    button.onclick = function createRocket() {
        t++;
        var id = document.getElementById("rocketId").value;
        id = id.toUpperCase();
        var numberOfPropellers = parseInt(document.getElementById("propellerNumber").value);
        var propellerPower = new Array;
        //the number of propellers is counted in the function above, that also enables and disables the inputs.
        for (var i = 0; i < numberOfPropellers; i++) {
            var tempPower = (parseInt(document.getElementById("power" + (i + 1)).value));
            propellerPower.push(tempPower);
        }
        ;
        if (id === "" || numberOfPropellers === NaN || propellerPower == null) {
            window.alert("Please Set Up Your Rocket Correctly");
            t = t - 1;
        }
        else {
            var rocketTemp = new Rocket(id, numberOfPropellers);
            for (var i = 0; i < numberOfPropellers; i++) {
                rocketTemp.addPropeller((new Propeller(propellerPower[i])));
            }
            rocket[t] = rocketTemp;
            window.alert("Rocket number " + (t + 1) + " is ready");
            document.getElementById("rocketId").value = "";
            document.getElementById("propellerNumber").value = "";
            for (var i = 0; i < numberOfPropellers; i++) {
                var temp = document.getElementById("power" + (i + 1));
                temp.disabled = true;
                temp.value = "";
            }
            counter = t;
            return rocket[t];
        }
    };
}
;
// Start Race Function
function startRace() {
    var a = counter - 1;
    var b = counter;
    var powerArray1 = new Array;
    var powerArray2 = new Array;
    document.getElementById("body").removeAttribute("body1");
    document.getElementById("body").setAttribute("class", "body2");
    document.querySelector(".rocketCreate").style.display = "none";
    document.querySelector(".rocketCreateRace").style.display = "flex";
    document.querySelector(".jumbo1").style.opacity = "0";
    document.querySelector(".jumbo2").style.opacity = "0";
    document.querySelector(".jumbo3").style.opacity = "0.95";
    //information rocket 1
    document.getElementById("idRocket1").innerHTML = "ID:" + rocket[a]["id"];
    var number1 = rocket[a]["numberOfPropellers"];
    document.getElementById("propellerNumber1").innerHTML = number1 + " Propellers";
    for (var i = 0; i < number1; i++) {
        powerArray1.push(rocket[a].propellerPower[i].propellerPower);
    }
    document.getElementById("propellerPower1").innerHTML = "Power: " + powerArray1;
    //information rocket 2
    document.getElementById("idRocket2").innerHTML = "ID:" + rocket[b]["id"];
    var number2 = rocket[b]["numberOfPropellers"];
    document.getElementById("propellerNumber2").innerHTML = number2 + " Propellers";
    for (var j = 0; j < number2; j++) {
        powerArray2.push(rocket[b].propellerPower[j].propellerPower);
    }
    document.getElementById("propellerPower2").innerHTML = "Power: " + powerArray2;
}
function speed(v) {
    var speedfunction = function (total, num) { return total + num; };
    var a = counter - 1;
    var b = counter;
    var n = rocket[a]["numberOfPropellers"]; //needed for the if function
    var m = rocket[b]["numberOfPropellers"]; //needed for the if function
    if (v == 1) { //function accelerate1
        var currentSpeed = currentPower1;
        for (var i = 0; i < n; i++) {
            if (currentSpeed[i] < rocket[a].propellerPower[i].propellerPower) {
                currentSpeed[i] = currentSpeed[i] + 10;
            }
            else {
                currentSpeed[i] = currentSpeed[i];
            }
        }
        currentPower1 = currentSpeed;
        var maxSpeed1 = currentPower1.reduce(speedfunction);
        document.getElementById("speed1").innerHTML = maxSpeed1 + ".000 km/h";
        console.log(currentPower1);
        currentSpeed1 = maxSpeed1;
        return currentPower1;
    }
    else if (v == 2) { //function accelerate 2
        var currentSpeed = currentPower2;
        for (var i = 0; i < m; i++) {
            if (currentSpeed[i] < rocket[b].propellerPower[i].propellerPower) {
                currentSpeed[i] = currentSpeed[i] + 10;
            }
            else {
                currentSpeed[i] = currentSpeed[i];
            }
        }
        currentPower2 = currentSpeed;
        var maxSpeed2 = currentPower2.reduce(speedfunction);
        ;
        document.getElementById("speed2").innerHTML = maxSpeed2 + ".000 km/h";
        console.log(currentPower2);
        currentSpeed2 = maxSpeed2;
        return currentPower2;
    }
    else if (v == 3) { // function break 1
        var currentSpeed = currentPower1;
        for (var i = 0; i < n; i++) {
            if (currentSpeed[i] >= 10) {
                currentSpeed[i] = currentSpeed[i] - 10;
            }
            else {
                currentSpeed[i] = currentSpeed[i];
                console.log(currentSpeed[i]);
            }
        }
        currentPower1 = currentSpeed;
        var maxSpeed1 = currentPower1.reduce(speedfunction);
        ;
        document.getElementById("speed1").innerHTML = maxSpeed1 + ".000 km/h";
        console.log(currentPower1);
        currentSpeed1 = maxSpeed1;
        return currentPower1;
    }
    else if (v == 4) { // function break 2
        var currentSpeed = currentPower2;
        for (var i = 0; i < m; i++) {
            if (currentSpeed[i] >= 10) {
                currentSpeed[i] = currentSpeed[i] - 10;
            }
            else {
                currentSpeed[i] = currentSpeed[i];
            }
        }
        currentPower2 = currentSpeed;
        var maxSpeed2 = currentPower2.reduce(speedfunction);
        document.getElementById("speed2").innerHTML = maxSpeed2 + ".000 km/h";
        console.log(currentPower2);
        currentSpeed2 = maxSpeed2;
        return currentPower2;
    }
}
;
function winner(currentSpeed1, currentSpeed2) {
    if (currentSpeed1 > currentSpeed2) {
        console.log("winner is 1");
        document.getElementById("winner1").innerHTML = "Rocket " + rocket[counter - 1]["id"] + " is ahead!";
    }
    else if (currentSpeed1 < currentSpeed2) {
        console.log("winner is 2");
        document.getElementById("winner1").innerHTML = "Rocket " + rocket[counter]["id"] + " is ahead!";
    }
    else if (currentSpeed1 == currentSpeed2) {
        console.log("It's a Draw");
        document.getElementById("winner1").innerHTML = "We have a draw!";
    }
}
;
