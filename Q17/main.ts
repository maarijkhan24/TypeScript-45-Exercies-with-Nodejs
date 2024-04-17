// creating a guest list Array
let guestList = ["Hamza", "Usman","Saif","Wasay"];

// Making variable for those guest who cant come
let dontCome = guestList [0];

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
let middleIndex: number = Math.floor(guestList.length / 2);

// Adding a new guest to middle index of Array
guestList.splice(middleIndex, 0, "osama")

// Print message update list
console.log("Updated List of our Guest");

// Sending a invitation message to our guest one by one with their names
guestList.forEach(oneguest => console.log(`salam ${oneguest}, would you like to dinner with me`));

// Inform that only two guest can be invited for dinner
console.log("Unfortunately, the new dinner table wont arrive on time, so i can invite only two guest to dinner with me");

// Using while-loop to remove guests from the array until only two names remain
while(guestList.length > 2){
    let removedGuest = guestList.pop();
    console.log(`Sorry, ${removedGuest} I cant invite you to dinner`)
}

// Printing a invitations to the last two guest on the list
console.log("Invitations to the last 2 guests");
guestList.forEach(lasttwo => console.log(`Luckly ${lasttwo},you are still invited to dinner`));

// Removing last two guest from the list
guestList.pop();
guestList.pop();

console.log("Empty List" , guestList);