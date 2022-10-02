/*
Based on: https://www.w3schools.com/howto/howto_js_typewriter.asp
*/
var i = 0;
var subheading = 'Programming - Artificial intelligence - Data Science'; /* The text */
var speed = 70; /* The speed/duration of the effect in milliseconds */
var finisched = false

function typeWriter() {
  if (i < subheading.length) {
    document.getElementById("typewriter").innerHTML += subheading.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    finisched = true
  }

}


var j = 0;
var c1 = 'Hey! I am a computer science student from Freiburg!'

function aboutmecontent(){
    if(!finisched) {return}
    if(j < c1.length){
      document.getElementById("aboutmecontent").innerHTML += c1.charAt(j);
      j++
    } else {
      const hiddenElements = document.querySelectorAll('.hidden-img');
      hiddenElements.forEach((el) => el.classList.add('show-img'));
    }
}

window.addEventListener('load', typeWriter)
setInterval(aboutmecontent,speed)
