// let a = 5;
// let b = "hello, world";
// let c = 3 + a; // c is now 3 + 5 = 8
// let d = b + " " + "peace"; // d is now "hello, world peace"
// let e = true;
// let f = !e; // f is now false

// let a = 0;
// let b = 2;
// a = b; // a now has the same value as b, which is 2
// b = b + 1; // b is now 2 + 1 = 3

// let c = 1;
// // a few shortcuts on changing values
// c += 1; // c is now 2
// c -= 1; // c is now 1
// c *= 10; // c is now 10
// c /= 5; // c is now 2
// c++; // c is now 3
// c--; // c is now 2

// let dogs = ["Bulldog", "Beagle", "Labrador"];
// let a = dogs[0]; // a is now "Bulldog"

// // an object contains a set of named data
// let jane = {
//   "name": "Jane",
//   "age": 18,
//   "location": {
//     "city": "Chicago",
//     "state": "Illinois"
//   }
// };
// let n = jane.name; // n is now "Jane"
// let s = jane.location.state; // s is now "Illinois"

// function isFiveOrTen(n) {
//   if (n == 5) {
//     // what to do if condition is met
//     return true;
//   } else if (n == 10) {
//     // what to do if the previous condition is not met, but this one is
//     return true;
//   } {
//     // what to do if condition is not met
//     return false;
//   }
// }

// let r1 = isFiveOrTen(5); // r1 is now true
// let r2 = isFiveOrTen(10); // r2 is now true
// let r3 = isFiveOrTen(15); // r3 is now false

// // prints "uwu" 10 times (x will go from 0 to 9)
// for (let x = 0; x < 10; x++) {
//   console.log("uwu");
// }

// // that above for loop is the same as the following while loop
// let x = 0;
// while (x < 10) {
//   console.log("uwu");
//   x++;
// }


// // define a funtion add(a, b) that returns a + b
// function add(a, b) {
//   return a + b;
// }

// let sum = add(1, 2); // sum is now 3


// function repeat(str, n) {
//   let output = ""

//   for (let i = 0; i < n; i++) {
//     output += str;
//   }

//   return output
// }

// let u = "uwu";
// let bigU = repeat(u, 5); // bigU is now "uwuuwuuwuuwuuwu