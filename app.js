const form = document.querySelector('form');
const taskInput = document.getElementById('task');

form.addEventListener('submit', runEvent);

taskInput.value = ''; // Clearing form - typically after submitting

// Keydown
// taskInput.addEventListener('keydown', runEvent);
// Keydown
// taskInput.addEventListener('keyup', runEvent);
// Keypress
// taskInput.addEventListener('keypress', runEvent);
// Focus
// taskInput.addEventListener('focus', runEvent);
// Blur
// taskInput.addEventListener('blur', runEvent);
// Cut
// taskInput.addEventListener('cut', runEvent);
// Paste
// taskInput.addEventListener('paste', runEvent);
// Input
// taskInput.addEventListener('input', runEvent);

// CHange ---



function runEvent(e) {
    console.log(`Event_Type: ${e.type}`);

    console.log(`Input field value: ${taskInput.value}`);

    e.preventDefault();  
}


