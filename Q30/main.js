// Creating a Array
var userNames = ["Ali", "Zeeshan", "Admin", "Usman"];
// Using ForEach Loop on Array
userNames.forEach(function (OneUser) {
    if (OneUser === "Admin") {
        console.log("Hello ".concat(OneUser, ", would you like to see a status report"));
    }
    else {
        console.log("Hello ".concat(OneUser, ", thank you for logging in again."));
    }
});
