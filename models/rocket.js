var Rocket = /** @class */ (function () {
    function Rocket(id, numberOfPropellers) {
        this.propellerPower = new Array();
        this.id = id;
        this.numberOfPropellers = numberOfPropellers;
    }
    Rocket.prototype.addPropeller = function (propellerPower) {
        this.propellerPower.push(propellerPower);
    };
    return Rocket;
}());
;
