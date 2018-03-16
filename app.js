const addTask = document.querySelector('.btn');
const list = document.querySelector('.collection');

addTask.addEventListener('click', fire);

const li = document.createElement('li');
li.textContent = 'I am a new list item';
li.className = 'collection-item';

function fire(e) {
  console.log('Clicked');
  e.preventDefault();
  list.appendChild(li);
}

