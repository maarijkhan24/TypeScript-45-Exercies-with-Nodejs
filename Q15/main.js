var guestList = ["Hamza", "Saif", "wasay", "usman"];
var dontCome = guestList[0];
console.log(dontCome, "Nahi Aa Sakta");
guestList.splice(0, 1, "Amir");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", Would You Like to Dinner with me?")); });
