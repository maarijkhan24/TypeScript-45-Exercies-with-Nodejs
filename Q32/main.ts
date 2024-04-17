// Array of current users
let current_users = ["Usman","ali","Areeba","Zain","Osama"];

// Array of New Users
let new_users = ["Hamza","Ayesha","Ali","Maham"];

// Loop through New_users to check for username avaibility
new_users.forEach(new_one_user => {

    // Making a condition for username already exits and save in our condition variable
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())

    // Print different message using if-else statments
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`This user name ${new_one_user} is avaible`)
    }
})