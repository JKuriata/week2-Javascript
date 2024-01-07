// let person = {
//     name: "Jay",
//     age: 27,
//     songs: [
//         "Rammstein - Auslander",
//         "Rem - Violet's Tale",
//         "Jorge Rivera-Herrans - Just a Man",
//         "Everybody's worried about Owen - Nunmaker's Parable", 
//         "Sofia Isella - Us and Pigs",
//         "Linkin Park - The little things give you away",
//         "Pink Floyd - Empty Spaces", "Sabaton - Army of Dead Men"
//     ],
// };

// console.log(person.name);
// //OR, brackets which are more versatile 
// console.log(person["age"]);
// console.log(person.songs)

console.log("--------------");
console.log("Cafe example :)")
let offer = "none";
let time = 1600;

const cafe = {
    name: "BookNook",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: [
        "Hot Chocolate",
        "Latte",
        "Earl Grey",
        "Vanilla chai",
        "Gingerbread matcha"
    ],
    breakfastOffer: "Free chocolate with any hot drink",
    lunchOffer: "Free drink with sandwich",
    noOffer: "Sorry, no offers are available",
    openCafe(){
        if (this.hasSpecialOffers){
        return "Come on in, we have special offers!";
        }
    },
    closeCafe(){
        return "We are closed, come back tomorrow"
    }
};

console.log(cafe.openCafe())
// console.log(cafe.drinks[2])

if (time < 1100){
    offer = cafe.breakfastOffer;
} else if (time < 1500){
    offer = cafe.lunchOffer;
} else  {
    offer = cafe.noOffer;
}

console.log(offer);

console.log("--------------");
// console.log("Activity"); 

// let day = "Saturday";
// let message = "";

// const alarm = {
//     weekendAlarm: "No Alarm needed",
//     weekdayAlarm: "Wake up at 8am"
// };

// if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
//     message = alarm.weekdayAlarm
// }
// else if (day == "Saturday" || day == "Sunday") {
//     message = alarm.weekendAlarm
// }
// console.log(message)
// //bit convoluted but it works, would also make the input upper so that no matter how somebody put it in the code would recognise it

// console.log("--------------");

