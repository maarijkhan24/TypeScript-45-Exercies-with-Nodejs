let guestList = ["Hamza", "Saif", "wasay","usman"];

let dontCome = guestList [0];

console.log(dontCome, "Nahi Aa Sakta");

guestList.splice( 0, 1, "Amir" );

guestList.forEach(guest => console.log(`Salam ${guest}, Would You Like to Dinner with me?`));