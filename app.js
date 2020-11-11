const inquirer = require('inquirer');

// const fs = require('fs');
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', generatePage(name, github), err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!')
// });
const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        }
        else {
          console.log('Please enter your name!');
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your Github Username',
      validate: usernameInput => {
        if (usernameInput) {
          return true;
        }
        else {
          console.log('Please enter your username!');
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmAbout',
      message: 'Would you like to enter some information about yourself for an "About" section?',
      default: true
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:',
      when: ({ confirmAbout }) => {
        if (confirmAbout) {
          return true;
        } else {
          return false;
        }
      }
    },
  ]);
};

const promptProject = portfolioData => {

  // if there's no 'projects array property, create one
  if (!portfolioData.projects) {
    portfolioData.projects = [];
  }

  console.log(`
  ==================
  Add a New Project
  ==================
  `);
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?',
      validate: projectInput => {
        if (projectInput) {
          return true;
        }
        else {
          console.log('Please enter your project name!');
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        }
        else {
          console.log('Please enter a brief description!');
        }
      }
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you build this project with? (Check all that apply)',
      choices: ['Javascript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project. (Required)',
      validate: linkInput => {
        if (linkInput) {
          return true;
        }
        else {
          console.log('Please enter the link!');
        }
      }
    },
    {
      type: 'confirm',
      name: 'feature',
      message: 'Would you like to feature this project?',
      default: false
    },
    {
      type: 'confirm',
      name: 'confirmAddProject',
      message: 'Would you like to enter another project?',
      default: false
    }
  ])
    .then(projectData => {
      portfolioData.projects.push(projectData);
      if (projectData.confirmAddProject) {
        return promptProject(portfolioData);
      } else {
        return portfolioData;
      }
    });
}


promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
  });

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

// code from lesson 9.1
// const profileDataArgs = process.argv.slice(2, process.argv.length);

// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }
//     console.log("===============");

//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };
// printProfileData(profileDataArgs);



// this function generates a string 
// const generatePage = () => 'Name: Jane, GitHub: janehub';
// parentheses are unnecessary in arrow functions when there is one parameter. In this functon, which has no parameters, we need parentheses to hold the place where parameters would have been. 

// template literals are enclosed by backticks (`) instead of double or single quotes. 
// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
// with these, we can wrap the string in backticks and interpolate the variables with the ${<variable>} syntax. What's great about template literals is we are allowed to multi-line text: 
// const generatePage = (userName, githubName) => {
//   return `
//   Name: ${userName}
//   GitHub: ${githubName}
// `;
// };
// 


// almost all programming languages have an interface to the computer's file system. The file system is the part of the computer's operating system that handles reading and writing files to persistent storage, 
// such as a hard drive.

// Node.js has modules we can use. Modules can be a function, a class, an object, or simple variables. File system (which we are using here) is considered a module. 


// the fs.writeFile() has three arguments. The first argument is the name of the file that's being created. The next argument is the data that will write onto the file, in this case the HTML template literal.
// the last paramter is a callback function that will be used for error handling. example: 

// fs.writeFile('index.html', generatePage(name, github), err => {
//   if (err) throw err; 
//   console.log('Portfolio complete! Check out index.html to see the output!')
// });

//  in the callback function block, a conditional statement checks for the err being returned by the callback function. If err exists, an error message is displayed. Rather than silently displaying the error
// with console.log(err;) the preceding statement creates an exception and stops the execution of the code. If you were to receive the error, you'd likely get "TypeError [ERROR_INVALID_CALLBACK]: 
// Callback must be a function. Received undefined". This message concatenates two text properties of the Error object that is returned, name and message. In this case, name is the "TypeError", and message
// is "Callback must be a function. Recieved undefined." It's important to know this, for you may wish to retrieve properties of the Error object while developing your applications, and these two are central
// identifying problems. 


// const fs = require('fs');
// the require statement is a built-in function that's globally available in Node.js. It allows the app.js file to access the fs module's functions through the fs assignment. It is a common misconception that
// because modules like fs are a part of the Node.js core library, they're gloablly available. They are not. Using Node.js modular system, we can selectively choose which modules we need (using require) and avoid
// slowing down our app with modules we don't. 

// In order to use functions from one module inside another, we use the related statements module.exports and require. In the source file that has the functions we want to make available 
// to other files, we use module.exports at its bottom. In the destination file(s) that we want to recieve those exported functions, we put require at the top. 


// const promptUser = () => {
// return inquirer.prompt([
//   {
//     type: 'input',
//     name: 'name',
//     message: 'What is your name?'
//   }
// ]);
// };
// promptUser().then(answers => console.log(answers));
// ^ here we are calling a function that returns the result of inquire.prompt, which is a Promise. We therefore append the .then() method to the function call, since it returns a Promise, and 
// we put into .then() whatever we with to take place after the Promise is resolved. This allows the function to have a single responsibility: to promt the user. The Promise from the inquirer
// can now be handled by the function call, which helps maintain best practices. 


// To quickly search for a keyword on a webpage, type ctrl+f (Windows) or command+f (macOS) to open Chrome's search feature. Then type the keyword you're looking for (e.g., validate).
// Chrome will highlight the results on the page. You can jump between them by typing ctrl+g (Windows) or command+g (macOS).