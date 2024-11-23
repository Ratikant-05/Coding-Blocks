// Prototypes 
// creating an object with a constructor 
function person(name,age) {
  this.name= name
  this.age = age
}

let p1= new person("Ram",22)

p1.greet =function(){
  console.log("Hello")
}

console.log(p1)

// Object.prototype sabka papa
// Person.prototype beta h Object.prototype ka
// p1 person ka beta h 


// Object.prototype
// person.prototype
// p1__proto

// creating an object without a constructor 
// Parent will be Object.prototype

let p2={
  "name": "Mona"
}

//  __proto__ is used to tell who is the parent of that element

// In case of number and strings

let num = 1;
// iska constructor hai num that is a function number
//  num ka parent h object.prototype


// constructor can be accessed through a prototype using .constructor property
// String.prototype.constructor
// Prototype of a certain type can be accessed through .prototype property  of a constructor.
// String.prototype