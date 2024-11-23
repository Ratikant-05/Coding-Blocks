// d ke pass ek function h d.getTime
// ab hum kre agr d.__proto__ to date.prototype pe jayega
// Date.prototype ke pass ke function h getTime()  
// Toh ye function call nhi hoga because d ke pass already ek function h getTime()


// let d= new Date()
// // d.getTime = function(){
// //   return "Replace Method"
// // }

// console.log(d.getTime())

// // Example

// let person ={
//   name :"jacky",
//   greet(){
//     console.log(`Hello, my name is ${this.name}`)
//   }
// }

// let jack = Object.create(person)
// // jack.name = "jack",

// jack.greet()
let personPrototype = {
  country : "India",
  greet(){
    console.log(`Hello, my name is ${this.name}`)
  }
}

function person(name,age){
  this.name=name
  this.age=age
}

let p = new person("Jack",20)
console.log(p)