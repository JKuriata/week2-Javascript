let num = "12221";  
let revNum = num.split("").reverse().join("");

if (num === revNum) {
    console.log("This is a palindrome");
} else {
    console.log("This is not a palindrome");
}