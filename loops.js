// let coffeeOrder = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's new"
// ];

// coffeeOrder[0] = "Anne - Vanilla latte"; //changes first thing

// console.log(coffeeOrder.length);
// coffeeOrder.push("Donna - Espresso"); //adds item at the end
// console.log(coffeeOrder)
// coffeeOrder.pop() //removes last thing
// console.log("------------")

// let favSongs = [
//     "Rammstein - Auslander",
//     "Rem - Violet's Tale",
//     "Jorge Rivera-Herrans - Just a Man",
// ];
// favSongs.push("Everybody's worried about Owen - Nunmaker's Parable", "Sofia Isella - Us and Pigs")
// // console.log(favSongs)
// favSongs.pop()
// console.log(favSongs)

// let teaOrder = [
//     "Moondrop Dreams",
//     "Earl Grey",
//     "Snowball",
//     "Butter Brew"
// ];
// for(let i = 0; i < teaOrder.length; i++) {
//     console.log(teaOrder[i]);
// }

// let multiplesTwo = [];
// for(let i=2; i<20; i++){
//     if (i % 2 == 0){
//         multiplesTwo.push(i);
//     }
// }
// console.log(`Numbers divisable by two are ${multiplesTwo}`)

// let counter =1;
// while (counter < 11) {
//     console.log(counter)
//     counter++
// }

// let age = 15;
// while (age <18) {
//     console.log(`You're ${age}, you're a child`)
//     age++
// }
// console.log(`Congrats, you're ${age} please claim your free depression and burn-out to your right.`)

// let cards = ["Diamonds", "Spades", "Hearts", "Clubs"];
// let currentCard = "Clubs"
// while(currentCard != "Spades"){
//     console.log(currentCard);
//     currentCard = cards[Math.floor(Math.random()*4)];
// }
// console.log(currentCard)

//Activity 2 using the favSongs example
let favSongs = [
    "Rammstein - Auslander",
    "Rem - Violet's Tale",
    "Jorge Rivera-Herrans - Just a Man",
];
favSongs.push("Everybody's worried about Owen - Nunmaker's Parable", "Sofia Isella - Us and Pigs")
favSongs.shift()
console.log(favSongs)
favSongs.unshift("Linkin Park - The little things give you away")
console.log(favSongs)
favSongs.splice(2, 3, "Pink Floyd - Empty Spaces", "Sabaton - Army of Dead Men")
console.log(favSongs)