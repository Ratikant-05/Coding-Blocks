console.log("Variable Hoisting");
console.log("For variables declared with var, only the declaration is hoisted, not the initialization, this means the variable will be hoisted to the top of its scope but initialized to undefined until the code assigns it to a value.");

// console.log(y); //at the top y is undefined 

// var y = 10;
// console.log(y); //now the value of y becomes 10

// var y = 200;
// console.log(y); //now the value of y becomes 200


// hoisting for functions 

console.log(y); //will give undefined
// console.log(y()); //will give error because y is undefined and undefined function can not be called

var y = () => "Hello"

console.log(y); //will invoke the function

console.log(y()); //return Hello

// var fun=(a,b)=> a+b

// console.log(fun(5,10))