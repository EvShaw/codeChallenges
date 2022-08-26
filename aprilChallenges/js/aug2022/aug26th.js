//***************************************************************
// @289
//  Filling an array

// create an array with content: starting with number 0, and up to N-1. 
//only given an integer, no outside cases, return an array with an index of 0 to n

//create a function that accepts a number. 
//inside the function, use the spread syntax, with Array key word, passing in the number to create an index for each number up to the given. 

// const arr = N => N != 0 ? [...Array(N)].map((_, i) => i) : []

// console.log(arr(0))

//***************************************************************
// @288
//  Grasshopper - Check for factor:

// test if the factor is a factor of base
// return true if it is or false if not

// inside a function, run base % factor == 0 
// return true 

// function checkForFactor(base, factor) {
//     return base % factor == 0
// }

//***************************************************************
// @287
// Century From Year:

//given the year, return the century. 
//number can range from 1 to current
//return a number

// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

//Use the static Math.ceil method, dividing the year passed by 100

// function century(year) {
//     return Math.ceil(year/100)
// }

// console.log(century(1705))
// console.log(century(1900))
// console.log(century(1601))
// console.log(century(2000))