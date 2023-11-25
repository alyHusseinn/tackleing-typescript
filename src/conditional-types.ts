function compine<T1 extends number | string, T2 extends number | string>(a: T1, b: T2): CompinationResult<T1, T2> {
    if(typeof a === 'number' && typeof b === 'number') {
        return (a + b) as CompinationResult<T1, T2>;
    }else {
        return (a as string + b as string) as CompinationResult<T1, T2>;
    }
}

type CompinationResult<T1 extends number | string, T2 extends number | string> = 
    T1 extends number ? T2 extends number ? number : string : string;

let val = compine(2,'Hello'); // we think of it as a string
reverseStr(val); // tsc compilain because val is string | number

function reverseStr(string: string): string{
    //...
    return "done";
}

