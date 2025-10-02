// Ternary operator = a shortcut to if{} and else{} statements helps to assign a variable based on a condition
// condition ? codeIfTrue : codeIfFalse

// let age = 21;
// let message = age >=18 ? "You are an adult":"You are a minor"

//  THIS IS THE SAME AS:
// let age 
// let message;
// if (age>=18){
//     message = "You are an adult";
// }
// else{
//     message='You are a minor'
// }

// console.log(message)= 21
// let message;
// if (age>=18){
//     message = "You are an adult";
// }
// else{
//     message='You are a minor'
// }

// console.log(message)

// time = 16;
// let greeting = time < 12 ? "Good morning": "Good afternoon" 
// console.log(greeting)

// let purchaseAmount = 125;
// let discount = purchaseAmount >= 100? 10:0;
// console.log((`Your total is $${purchaseAmount-purchaseAmount*(discount/100)}`))


// SWITCH
// let day = "pizza";

// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log('Wednesday');
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log('Friday');
//         break;
//     case 6:
//         console.log('Saturday');
//     case 7:
//         console.log('Sunday');
//         break
//     default:
//         console.log(`${day} is not a day`)
// }


let testScore = 75;
let letterGrade;

switch(true){
    case testScore>=90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = 'B';
        break;
    case testScore>=70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F"
}

console.log(letterGrade)