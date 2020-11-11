// create the about section 
const generateAbout = aboutText => {
  if (!aboutText) {
    return '';
  }

  return `
    <section class="my-3" id="about">
      <h2 class="text-dark bg-primary p-2 display-inline-block">About Me</h2>
      <p>${aboutText}</p>
    </section>
  `;
};

// generate the projects 
const generateProjects = projectsArr => {
  return `
    <section class="my-3" id="portfolio">
      <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
      <div class="flex-row justify-space-between">
      ${projectsArr
        .filter(({ feature }) => feature)
        .map(({ name, description, languages, link }) => {
          return `
          <div class="col-12 mb-2 bg-dark text-light p-3">
            <h3 class="portfolio-item-title text-light">${name}</h3>
            <h5 class="portfolio-languages">
              Built With:
              ${languages.join(', ')}
            </h5>
            <p>${description}</p>
            <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
          </div>
        `;
        })
        .join('')}

      ${projectsArr
        .filter(({ feature }) => !feature)
        .map(({ name, description, languages, link }) => {
          return `
          <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
            <h3 class="portfolio-item-title text-light">${name}</h3>
            <h5 class="portfolio-languages">
              Built With:
              ${languages.join(', ')}
            </h5>
            <p>${description}</p>
            <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
          </div>
        `;
        })
        .join('')}
      </div>
    </section>
  `;
};

module.exports = templateData => {
  // destrucure projects and about data from templateData based on their property key names 
  const { projects, about, ...header } = templateData;

  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
        <nav class="flex-row">
          <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${
            header.github
          }">GitHub</a>
        </nav>
      </div>
    </header>
    <main class="container my-5">
      ${generateAbout(about)}
      ${generateProjects(projects)}
    </main>
    <footer class="container text-center py-3">
      <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
    </footer>
  </body>
  </html>
  `;
  };


  // array destructuring :
  // we can create new variables based on data stored in an object. But, with array destructuring, the values are destructured in the order of the array, meaning that we can call the variable
  // storing the destructured array data whatever we want, as long as it goes in order. The following code, for example, doesn't make any sense: 
  // const numArray = [1, 2, 3, 4, 5];
  // const [second, first] = numArray;
  // 
  // In this example, the variable second would go to the value of 1, and the variable first would have the value of 2. This is because array destructuring will simply go in order of the array
  // In fact, this would completely ignore the rest of the array becuase we didn't create variables to grab data from that index. 



  // object destructuring: 
  // with object destructuring, we can grab any value we want out of the object by simply calling on the key name of the property we want to create a variable for. 
  // const { project, about } = templateData;
  // so ^ this "about" is simply a big string of data that we copied out of templateData.about, and the variable projects is an array of objects we copied out of templateData.projects. 


  // you can distinguish between the spread operator and the rest operator ny remembering that the spread operator spreads values across a new array or object, while the rest operator
  // condenses leftover array or object values into one new value. 


  // the spread operator "...": 
  // Let's say we have an array of data that we want to work with but never directy affect, such as an array of animals. We want to work with the data in the array, but we want to keep the 
  // original array untouched. You might think this is the best way: 

  // const originalAnimalArr = ['Dog', 'Cat', 'Horse'];
  // const workingAnimalArr = originalAnimalArr;
  // workingAnimalArr.push('Bird');

  // but in reality, it's adding "Bird" to both arrays. This is beacause Javascript engine handles values differently when it comes to primitive data types and object data types. If we want 
  // to make a new array or object with the same contents as an existing array or object, we can use the spread operator, as follows: 

  // const originalAnimalArr = ['Dog', 'Cat', 'Horse'];
  // const workingAnimalArr = [...originalAnimalArr];

  // In this example, when we create the working version for this set of data, we don't directly set the value of the origin to it, instead creating a new array, using it's []. Javascript
  // sees those and infers we are creating a new set of data in memory. Using the spread operator "..." we can instruct originalAnimalArr to spread its content across this new array. 
  // (also works with objects).



  // the rest operator "...": 
  // this packages leftover data under a new array or object, depending on waht the source of the data is. Say we need to keep track of a car race and want to highlight first, second, and third
  // place while keeping the rest of the racers together. We could do : 

  // const finishOrder = [
  //   'Speed Racer',
  //   'Flash Marker Jr.',
  //   'Racer X',
  //   'Snake Oiler',
  //   'Trixie',
  //   'Grey Ghost',
  //   'Taejo Togokhan'
  // ];
  // const [first, second, third, ...theRest] = finishOrder;

  // "...theRest" holds the other racers names. 


  // This function, generateAbout(), will accept the about variable as a parameter, and if it doesn't exist, we'll simply return an empty string. If it does exists, we'll return the entire
  // <section> element :
  // <main class="container my-5">
  // ${generateAbout(about)}
  // </main>


  // the array method .map() works a lot like .forEach(): it takes in a function as a parameter to execute on each element in the array, which accepts each element of the array as the 
  // function's parameter. .forEach() just runs the function and does nothing else, the .map() method though, takes an array of data and uses it to create a brand-new array. 
  // For example: 

  // const animalArr = ['Dogs', 'Cats', 'Horses', 'Birds'];

  // const coolAnimalArr = animalArr.map(animal => {
  //   console.log(animal);
  //   return `${animal} are really cool animals.`;
  // });

  // Here we take the value of the animalArr at each iteration, which we call animal as the arrow function's parameter, and we return that animals followed by the words "are really cool".
  // It doesn't affect animalArr at all, it just uses its data to create something new. 


  // in the generateProjects(), we do two tasks. First, we take the array of project data and we create a new array from it, called projectHtmlArr. Then we take that array and interpolate it into
  // the returning project section. We use .join() method to turn the projectHtmlArr into a combined string of HTML before returning as well. For the projects, we use .map() to iterate
  // through the projectArr, we destrcuture eash projects object data based on property name, and we return an entire set of HTML code with it. 



  // using the .filter() array method, we created two new arrays of project data based on wether their feature property was true or false. Once we seperated the array data, we created two new sets of HTML data
  // and got them into the <section> element, The array .filter() method is another new Javascript array method that allows us to execute a function on each element of the array to test wether
  // or not it should be in the new array created from it. For example: 

  // const ageArr = [21, 58, 8, 16, 106, 83, 42, 2, 0];

  // const over21Arr = ageArr.filter(age => {
  //   if (age >= 21) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });
  // // => [21, 58, 106, 83, 42];

  // If its older than 21 or =21, we return true, meaning that the element of ageArr should be included in the new over21Arr. If it's younger, it will return false, meaning that the element of
  // the array should not be included in the new over21Arr. 