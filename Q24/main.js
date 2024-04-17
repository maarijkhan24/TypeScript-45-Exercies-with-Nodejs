// Define varables
var apple = "apple";
var uppercaseApple = "APPLE";
var ten = 10;
var twenty = 20;
var fruits = ["apple", "banana", "orange"];
// Test for equality and inequality with strings
console.log("Is apple is equal to apple?");
console.log(apple == "apple");
console.log("Is apple is not equal to apple?");
console.log(apple != "apple");
// Tests using lowercase funtion
console.log("\nIS APPLE is equal to  apple after coverting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");
console.log("\nIS APPLE is equal to  apple after coverting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");
// Numerical Test
console.log("\n is ten is equal to twenty?");
console.log(ten == twenty);
// Not equal to
console.log("Is Ten is not equal to twenty?");
console.log(ten != twenty);
// Greator than 
console.log("\nIs ten is greater then zero?");
console.log(ten > 0);
// Less than
console.log("\nIs twenty is less than 10");
console.log(twenty < 10);
// Greator than or equal to
console.log("\nIs ten is greator than or equal to 5?");
console.log(ten >= 5);
// Less than to equal to 
console.log("/n twenty is less then or equal to 10");
console.log(twenty <= 10);
// Tests using "and" & "or" operators
// Using &&
console.log("/n twenty is not equal to 10 and twenty is greator than 10");
console.log(twenty != 10 && twenty > 10);
console.log("/n twenty is not equal to 10 and twenty is greator than 10");
console.log(twenty != 10 && twenty > 30);
// Using || (OR)
console.log("\n 20 is greator than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);
console.log("\n 20 is greator than 50 OR 20 is not equal to 20");
console.log(20 > 50 || 20 != 20);
// Test whether an item is include in array
console.log("is orange include in my fruits array");
console.log(fruits.includes("orange"));
// Not Include
console.log("\nIs orange not include in my fruits array");
console.log(!fruits.includes("orange"));
