// interface describes the structure of objects and functions

// type AddFn = (a: number, b: number) => number;

interface AddFn {
    (a: number, b: number): number
}

let addTwo: AddFn;

addTwo = (n1: number, n2: number) => n1 + n2;

interface Named {
    readonly name?: string;
    outputName?: string;
}

interface Greetable extends Named {
    greet(phrase: string): void;
}

class Person implements Greetable { 
    name?: string;
    age = 30;
    outputName = this.name;
    constructor(n?: string) {
        if (n) {
            this.name = n;
        }
    }

    greet(phrase: string) {
        if (this.name) {
            console.log(`${this.name} says ${phrase}!`);
        } else {
            console.log(phrase)
        }
    }
}

let user1: Greetable;
user1 = new Person ('Adam');
user1.greet('yo');

let user2 = new Person ();
user2.greet('hi');


