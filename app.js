// document.querySelector('.clear-tasks').addEventListener('click',
//   function(e){
//     console.log('Hello!');
//     //e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  //console.log('Clicked');
  let val;

  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList; // To get collection

  //val = e.target.innerText = 'Hi';

  // Get type
  val = e.type;

  // Get timestamp
  val = e.timeStamp;

  // Coord event relative to the window, number of pixels from the top
  val = e.clientY;
  val = e.clientX; // number of pixels from the right

  // Coord event relative to the element itself, number of pixels from the top
  val = e.offsetY;
  val = e.offsetX; // number of pixels from the right

  console.log(val);
}