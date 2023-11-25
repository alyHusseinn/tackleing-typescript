class Queue<Type>{
    private items: Type[];

    constructor(){
        this.items = [];
    }

    push(item: Type): void{
        this.items.push(item);
    }

    pop(): Type | undefined{
        return this.items.shift();
    }

    size(): number{
        return this.items.length;
    }
}

let stringQueue = new Queue<string>();
stringQueue.push("ali");
stringQueue.push("ahmed");
stringQueue.push("sayed");

let numberQueue = new Queue<number>();
numberQueue.push(1);
numberQueue.push(2);
numberQueue.push(3);