// console.log(window)

// let body = document.querySelector('body')

// window.addEventListener('scroll',(event)=>{
//   let xPosition = window.scrollX;
//   let yPosition = window.scrollY;
//   console.log(xPosition,yPosition)
// })
let body = document.querySelector('body')

window.addEventListener('scroll',(event)=>{
  let xPosition = window.scrollX
  let yPosition = window.scrollY
  
  if(yPosition>window.innerHeight){
    body.classList.toggle('dark')
  }
})