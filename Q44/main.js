// Define a function with a rest parameter that accept items arugments representing our sandwish
function makeSAndwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a dandwich with the following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow Enjoy Sandwich");
}
// Call the function 3 times with 3 different number of arguments
makeSAndwich("Chicken", "Cheese", "Moyo", "Egg");
makeSAndwich("Bread", "Butter");
makeSAndwich("Egg", "Mayo", "Chicken", "Tomato");
