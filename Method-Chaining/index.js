// Method Chaining =  Calling one method after another in one continuos line of code

// NO METHOD CHAINING

// let username = window.prompt("Enter your username: ");
// username = username.trim();

// // charAt() method of String values returns a new string consisting of the single UTF-16 code unit at the given index
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1) //1-ic minchev verj
// extraChars = extraChars.toLowerCase();
// username = letter + extraChars;
// console.log(username);


// METHOD CHAINING
let username = window.prompt("Enter your username: ");
username = username.trim().charAt(0).toUpperCase() + username.slice(1).toLowerCase();
console.log(username)