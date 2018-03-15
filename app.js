// Create element
const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add id
li.id = 'inew-item';

// Add atribute
li.setAttribute('Title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('Hello World'));

// Create new link element
const link = document.createElement('a');

// Add the clases we need
link.className = 'delete-item secondary-content';

// Add link icon
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// Append li child to ul
document.querySelector('ul.collection').appendChild(li);  


console.log(li);


