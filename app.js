const profileDataArgs = process.argv.slice(2, process.argv.length);

const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.length; i += 1) {
        console.log(profileDataArr[i]);
    }
    console.log("===============");

    profileDataArr.forEach(profileItem => console.log(profileItem));
};
printProfileData(profileDataArgs);

// "process" is a global object that represents everything going on with this particular app. similar to "document" and "window" in the browser. "argv", short for "argument values", 
// is a property of "process" is an array that holds whatever was typed into the command line.


// the "arrow function" help create more concise function expressions where possible. they don't need the function keyword. if you only have one parameter, you can completely omit the 
// parentheses. if you only need to perform one action, like return the value of two arguments added together, we can omit the curly braces of the function body. this is an "implicit return"
// meaning we don't have to use a return statement is we're performing only one action. 


// why let and const is different than var and const: 
// let and const are block-scoped variables. using them, variables that are created within any block of code {} will not exist outside the block of code. var has function scoping; it only 
// follows the preceding rule if its created in a function. If a variable with the same name exists globally and then is created again inside an if statement or for loop, it will override
// that gloablly created sum variable. example: 
// var is function-scoped, so redeclaring it in a block will cause its value outside the block to change as well:

// var one = 'one: declared outside the block';

// if (true === true) {
//   var one = 'one: declared inside the block'; // notice: we redeclare 'one' here
//   console.log(one); // prints 'one: declared inside the block'
// }

// console.log(one); // also prints 'one: declared inside the block', because the variable was redeclared in the 'if' block. The outer 'var' variable was therefore destroyed and replaced by
                    // inner var variable.

// // 'let' is block-scoped, so redeclaring a 'let' variable inside of a block creates a different 'let' variable with the same name whose scope is inside the block:

// let two = 'two: declared outside the block';

// if (true === true) {
//   let two = 'two: declared inside the block';
//   console.log(two); // prints 'two: declared inside the block'
// }

// console.log(two); // prints 'two: declared outside the block', because two declared inside the block is a separate variable. The 'let' variables are unrelated and therefore are unaffected
                    // by each other.


// .forEach() is a method that accepts a function as an argument and executes that function on each element of the array, using the value of the element at that iteration as its argument.
// it is the exact same thing as using a for loop to iterate through an array. 