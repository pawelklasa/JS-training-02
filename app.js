const addTask = document.querySelector('.btn');

addTask.addEventListener('click', fire);

function fire() {
  console.log('Clicked');
  preventDefault();
}