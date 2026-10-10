/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}
console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));


// Exercise 2: isAdult()
const isAdult = (age) => {
    if (age >= 18) {
        return "Adult";
    } else {
        return "Minor";
    }
};
console.log('Exercise 2 Result:', isAdult(21));


// Exercise 3: isCharAVowel()
const isCharAVowel = (char) => {
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
        return true;
    } else {
        return false;
    }
};
console.log('Exercise 3 Result:', isCharAVowel("a"));


//Exercise 4: generateEmail()
const generateEmail = (name, domain) => {
    return name + "@" + domain;
};
console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));


// Exercise 5: greetUser()
const greetUser = (name, time) => {
    return "Good " + time + ", " + name + "!";
};
console.log('Exercise 5 Result:', greetUser("Sam", "morning"));


// Exercise 6: maxOfThree()
const maxOfThree = (x, y, z) => {
    if (x >= y && x >= z) {
        return x;
    } else if (y >= x && y >= z) {
        return y;
    } else {
        return z;
    }
};
console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));


// Exercise 7: calculateTip()
const calculateTip = (bill, tipPercentage) => {
    return (bill * tipPercentage) / 100;
};
console.log('Exercise 7 Result:', calculateTip(50, 20));


// Exercise 8: convertTemperature()
const convertTemperature = (temperature, scale) => {
    if (scale === "C") {
        return (temperature * 9 / 5) + 32;
    } else if (scale === "F") {
        return (temperature - 32) * 5 / 9;
    }
};
console.log('Exercise 8 Result:', convertTemperature(32, "C"));


// Exercise 9: basicCalculator()
const basicCalculator = (num1, num2, operation) => {
    if (operation === "add") {
        return num1 + num2;
    } else if (operation === "subtract") {
        return num1 - num2;
    } else if (operation === "multiply") {
        return num1 * num2;
    } else if (operation === "divide") {
        return num1 / num2;
    }
};
console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));