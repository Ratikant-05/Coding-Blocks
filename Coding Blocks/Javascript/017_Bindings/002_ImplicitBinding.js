// Implicit Binding
// implicit means automatic
// When a function is called as a method of an object, this refers to the object that owns the method.

let person = {
  "age" : 20,
  "name" : "Jack", 
  "city" : "delhi",

  printPersonDetails: function(){
    this.a =200,
    console.log(this)
    // console.log(this.a)
    // console.log(this.age) //prints age
  }
}

person.printPersonDetails()
this.a = 100;
console.log(this.a)
// this will point the object and not the default window
// this.a . is used to access the elements of the object
// closure me this nahi aata 