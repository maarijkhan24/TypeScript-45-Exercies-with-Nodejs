// Define a function with a rest parameter that accept items arugments representing our sandwish
function makeSAndwich(...items: string[]){
    console.log("Making a dandwich with the following items: \n");
 items.forEach(singleItem => console.log (singleItem));

 console.log("\nNow Enjoy Sandwich");
}

// Call the function 3 times with 3 different number of arguments
makeSAndwich("Chicken", "Cheese", "Moyo", "Egg");

makeSAndwich("Bread" , "Butter");

makeSAndwich("Egg", "Mayo", "Chicken", "Tomato");