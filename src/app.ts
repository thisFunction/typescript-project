const button = document.querySelector('button');

function clickHandler(message: string) {
    console.log('clicked!' + message);
}

// this will not be included in Js files
if (button) {
    let user = "Adam";
    button.addEventListener('click', clickHandler.bind(null, "Hello"));
}