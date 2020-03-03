function addNumbers(n1: number, n2: number) {
    return n1 + n2;
}

function logResult(num: number): void { // returns undefined so return type is :void
    console.log('Result: ' + num);
}

logResult(addNumbers(4, 12))

let combineValues: (arg: number, arg2: number) => number;
combineValues = addNumbers;

console.log(combineValues(8, 8));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
};

addAndHandle(10, 10, (result) => {
    console.log(result);
});

