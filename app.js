// document.getElementById();

console.log(document.getElementById('test-id'));

// Get things from the element

console.log(document.getElementById('test-id').id);
console.log(document.getElementById('test-id').className);

// Change styling
//document.getElementById('test-id').style.fontSize = '22px';
//document.getElementById('test-id').style.fontFamily = 'Comic Sans MS';
//document.getElementById('test-id').style.color = 'green';
// document.getElementById('test-id').style.display = 'none';

//set a variable so that it's easier to select

const titleText = document.getElementById('test-id')

// Change content

//titleText.textContent = 'Something else'; 
//titleText.innerText = 'Something else again'; 
//titleText.innerHTML = '<span style="color: red">Name:Pawel Klasa</span>'; 

// document.querySelector();

console.log(document.querySelector('#test-id')); // get by id
console.log(document.querySelector('.test-div')); // get by class
console.log(document.querySelector('div'));  // get by selector

document.querySelector('div:last-child').style.color = 'green'; // changes the color of the last div
document.querySelector('div:nth-child(2)').style.color = 'yellow '; // changes the color of the second div