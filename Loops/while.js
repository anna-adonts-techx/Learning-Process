// while loop = repeat some code WHILE some condition is true

// let username = "";
// chi toxnum voch aranc grelu ok sexmes, voch el cancel
// while (username==="" || username === null){
//     username = window.prompt("Enter your username: ") //while one of these conditions is true execute this code forever
// }

// console.log(`Hello ${username}`)

// you can do the same thing using do-while
// let username;

// do {
//     username = window.prompt("Enter your username: ");
// }
// while  (username==="" || username === null)
// console.log(`Hello ${username}`)


let loggedIn = false;
let username;
let password;

while (!loggedIn){
    username = window.prompt("Enter your username: ");
    password = window.prompt("Enter your password: ");

    if (username==="myUsername" && password==="myPassword"){
        loggedIn = true;
        console.log("You are logged in.")
    }

    else {
        console.log("Invalid credentials! Please try again")
    }
}