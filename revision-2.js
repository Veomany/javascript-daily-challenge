//Program three different ways to log each individual item in the array.
let myArray = ["one", 2, true, 4];

// for (let i in myArray) {
//   console.log(myArray[i]);
// }

// for (let i=0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// console.log(myArray.shift());
// console.log(myArray.shift());
// console.log(myArray.shift());
// console.log(myArray.shift());


//Write a function that adds all numbers together. If any argument is not a number return false

function adder(myArray) {
  let answer = 0;

  for (let i in myArray) {
    if (typeof myArray[i] === "number") {
      answer += myArray[i];

    }
  }

  return answer;
}

console.log(adder(myArray));



//Set 3 variables (you may call them whatever you want) to the first three elements of myArray using destructing

// let col1, col2, col3;

// let col1 = "blue";
// let col2 = "red";
// let col3 = "green";

// let colour

//Create a object from a class named Fruit. When an object is instantiated from the class set 3 properties on the object (name, color, bites). Also have a function in the class that when called takes a bite of the fruit and decrements the bites property. If there are no bites left in the fruit log to the console “All gone!”, if there was a bite log “So yummy”.