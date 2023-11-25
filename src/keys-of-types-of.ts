let human = {
    name: 'John',
    age: 21,
}

// allow us to mimic the object's properties
type person1 = typeof human;

// get the key
type person3 = keyof person1; 

function getPropertiyFromPerson(per: person1, key: person3){
    return per[key];
}