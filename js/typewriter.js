/*
Based on: https://www.w3schools.com/howto/howto_js_typewriter.asp
*/
var i = 0;
var txt = 'Programming - Artificial intelligence - Bioinformatics'; /* The text */
var speed = 70; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typewriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
window.addEventListener('load', typeWriter)

