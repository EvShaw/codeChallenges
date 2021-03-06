console.log('May 3rd 2022')

//

// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// I love you
// a little
// a lot
// passionately
// madly
// not at all

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

// function flower(petals) {
//     const phrase = ['I love you', 'A little', 'A lot', 'Passionately', 'Madly', 'Not at all']

//     console.log(phrase[(petals - 1) % phrase.length])
//     console.log(phrase[8])
//     //9: phrase[8]
// }

// flower(9)

//-----------------------------------

// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. 

// As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

// //range
// function range(start, end, step = start < end ? 1 : -1) {
//     let array = [];

//     if (step > 0) {
//         for (let i = start; i <= end; i += step) array.push(i);
//     } else {
//         for (let i = start; i >= end; i += step) array.push(i);
//     }
//     return array;
// }

// //sum
// function sum(array) {
//     let total = 0;
//     for (let value of array) {
//         total += value;
//     }
//     return total;
// }



// let array = []

// function range(start, end, step = start < end ? 1 : -1) {

//             //10 going to 1, in steps of 2
//             //step = -2

//     if (step > 0) {
//         for (let i = start; i <= end; i += step) array.push(i)
//        // starting at 10, while 10 is less than or equal to 1, += -2

//        //10 > 8, 6, 4, 2,


//     } else {
//         for (let i = start; i >= end; i += step) array.push(i)
//         // ------ i = -10     i >= 15    i += 3 //incrementing by 3 with every iteration

//         //differences: first if step is larger than 0, we start at i and go to end
//         //  if step is less than   0, we start at i and go to end 

//         //why the conditional?
//         // }
//         // array.push(start)
//         // array.push(end)
//         // for (let i = start; i <= end; i++) {
//         //     array.push(i)
//         // }

//     }
//     return array
// }

// function sum(arr) {
//     let total = 0;
//     for (let value of array) {
//         total += value;
//     }
//     return total;
// }


// range(10, 1, 2)

// console.log(array)
// console.log(sum(array))

// /----FILTER: 
//  PREP
//P: 
//R:
//E:
//P:
// const lessThanStated = characters.filter( character => character.mass < 80 )

// function gooseFilter(birds) {
//     var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

//     const birdies = birds.filter((b, i) => b !== geese[i])

//     console.log(birdies)


// }
// return an array containing all of the strings in the input array except those that match strings in geese


// console.log(birds.filter(b => !geese.includes(b)));

// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
// The geese are any strings in the following array, which is pre-populated in your solution:
//   ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
// For example, if this array were passed as an argument:
//  ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]
// Your function would return the following array:
// ["Mallard", "Hook Bill", "Crested", "Blue Swedish"]
// The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

// function gooseFilter (birds) {
//     var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//    console.log(birds.filter( b => !geese.includes(b)))
//     // return an array containing all of the strings in the input array except those that match strings in geese
//   };

//   gooseFilter(["Mallard", "Hook Bill", "Crested", "Blue Swedish"])

//------------------------------------------------------------------------
// /----FILTER: 
//  PREP
//P: 
//R:
//E:
//P:

// Array.prototype.filter = function (func) {
//     //nothing here, you will feel pretty awesome to write down by yourself
//     //have fun :)
//     console.log([1, 2, 3, 4, 5].filter(num => num > 3))
// }

// console.log()

// Array.prototype.filter = function (fn) {
//     const res = []
//     if(fn(this[i])) {
//         res.push(this[i])
//     }
//     return res
// }


// var res = [];
//   //     for (var i = 0; i<this.length; i++){
//   //       if (fn(this[i])){
//   //         res.push(this[i]);
//   //       }
//   //     }
// //   //     return res;

// Array.prototype.filter = function (ruleCondition) {
//     const arr = []
//     this.forEach( (currentValue) => {
//         if (ruleCondition( currentValue )) {
//             arr.push(currentValue)
//         }
//         return arr;
//     })
// }
// //or: 
// Array.prototype.filter=function(fn) {
//     return this.reduce((s, a) => fn(a)?(s.push(a), s) :s, [])
// }
