let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

// need to check with if statement when want to assign string type to unknown
if (typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message: string, code: number): never {
    throw { message: message, errorCode: code };
    // throw does not return undefined
    // it NEVER returns anything
}

generateError('An error occurred', 500);

