// let p = Promise.resolve("Hello")

// p.then((msg)=>{
//     console.log(msg)
// })
// .catch((err)=>{
//     console.log(err)
// })

// Promises.all() and Promises.allSettled() done from MDN

// Promise.all() : returns the values only when all the code is resloved. If any of the code is not resolved it will show an error

// Promise.allSettled() : returns the status with the value. If any of the code is rejected it will show an error and all the other fulfilled will be executed without any error.

// Promise.race : the promise which is settled faster will be executed
// The Promise.race() static method takes an iterable of promises as input and returns a single Promise. This returned promise settles with the eventual state of the first promise that settles.

// .finally : The finally() method of Promise instances schedules a function to be called when the promise is settled (either fulfilled or rejected). It immediately returns another Promise object, allowing you to chain calls to other promise methods.

// after .catch comes .finally


// .finally()=>{
//   console.log("Finally Settled")
// }