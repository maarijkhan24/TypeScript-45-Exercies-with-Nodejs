// Creating a variable
let age = 22;

// Crearting a program for determining the stage of life using IF-Else chain 
if (age < 2){
    console.log("You are the Baby.");
}
else  if (age >= 2 && age < 4){
    console.log("You are a Toddler.");
}
else if (age >= 4 && age < 13){
    console.log("you are a kid.");
}
else if (age >= 13 && age < 18){
    console.log("You are a Teenagers");
}
else if (age >= 20 && age < 65){
    console.log("You are an Adults.");
}
else if(age >= 65){
    console.log("You are Elders.");
}