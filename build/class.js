let dog = {
    name: 'Dog',
    getName() {
        return this.name;
    }
};
class Human {
    constructor(name, age, hairCut) {
        this.name = name;
        this.age = age;
        this.hairCut = hairCut;
    }
    getName() {
        return 'Hello, my name is ' + this.name;
    }
}
let person = new Human('aly', 20, 'black');
console.log(person.getName());
