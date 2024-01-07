// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`);
// }

// cashWithdrawal(300, 50482053);
// cashWithdrawal(50, 40284729);
// cashWithdrawal(1000, 502857394)

//Activity 1
// const factorial = (n) => {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }
// console.log(factorial(33))

//Activity 2
// let orderCount = 0;

// const takeOrder = (topping, sauce, base) => {
//     console.log(`Pizza with ${topping}, ${sauce} sauce, and ${base} base.`);
//     orderCount++
// }
// takeOrder("pineapple", "tomato", "thiccc")
// takeOrder("chicken", "bbq", "thin")
// console.log(orderCount) //because why would we have this if we never show it's working

//Activity 3 
const pin = "1234";
let userPin = "1234"; // change to test
let accBal = 600;
let withdrawal = 200; // change to test
let newBal = accBal - withdrawal;

if (pin === userPin) {
    console.log(`Your current balance is £${accBal}`);
    if (withdrawal <= accBal) {
        console.log(`You have withdrawn £${withdrawal}, your new balance is £${newBal}`);
    } else {
        console.log("Insufficient Funds");
    }
} else {
    console.log("Incorrect Pin");
}
