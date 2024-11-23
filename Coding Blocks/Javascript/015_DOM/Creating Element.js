// DOM Document Object Model 
// Represents the structure of an HTML document as a tree of nodes, where each node corresponds to an element, attribute or piece of text in the document. The DOM allows developers to access, modify and interact with the content, structure and styling of the webpage.

let list = document.querySelector('.movie-list'); //selecting the item using a selector
console.log(list)
list.innerHTML +='<li>Venom</li>' //adding a new element to the HTML of the list item

let listitem = document.createElement('li') //creating a new element
listitem.innerText ="Hulk" //adding text to the new created element

listitem.classList.add('movie-item') //adding class to the element

setTimeout(() => {
  list.appendChild(listitem)
}, 2000);


