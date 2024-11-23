// Call
function printDetails (city, Country){
  console.log("Name" + " : " + this.name)
  console.log("Age"+ " : " + this.age)
  console.log("College" +" : "+ this.college)
  console.log("City" +" : "+ city)
  console.log("Country" +" : "+ Country)
}

// printDetails();

let p1 = {
  "name" : "John",
  "age" : 25,
  "college" : "DTU",
}

let p2 = {
  "name" : "Jack",
  "age" : 20,
  "college" : "NSUT",
}
let p3 = {
  "name" : "Jerry",
  "age" : 29,
  "college" : "MAIT",
}

// printDetails.call(p3 ,"Delhi");
// printDetails.call(p3 ,["Delhi","India"]); //This is will not give the same result thats why we use apply. 

// Apply

// printDetails.apply(p3, ["Delhi", "India"])


// // Bind
let fun = printDetails.bind(p1,"Delhi","India") //binding me voh fix kro jo chayea baaki argument me pass krdo jo change krna h fun("India")
fun();