console.log("there are two types of scopes");
console.log("lexical and dynamic"); 
console.log("lexical : A variable can be accessed with current block as well as all the child blocks");
console.log("Dynamic : A variable may or may not be accessed within the block")


var x=1;

function hello(){
    

    if(true){
        var x=3;
        
    }
    console.log(x);
    
}

hello();