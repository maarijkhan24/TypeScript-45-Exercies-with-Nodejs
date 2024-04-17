// Define a Function to print each magician name from an array
function show_magicians(magician: string[]){
    magician.forEach(name => console.log(name));
}

// Define an arraybcontaining magicians name
let magician_names = ["Harry Poter","Maarij","Usman"]

// Call the function to print each magician name
show_magicians(magician_names);