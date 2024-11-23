
// Syntax of Promise

let p = new Promise((resolve,reject)=>{
    console.log("promise is pending") //yaha pr promise pending hai 
    setTimeout(() => {
        console.log("I am a promise and I am fulfilled") //yaha pr aake promise fulfill hua after 2 seconds
        console.log("I am a promise and I am rejected") //yaha pr aake promise fulfill hua after 2 seconds
        resolve(true)
        reject(new Error("I am an error"))
    }, 2000);
})

console.log(p) //ye piece of code execute ho jayega pr pending show krega kyuki promise abhi fulfilled nhi h voh 2 second baad hoga fulfill




// function kalTimeseauga(){
//     return new Promise((resolve, reject)=>{
//         let kalTimeseauga=true;
//         if(kalTimeseauga){
//             resolve("aaja andar")
//         }else{
//             reject("bahar nikal")
//         }
//     })
// }
// let p = kalTimeseauga();
// setTimeout(() => {
//     p
//     .then((msg)=>{
//         console.log(msg);
//     })
//     .catch((errmsg)=>{
//         console.log(errmsg);
//     })
// }, 3000);




// function kalTimeseauga(){
//   return new Promise((resolve, reject)=>{
//       console.log("running")
//       setTimeout(() => {
//           let kalTimeseauga=false;
//       if(kalTimeseauga){
//           resolve("aaja andar")
//       }else{
//           reject("bahar nikal")
//       }
//       }, 3000);
//   })
// }
// let p= kalTimeseauga();
// setTimeout(() => {
//   p
//   .then((msg)=>{
//       console.log(msg);
//   })
//   .catch((errmsg)=>{
//       console.log(errmsg);
//   })
// },2999);

