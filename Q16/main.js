// creating a guest list Array
var guestList = ["Hamza", "Usman", "Saif", "Wasay"];
// Making variable for those guest who cant come
var dontCome = guestList[0];
// print the name of guest who cant come
console.log(dontCome, "Nahi aya sakta han");
// Add or remove values from guest list Array
guestList.splice(0, 1, "Amir");
// Message print for bigger table
console.log("Good News ! We have foiund a bigger table for dinner");
// Adding a new guest at starting index of Array
guestList.unshift("Ali");
// Adding a new guest at ending index of Array
guestList.push("Zain");
// Get a middle index of our guest list Array
var middleIndex = Math.floor(guestList.length / 2);
// Adding a new guest to middle index of Array
guestList.splice(middleIndex, 0, "osama");
// Print message update list
console.log("Updated List of our Guest");
// Sending a invitation message to our guest one by one with their names
guestList.forEach(function (oneguest) { return console.log("salam ".concat(oneguest, ", would you like to dinner with me")); });
