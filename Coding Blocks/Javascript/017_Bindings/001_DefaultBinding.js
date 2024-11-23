// Binding : refers to the context in which a function is executed. Specifically, It determines the value of "this" within a function.

// Default Binding 
// When a function is called in the global context or as a standalone function. This refers to global object(window in browser and global in Node.js )

// by default "this" is binded with the window
// console.log(this.innerWidth) //this is used for window binding (this points window)

function hello(){
  console.log(this)
}

hello();