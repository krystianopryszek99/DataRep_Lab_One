class BMI {

    //Note: 
    //Class to calculate the BMI

    constructor(height, weight){  //constructor that takes two arguments - height and weight
        
        //assigns the arguments locally with using 'this' keyword
        this.height = height; 
        this.weight = weight; 
    }

    //added method calculateBMI()
    calculateBMI(){ //invoked method

        let bmi = this.weight/(this.height**2); //return the bmi using the formula
        return bmi; //it's gonna get the two arguments, height and weight and return it 
    }
}

let myBMI = new BMI(2, 90); //instance of the class myBMI
console.log("BMI Calculated:", myBMI.calculateBMI()); //to get the bmi output to screen