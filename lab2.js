/*********************************************************
LAB 2: SORTING AND CAMPY SCI-FI

Welcome to Lab 2 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below.
Look for the word TODO in comments.  Each TODO will have a
description of what is required.

To run this file (in the terminal) use: node lab2.js

*********************************************************/
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

 persons consumed  |  rate of consumption
 ------------------|---------------------
        0          |       1/hour
        1          |       2/hour
        2          |       3/hour
        3          |       4/hour

 TODO: First, make a constructor function, called Blob, that makes blobs.

*/
function Blob(blobName) {
  this.blobName = blobName;
}

var population = 1000;
var consumptionRate = 1;
var hoursSpentInDowington = 0;
/*
TODO: Next, create an instance of Blob named blob.
*/
var blob = new Blob("blob");
/*

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington.
*/
while (population > 0) {
  population -= consumptionRate;
  hoursSpentInDowington++;
  consumptionRate++;
}
// TODO: assign me the value of the
// above calculation

var blob = new Blob();

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

Blob.prototype.hoursToOoze = function(population, peoplePerHour) {
  this.population = population;
  this.consumption = peoplePerHour;
  var hours = 0;
  // TODO: implement me based on the instructions above. Be sure to then assign me to the Blob's prototype.
  for (hours = 0; population > 0; hours ++, peoplePerHour++) {
    population -= peoplePerHour;
  }
  return hours;
};

assert(blob.hoursToOoze(0, 1) === 0, "no people means no time needed.");
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  "hoursSpentInDowington should match hoursToOoze\"s result for 1000");
// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

assert(blob.hoursToOoze(3, 1) === 2, "the blob will consume 3 people in 2 hours");
assert(blob.hoursToOoze(9, 2) === 3, "the blob will consume 9 people in 3 hours");
assert(blob.hoursToOoze(15, 1) === 5, "the blob will consume 15 people in five hours");

//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: "nuqneH",  // home planet is Qo"noS
  romulan: "Jolan\"tru", // home planet is Romulus
  "federation standard": "hello" // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method called sayHello.

function SentientBeing (homePlanet, nativeLanguage) {
  this.homePlanet = homePlanet; // TODO: specify a home planet and a language
  this.nativeLanguage = nativeLanguage; // you'll need to add parameters to this constructor
  this.hello = hello[nativeLanguage];
}
// sb is a SentientBeing object

    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating

    //TODO: put this on the SentientBeing prototype
SentientBeing.prototype.sayHello = function(sb) {
  console.log("hello? " + this.hello + "!");
  return sb.hello;
};

var klingon = new SentientBeing ("Qu\"Nos", "klingon");

var human = new SentientBeing ("Earth", "federation standard");

var romulan = new SentientBeing ("Romulus", "romulan");

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).
console.log("test for nuqneH: " + human.sayHello(klingon));

assert(human.sayHello(klingon) === "nuqneH",
  "the klingon should hear nuqneH");
// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.
assert(klingon.sayHello(human) === "hello");
assert(romulan.sayHello(human) === "hello");
assert(human.sayHello(human) === "hello");
assert(romulan.sayHello(klingon) === "nuqneH");
assert(romulan.sayHello(romulan) === "Jolan\"tru");
//*********************************************************
// PROBLEM 3: Moar Loops. 20 points.
//
// Implement the following functions. Write at least 3
// assertions for each one
//*********************************************************
function max(array) {
  // TODO: return the largest number in the given array
var numMax = 0;
for (i = 0; i < array.length; i++) {
  if (array[i] > numMax) {
    numMax = array[i];
  }
}
  return numMax;
}

// TODO: write three more assertions
assert(max([ 1, 3, 2 ]) === 3, "[ 1,3,2 ]");
assert(max([ 4, 3, 9 ]) === 9, "[ 3,4,9 ]");
assert(max([ 8, 2, 10 ]) === 10, "[ 2,8,10 ]");
assert(max([ 14, 38, 3 ]) === 38, "[ 3,14,38 ]");

// TODO: you are given a string with several words in it
  // return a corresponding variable name that follows
  // javascript conventions
  // HINT:
  // you might want to use these string methods:
  //  split(), charAt(), toUpperCase()
  // and this array method: join()

function variablify(string) {
  var arrayStr = string.split(" ");
  var camelStr = arrayStr[0].toLowerCase();
  for (var i = 1; i < arrayStr.length; i++) {
    var word = arrayStr[i];
    camelStr += word.charAt(0).toUpperCase();
      for (var s = 1; s < word.length; s++) {
        camelStr += word.charAt(s).toLowerCase();
    }
  }
  return camelStr;
}

console.log(variablify("cats dogs horse"));
// TODO: write three more assertions
assert(variablify("one two three") === "oneTwoThree");
assert(variablify("blue pink purple green") === "bluePinkPurpleGreen");
assert(variablify("go to the zoo and see the panda") === "goToTheZooAndSeeThePanda");
assert(variablify("eats shoots and leaves") == "eatsShootsAndLeaves");
//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
