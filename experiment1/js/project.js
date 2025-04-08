// project.js - purpose and description here
// Author: Your Name
// Date:

// NOTE: This is how we might start a basic JavaaScript OOP project

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file

// define a class
class MyProjectClass {
  // constructor function
  constructor(param1, param2) {
    // set properties using 'this' keyword
    this.property1 = param1;
    this.property2 = param2;
  }
  
  // define a method
  myMethod() {
    // code to run when method is called
  }
}

function main() {
  const fillers = {
    nation: ["Revaron", "KiKi", "Inkabara", "Foxia", "California", "Orgeon", "Washington"],
    describe: ["Peoples", "Free", "Great", "Capitist", "Socalist", "National", "$describe", "Vassel"],
    connection: ["of ", ""],
    government: ["Republic", "Kingdom", "Empire", "Commonwealth", "Holy $government", "United $describe", ""],
    message: ["declares war", "allied", "conquired", "annexed", "invaded", "held off", "is trading with", "rebulit", "is rebuilding ", "signed a ceasfire with", "are at peace with"],
    continueMessage: ["meanwhile $formNation $message $formNation", "in opposition of $formNation", "with the aid of $formNation", "shocking all"],
    formNation: ['$describe $government $connection $nation']
  };
  
  const template = `World News!
  $formNation $message $formNation $continueMessage
  `;
  
  
  // STUDENTS: You don't need to edit code below this line.
  
  const slotPattern = /\$(\w+)/;
  
  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }
  
  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }
  
    /* global box */
    $("#box").text(story);
  }
  
  /* global clicker */
  $("#clicker").click(generate);
  
  generate();  
}

// let's get this party started - uncomment me
main();