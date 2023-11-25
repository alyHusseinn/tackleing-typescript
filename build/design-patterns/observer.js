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
        //..
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
