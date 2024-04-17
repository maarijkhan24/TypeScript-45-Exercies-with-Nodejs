let userNames = ["Fizza", "Qirat", "Admin", "Mahnoor"];

if (userNames.length === 0){
    console.log("your Array in Empty We need to find some users!")
}else{
    userNames.forEach(OneUser => {
        if(OneUser === "Admin"){
            console.log(`Hello ${OneUser}, would you like to see a status report`)
        }else{
            console.log(`Hello ${OneUser}, thank you for logging in again.`)
        }
    })
}