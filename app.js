let val;   

val = document.all[4];
val = document.forms; // returns collection of all forms in the document
val = document.links;
//val = document.links[0].className;
val = document.scripts[0].className;
val = document.scripts[0].getAttribute('src');


console.log(val);
