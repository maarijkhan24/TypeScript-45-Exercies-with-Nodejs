// Define the function to show magicians names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name))
}

function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

// Define an array of magicians names
let magician_names = ["Harry Poter", "Maarij", "Saif"];

// Making a copy of orignal array through silce() function
let copy_magician_names = magician_names.slice()

// Modify the copied arry to include "The Great" with their names
let copy_great_magicians = make_great(copy_magician_names);

// Show both arrays Original and copied

//Original
console.log("Orginal Array\n")
show_magicians(magician_names);

//Copied
console.log("\nCopied Array\n")
show_magicians(magician_names);