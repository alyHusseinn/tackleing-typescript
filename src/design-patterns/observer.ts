interface Observer<T>{
    update(value: T): void;
}

// that is the publisher class
class Subject<T>{
    // we need list of observers
    // method: notify the observers
    private observers: Array<Observer<string>> = [];
    private message: string = "";

    public addObserver(observer: Observer<string>): void{
        this.observers.push(observer);
    }

    public removeObserver(observer: Observer<string>): void{
        const observerIdx = this.observers.indexOf(observer);
        if(observerIdx == -1){
            return console.log("Not observer");
        }
        this.observers.splice(observerIdx, 1);
    }

    public updateMessage(message: string): void{
        this.message = message;
        this.notifyObservers();
    }

    private notifyObservers(){
        this.observers.forEach((ob) => ob.update(this.message));
    }
}

// create class that implements Observer interface
class LogObserver implements Observer<string> {
    update(message: string): void {
        console.log('LogObserver Updated successfully', message);
    }
}

// create class that implements Observer interface
class EmailObserver implements Observer<string> {
    update(message: string): void {
        console.log('EmailObserver Updated successfully', message);
    }
}

let subject = new Subject<string>();
let logger = new LogObserver();
let emailLogger = new EmailObserver();

subject.addObserver(logger);
subject.addObserver(emailLogger);
subject.updateMessage("Hello, observer");
