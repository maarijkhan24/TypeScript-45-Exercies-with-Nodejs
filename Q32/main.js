// Array of current users
var current_users = ["Usman", "ali", "Areeba", "Zain", "Osama"];
// Array of New Users
var new_users = ["Hamza", "Ayesha", "Ali", "Maham"];
// Loop through New_users to check for username avaibility
new_users.forEach(function (new_one_user) {
    // Making a condition for username already exits and save in our condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print different message using if-else statments
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This user name ".concat(new_one_user, " is avaible"));
    }
});
