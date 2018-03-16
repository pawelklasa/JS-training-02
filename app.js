const addTask = document.querySelector('.btn');
const list = document.querySelector('.collection');

addTask.addEventListener('click', fire);

const li = document.createElement('li');

function fire(e) {
  console.log('Clicked');
  e.preventDefault();
  list.appendChild('<li></li>');
}

