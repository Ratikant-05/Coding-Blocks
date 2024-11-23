// // Ek object ke parent se dusre ke parent pe jaane ko bolte h prototype chaining

// let s = "xyz";
// let obj = {s}
// while (obj != null) {
//   console.log(obj, "-->",obj.__proto__)
//   obj = obj.__proto__
// }

// console.log(obj)

// // function.prototype
// // person name ka jo function h uska __proto__ hoga function.prototype

// function person(name,age){
//  this.name = name
//  this.age = age
// }

// let p = person;

// while (p != null) {
//   console.log(p, "-->",p.__proto__)
// }

let d = new Date(100)

while (d !=null) {
  console.log(d,"-->",d.__proto__)
  d = d.__proto__ 
}

console.log(d)
