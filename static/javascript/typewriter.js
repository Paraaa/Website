/*
Based on: https://www.w3schools.com/howto/howto_c1_counters_typewriter.asp
*/
var i = 0;
var subheading =
  "Artificial intelligence - Data Science - Bioinformatics"; /* The text */
var speed = 35; /* The speed/duration of the effect in milliseconds */
var finished = false;

function typeWriter() {
  if (i < subheading.length) {
    document.getElementById("typewriter").innerHTML += subheading.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    finished = true;
  }
}

function aboutmecontent() {
  if (!finished) {
    return;
  }
  const hiddenElements = document.querySelectorAll(".hidden-img");
  hiddenElements.forEach((el) => el.classList.add("show-img"));
}

window.addEventListener("load", typeWriter);
setInterval(aboutmecontent, speed);
