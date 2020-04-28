class Rocket{
  id:string;
  numberOfPropellers:number;
  propellerPower:Propeller[] = new Array();

  constructor(id:string,numberOfPropellers:number){
    this.id=id;
    this.numberOfPropellers=numberOfPropellers;
  }

    addPropeller(propellerPower:Propeller):void{
      this.propellerPower.push(propellerPower);
  }
};
