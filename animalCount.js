
function animalCount(miles){
    let animalDensityFirst10Miles=10;
    let animalDensitySecond10Miles=50;
    let animalDensityRestMiles=100;
    if(miles<=10){
        let count=miles*10;
        return count;
    }
    else if(miles<=20){
        let firstDenseAnimals=10*animalDensityFirst10Miles;
        let restMiles=miles-10;
        let secondDenseAnimals=restMiles*animalDensitySecond10Miles;
        let totalAnimals=firstDenseAnimals+secondDenseAnimals;
        return totalAnimals;
    }
    else{
        let firstDenseAnimals=10*animalDensityFirst10Miles;
        let secondDenseAnimals=10*animalDensitySecond10Miles;
        let restMiles=miles-20;
        let restDenseAnimals=restMiles*animalDensityRestMiles;
        let totalAnimals=firstDenseAnimals+secondDenseAnimals+restDenseAnimals;
        return totalAnimals;
    }
    
}
let animals=animalCount(25);
console.log(animals);