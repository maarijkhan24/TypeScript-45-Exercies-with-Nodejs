"use strict";
// Making a Function
function make_shirt(size = "Large", printMessage = "I Love Typescript") {
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`);
}
// Calling a function with by defualt values
make_shirt();
// Calling a  function now with medium size and default message
make_shirt("Medium");
// Calling a  function now with Small size and also default message
make_shirt("Small", "I Love Javascript");
