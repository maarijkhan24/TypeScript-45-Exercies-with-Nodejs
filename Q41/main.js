// Define a Function to print each magician name from an array
function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
// Define an arraybcontaining magicians name
var magician_names = ["Harry Poter", "Maarij", "Usman"];
// Call the function to print each magician name
show_magicians(magician_names);
