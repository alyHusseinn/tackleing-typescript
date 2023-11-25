interface Command {
    execute(counter: Couter): void ;
    undo(): void ;
}

class Couter {
    private value: number = 0;

    constructor(value: number) {
        this.value = value;
    }

    public setValue(value: number): void {
        this.value = value;
    }
    public getValue(): number {
        return this.value;
    }
}

class IncrementCommand implements Command {
    private counter: Couter = new Couter(0);

    constructor(counter: Couter){
        this.counter = counter;
    }

    execute(): void {
        this.counter.setValue(this.counter.getValue() + 1);
    }
    undo(): void {
        this.counter.setValue(this.counter.getValue() - 1);
    }
}

class DecrementCommand implements Command {
    private counter: Couter = new Couter(0);

    constructor(counter: Couter){
        this.counter = counter;
    }

    execute(): void {
        counter.setValue(counter.getValue() - 1);
    }
    undo(): void {
        this.counter.setValue(this.counter.getValue() + 1);
    }
}


let counter = new Couter(0);

let incrementCommand = new IncrementCommand(counter);
let decremtnCommand = new DecrementCommand(counter);

incrementCommand.execute();
incrementCommand.execute();
incrementCommand.execute();
incrementCommand.undo();

decremtnCommand.execute();
decremtnCommand.execute();
decremtnCommand.execute();
decremtnCommand.undo();


