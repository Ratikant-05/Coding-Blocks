function cal(x,y,f){
  console.log(f(x,y))
}

function add(x,y){
  return(x + y)
}

cal(5,2,add);

function FunGen(){
  function greet(){
    console.log("Hello")
  }
  return greet  
}

var x = FunGen();

x();
