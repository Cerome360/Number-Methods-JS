// Numbers

const myName = "Lullaby";
//An integer is a whole number
const myNumber = 42;

// A number with a decimal point is a float 
// which references the "floating point"
const myFloat = 42.01;

console.log(myNumber);
console.log(myFloat);

const myString = "42"

// We can change a string to integer using the number method

console.log(Number(myString) + 3);
console.log(Number(myString) === myNumber);

// charAt

console.log(myName.split("l"));

// Number Methods

// The Number.IsInteger() method determines whether the passed value is an integer 

console.log(Number.isInteger(myNumber));

// The Number.parseFloat() method parses an argument and returns a floating point number. If the number cannot be parsed from the argument, it returns NaN

console.log(Number.parseFloat(myNumber).toFixed(4));

// The toFixed() method formats a number according to how many decimal points you provide as the parameter.

console.log(myNumber.toFixed("2"));

//  The Number.parseInt() method parses a string argument and returns an integer. It removes non-numeric characters and converts the number data types when possible

console.log(Number.parseInt("54678aryhjjv").toFixed(4));

// The toString() method returns a string representing the number

console.log(typeof myFloat.toString());
console.log(typeof myFloat.toString());

//Chaining = using several methods chained together

console.log(Number.parseFloat("4.237abc").toFixed(2).toString());

//The Number.isNan() method determines whether the passed value is NaN AND it's type is Number.

//The global isNan() function determines whether a value is NaN or not

console.log(isNaN("Dave"));
