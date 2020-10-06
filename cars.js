class Vehicle {

    //Note:
    //class that takes three arguments 

    constructor(make, model, year){

       //assigns the arguments locally with using 'this' keyword
        this.make = make; //assign and equal to the local variable using 'this' keyword
        this.model = model;
        this.year = year;
    }

    //Method Information that does a console.log
    Information(){

        console.log(`Make: ${this.make}.`); //console.log - outputs the make of the vehicle
        console.log(`Model: ${this.model}.`); //outputs the model of the vehicle
        console.log(`Year: ${this.year}.`); //outputs the year of the vehicle
    }
}
    //Note:
    //Car class that takes four arguments 

//inherit from the Vehicle class
//class is going to be a parent class
class Cars extends Vehicle { 

    constructor(make, model, year, doors){
        //passing the arguments
        super(make, model, year); //invoke the parent class by calling the 'super' keyword
        this.doors = doors; //local instance of doors
    }

    Information(){
        super.Information(); //invoke the parent Information
        console.log(`Doors: ${this.doors}`); //this method is to log number of doors
    }
}

//instance of the vehicle class that passes the three arguments 
let myCar = new Cars('VW', 'Passat', 2020, 5); 
myCar.Information();

//let myVehicle = new Vehicle('VW', 'Golf', 2000);
//myVehicle.Information(); //invoke 