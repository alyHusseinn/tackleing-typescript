interface PaymentMethod{
    processPayment(): void;
}

class PaypalPaymentMethod implements PaymentMethod{
    processPayment(): void {
        console.log("PaypalPaymentMethod");
    }
}

class CreditorPaymentMethod implements PaymentMethod{
    processPayment(): void {
        console.log("CreditorPaymentMethod");
    }
}

class GooglePaymentMethod implements PaymentMethod{
    processPayment(): void {
        console.log("GooglePaymentMethod");
    }
}

class Checkout{
    checkout(selectedPayment: "credit-card" | "paypal" | "google"): void{
        const paymentMethod = selectedPayment === "credit-card" 
        ? new CreditorPaymentMethod() 
        : selectedPayment === "paypal" 
            ? new PaypalPaymentMethod()
            : new GooglePaymentMethod();
        paymentMethod.processPayment();
    }
}

let chechOut = new Checkout();
chechOut.checkout("credit-card");
chechOut.checkout("paypal");
chechOut.checkout("google");

// interface Strategy{
//     doAlgorithm(data: string[]): string[];
// }

// class Context{
//     private strategy: Strategy;
//     constructor(strategy: Strategy){
//         this.strategy = strategy;
//     }

//     public addStrategy(strategy: Strategy): void{
//         this.strategy = strategy;
//     }

//     public doSomething(values: string[]): string[]{
//         return this.strategy.doAlgorithm(values);
//     }
// }

// class SortingStrategy implements Strategy{
//     doAlgorithm(data: string[]): string[] {
//         return data.sort();
//     }
// }

// class ReversingStrategy implements Strategy{
//     doAlgorithm(data: string[]): string[] {
//         return data.reverse();
//     }
// }

// let sortStr = new SortingStrategy();
// let context = new Context(sortStr);
// context.doSomething(['a', 'b', 'c', 'd', 'e', 'f']);