interface Car {
    name: string,
    date: number,
    model: string | number
}

let newCar: Car = {
    name: 'sldfj',
    date: 22,
    model: "bababa"
}

let carModel: string | number = newCar.model;
let anotherCarModel: Car["model"] = newCar.model;

type model = Car["model"];
let anotherWay: model = newCar.model;


let carName: string | model = newCar.name || newCar.model;
let newCarModel: Car["model"] | Car["name"] = newCar.model || newCar.name;
