interface NameObject {
    name: string;
    getName(): string;
}

let dog: NameObject = {
    name: 'Dog',
    getName() {
        return this.name;
    }
}

class Human{
    private name: string;
    private age: number;
    private hairCut: string;

    constructor(name: string, age: number, hairCut: string){
        this.name = name;
        this.age = age;
        this.hairCut = hairCut;
    }

    public getName():string{
        return 'Hello, my name is ' + this.name;
    }
}

let person = new Human('aly', 20, 'black');
console.log(person.getName());