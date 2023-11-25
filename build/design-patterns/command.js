class Couter {
    constructor(value) {
        this.value = 0;
        this.value = value;
    }
    setValue(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
class IncrementCommand {
    constructor(counter) {
        this.counter = new Couter(0);
        this.counter = counter;
    }
    execute() {
        this.counter.setValue(this.counter.getValue() + 1);
    }
    undo() {
        this.counter.setValue(this.counter.getValue() - 1);
    }
}
class DecrementCommand {
    constructor(counter) {
        this.counter = new Couter(0);
        this.counter = counter;
    }
    execute() {
        counter.setValue(counter.getValue() - 1);
    }
    undo() {
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
