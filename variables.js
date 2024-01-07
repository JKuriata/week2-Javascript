console.log("All around the world".charAt(7).toUpperCase())
console.log("------");

let balance = 1000;
let payment = 200;
const newBalance = balance + payment;
console.log(`You have added £ ${payment} to your balance of £ ${balance}. This has resulted in the new balance of £ ${newBalance}.`)
console.log("------");

let name = "Jay";
let age = "27";
let favColour = "Yellow";
console.log(`Hello, my name is ${name}, I am ${age} years old and my favourite colour is ${favColour}.`)
console.log("------");
name = "Terry";
age = "25";
favColour = "Green";
console.log(`Hello, my name is ${name}, I am ${age} years old and my favourite colour is ${favColour}.`)
console.log("------");

function nomNoms() {
    console.log(`Breakfast = ${breakfast}`);
    console.log(`Lunch = ${lunch}`);
    console.log(`Dinner = ${dinner}`);
}

let breakfast = "Porridge";
let lunch = "Egg bread sandwich";
let dinner = "Full on Christmas dinner";
nomNoms();
console.log("------");
breakfast = "Full English";
lunch = "Bacon sandwich";
dinner = "Roast chicken";
nomNoms();
console.log("-----------");

const d0 = new Date(1996, 9, 27);
const d1 = new Date(2024, 0, 3);
const delta = Math.floor((d1 - d0) / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
console.log(delta);
console.log("-----------");