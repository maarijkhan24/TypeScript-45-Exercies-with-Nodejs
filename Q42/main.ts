// Define the function to show magicians names
function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name))
}

function make_great(magicians: string[]){
    return magicians.map(name => `The Great ${name}`);
}

// Define an array of magicians names
let magicians_names = ["Harry Poter", "Maarij", "Saif"];

let great_magicians = make_great(magicians_names)

show_magicians(great_magicians);