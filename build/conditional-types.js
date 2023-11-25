function compine(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return (a + b);
    }
    else {
        return a + b;
    }
}
let val = compine(2, 'Hello'); // we think of it as a string
reverseStr(val); // tsc compilain because val is string | number
function reverseStr(string) {
    //...
    return "done";
}
