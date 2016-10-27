

//Vehicle constructor, this will become the prototype for th parent class of all //Vehicles
var Vehicle = function(brand, topSpeed, units, price) {
    this.brand = brand;
    this.topSpeed = topSpeed;
    this.units = units;
    this.price = price;
};

// encapsulates a method to display any Vehicle
Vehicle.prototype.displayVehicle = function() {
    document.write("<input type='text' size='100' value=\'" + this.brand +
        ": top speed = " + this.topSpeed + " " + this.units +
        ", costs $" + this.price.toFixed(2)  + "\'><br><br>");
    this.launchVehicle();
};

// encapsulates a method to launch the Vehicle
Vehicle.prototype.launchVehicle = function () {
    document.write("<textarea rows = '6' cols='50' id=\'" + this.brand + "\'>" + "Text area" + "</textarea><br><br>");
    document.getElementById(this.brand).innerHTML = "Cannot launch a " + this.brand;
};

// define a constructor for a subclass of Vehicle
function Car(brand, topSpeed, units, price, nbrWheels) {
    // call the parent constructor
    // this will set the inherited properties for the subclass
    Vehicle.call(this, brand, topSpeed, units, price);
    // set the subclass specific properties
    this.nbrWheels = nbrWheels;
}

// create the subclass prototype that inherits from
// the parent prototype by cloning it
Car.prototype = Object.create(Vehicle.prototype);

// set the constructor property of the new prototype to point to
// the subclass constructor
Car.prototype.constructor = Car;

// override the parent displayVehicle method for a Car
Car.prototype.displayVehicle = function() {
    document.write("<input type='text' size='100' value=\'" + this.brand +
        ": top speed = " + this.topSpeed + " " + this.units +
        ", costs $" + this.price.toFixed(2)  + " and has " +
        this.nbrWheels + " wheels"  + "\'><br><br>");
    this.launchVehicle();
};

// override the parent launchVehicle method for a Car
Car.prototype.launchVehicle = function() {
    document.write("<textarea rows = '6' cols='50' id=\'" + this.brand + "\'>" +
        "Text area" + "</textarea><br><br>");
    var output = "";
    for (var gear = 1; gear <= 5; gear++) {
        output += "Gear " + gear + " engaged\n";
    }
    output += "Engage cruise control";
    document.getElementById(this.brand).innerHTML = output;
};

//define a constructor for a subclass of Vehicle
function Sailboat(brand, topSpeed, units, price, nbrMasts) {
    // call the parent constructor
    // this will set the inherited properties for the subclass
    Vehicle.call(this, brand, topSpeed, units, price);
    // set the subclass specific properties
    this.nbrMasts = nbrMasts;
}

// create the subclass prototype that inherits from
// the parent prototype by cloning it
Sailboat.prototype = Object.create(Vehicle.prototype);

// set the constructor property of the new prototype to point to
// the subclass constructor
Sailboat.prototype.constructor = Sailboat;

// override the parent displayVehicle method for a Car
Sailboat.prototype.displayVehicle = function() {
    document.write("<input type='text' size='100' value=\'" + this.brand +
        ": top speed = " + this.topSpeed + " " + this.units +
        ", costs $" + this.price.toFixed(2)  + " and has " +
        this.nbrMasts + " mast(s)"  + "\'><br><br>");
    this.launchVehicle();
};

// override the parent launchVehicle method for a Car
Sailboat.prototype.launchVehicle = function() {
    document.write("<textarea rows = '6' cols='50' id=\'" + this.brand + "\'>" +
        "Text area" + "</textarea><br><br>");
    var output = "";
    output += "Raising mainsail\n";
    output += "Raising headsail\n";
    output += "Anchors aweigh!";
    document.getElementById(this.brand).innerHTML = output;
};

//define a constructor for a subclass of Vehicle
function Rocket(brand, topSpeed, units, price, nbrStages) {
    // call the parent constructor
    // this will set the inherited properties for the subclass
    Vehicle.call(this, brand, topSpeed, units, price);
    // set the subclass specific properties
    this.nbrStages = nbrStages;
}

// create the subclass prototype that inherits from
// the parent prototype by cloning it
Rocket.prototype = Object.create(Vehicle.prototype);

// set the constructor property of the new prototype to point to
// the subclass constructor
Rocket.prototype.constructor = Rocket;

// override the parent displayVehicle method for a Rocket
Rocket.prototype.displayVehicle = function() {
    document.write("<input type='text' size='100' value=\'" + this.brand +
        ": top speed = " + this.topSpeed + " " + this.units +
        ", costs $" + this.price.toFixed(2)  + " and has " +
        this.nbrStages + " stage(s)"  + "\'><br><br>");
    this.launchVehicle();
};

// override the parent launchVehicle method for a Rocket
Rocket.prototype.launchVehicle = function() {
    document.write("<textarea rows = '6' cols='50' id=\'" + this.brand + "\'>" +
        "Text area" + "</textarea><br><br>");
    var output = "";
    for (var stage = 1; stage <= this.nbrStages; stage++) {
        output += "Stage " + stage + " burn\n";
    }
    output += "Escape velocity reached!";
    document.getElementById(this.brand).innerHTML = output;
};

function Truck(brand, topSpeed, units, price, nbrDoors){
    // call parent constructor
    // this sets the inherited properties for the sub class
    Vehicle.call(this, brand, topSpeed, units, price);
    //set the specific subclass property
    this.nbrDoors = nbrDoors;
}
// set the constructor property of the new prototype to point to the subclass constructor
Truck.prototype.constructor = Truck;
// override the display vehicle method
Truck.prototype.displayVehicle = function(){
    document.write("<input type ='text' size='100' value=\'" + this.brand + ": top speed = "
        + this.topSpeed + " " + this.units + ", cost $" + this.price.toFixed(2) + " and has "
        + this.nbrDoors  +" Doors" +"\'><br><br>");
    this.launchVehicle();
};
Truck.prototype.launchVehicle = function(){
    document.write("<textarea rows = '6' cols='50' id=\'" + this.brand + "\'>" + "Text area" + "</textarea><br><br>");
    document.getElementById(this.brand).innerHTML = " This truck is a " + this.brand;
};

function main() {
    // instantiate a generic Vehicle
    var vehicle1 = new Vehicle("Generic Vehicle", 0, "kps", 0.00);
    vehicle1.displayVehicle();

    // instantiate a Car
    var car1 = new Car("Porsche Carrera", 195, "mph", 84000.00, 4);
    car1.displayVehicle();

    // instantiate a Sailboat
    var sailboat1 = new Sailboat("Hinckley SW52", 35, "knots", 498000.00, 1);
    sailboat1.displayVehicle();

    // instantiate a Rocket
    var rocket1 = new Rocket("Saturn V", 25053, "mph", 185000000.00, 3);
    rocket1.displayVehicle();


    var truck1 = new Truck("Toyota", "idk", "mph", 24000.00, 4);
    truck1.displayVehicle();
};