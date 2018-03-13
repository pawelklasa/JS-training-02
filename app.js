let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');

val = list;

// Get child nodes - all nodes including breaks
val = list.childNodes;

// Get children element nodes - HTML Collection
val = list.children;

val = list.children[2];

list.children[3].style.background = '#ccc';
list.children[3].textContent = 'Hello';



// Get children of children
val = list.children[2].children[0];

list.children[2].children[0].id = 'test-link';


// first child
val = list.firstChild;
val = list.firstElementChild;

// last child
val = list.lasthild;
val = list.lastElementChild;

// Count child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;

val = listItem.parentNode.parentNode; 

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling.nextElementSibling;

// Get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;

console.log(val); 