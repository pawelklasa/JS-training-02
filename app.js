// Replace element

// Create new element
const newHeading = document.createElement('h2');

// Add id
newHeading.id = 'task-title';

// Add text
//newHeading.innerText = 'New Heading';
newHeading.appendChild(document.createTextNode('New Heading')); 

// Get old heading
const oldHeading = document.getElementById('task-title');

// Parent
const cardAction = document.querySelector('.card-action');

// Replace

cardAction.replaceChild(newHeading, oldHeading);

// console.log(newHeading);

// Remove element
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Also remove by child
list.removeChild(lis[3]);

//  Classes and atributes

const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Clasess
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');    

val = link;

// Attributes


console.log(val);