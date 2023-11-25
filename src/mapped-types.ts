type User = {
    readonly id: number,
    name: string,
    age: number,
    email: string,
    friends: string[],
}

// pick let us chosse some types that previously defined
// and pick what we want from them and make a new type
type newUserData = Pick<User, "name" | "id" | "age">;

// make a new type of user that readonly
type ConstUser = Readonly<User>;

// partial allow us to get a new virigen of that type
// where all of its properties are optional
type PartialUser = Partial<User>;

