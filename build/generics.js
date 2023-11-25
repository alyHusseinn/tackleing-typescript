class Queue {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.shift();
    }
    size() {
        return this.items.length;
    }
}
let stringQueue = new Queue();
stringQueue.push("ali");
stringQueue.push("ahmed");
stringQueue.push("sayed");
let numberQueue = new Queue();
numberQueue.push(1);
numberQueue.push(2);
numberQueue.push(3);
