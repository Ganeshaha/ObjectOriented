class Vehicle{

    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk(){
        return 'beep';
    }
    toString(){
        return`The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }

}

class Car extends Vehicle{
    

    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle{
    

    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine(){
        return "VROOM!!!";
    }
}

class Garage{
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(obj){
        if(!(obj instanceof Vehicle)){
            return "only vehicles allowed in here";
        }
        if(this.vehicles.length>=this.capacity){
            return "garage full";
        }
        this.vehicles.push(obj);
        return "vehicle added!";
    }
    

}

