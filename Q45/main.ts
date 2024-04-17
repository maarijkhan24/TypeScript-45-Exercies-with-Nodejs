// Before a function to create a car object with optional options..
function create_car(manufacturer, model,...options){
    // Initializr a car object with manufacturer and model
    let car = {
        manufacturer: manufacturer,
        model: model
    };

    // Add additional options to the car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });

    return car;
}

// Call the function to create a car object
let my_car = create_car("Toyota", "Corrolla", "color: Black", "Sunroof: True");

// Print the variable 
console.log(my_car);