// Making a Array of countries and print its orginal order
let countriesToVisit: String[] = ["China" , "Dominica" , "Brazil" , "Australia"];
console.log("Orginal Order:",countriesToVisit);

// Print the Array in Alphabetical Order without modifying the actual Array list
console.log("Alphabetical Order:",[...countriesToVisit].sort());

// Show that the Array is still in its orginal order
console.log("Still in orginal order:", countriesToVisit);

// Print the Array in Reversed order without modifying the actual Array list
console.log("Reverse Order:", [...countriesToVisit].reverse());

// Show that the Array is still in its orginal order
console.log("Still in orginal order:", countriesToVisit);

// We have change the orginal Array Order Now
console.log("Orginal Array Reverse:", countriesToVisit.reverse());

// Print the Array to show back to its orginal order
console.log("Back to Orginal Order:",countriesToVisit.reverse());

// Prit the array to show that its order has been changed in Alphabetical order now
console.log("sorted in Alphabetical Order:", countriesToVisit.sort());

// We have changed again the orginal array order now in reverse order again
console.log("Orginal Array Reverse Again:", countriesToVisit.reverse());