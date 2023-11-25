// that is the publisher class
class Subject {
    constructor() {
        // we need list of observers
        // method: notify the observers
        this.observers = [];
        this.message = "";
    }
    addObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        const observerIdx = this.observers.indexOf(observer);
        if (observerIdx == -1) {
            return console.log("Not observer");
        }
        this.observers.splice(observerIdx, 1);
    }
    updateMessage(message) {
        this.message = message;
        this.notifyObservers();
    }
    notifyObservers() {
        this.observers.forEach((ob) => ob.update(this.message));
    }
}
// create class that implements Observer interface
class LogObserver {
    update(message) {
        console.log('LogObserver Updated successfully', message);
    }
}
// create class that implements Observer interface
class EmailObserver {
    update(message) {
        console.log('EmailObserver Updated successfully', message);
    }
}
let subject = new Subject();
let logger = new LogObserver();
let emailLogger = new EmailObserver();
subject.addObserver(logger);
subject.addObserver(emailLogger);
subject.updateMessage("Hello, observer");
