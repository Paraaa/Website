/*
Based on: https://www.w3schools.com/howto/howto_c1_counters_typewriter.asp
*/
var i = 0;
var subheading =
  "Programming - Artificial intelligence - Data Science"; /* The text */
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

var c1_counter = 0;
var c2_counter = 0;
var c1 = "Hey! I'm a computer science student from Freiburg!";
var c2 =
  " I'm interested in artificial intelligence and since the beginning of my master's degree also in bioinformatics.";

function aboutmecontent() {
  if (!finished) {
    return;
  }
  if (c1_counter < c1.length) {
    document.getElementById("aboutmecontent").innerHTML +=
      c1.charAt(c1_counter);
    c1_counter++;
  } else if (c2_counter < c2.length) {
    document.getElementById("aboutmecontent").innerHTML +=
      c2.charAt(c2_counter);
    c2_counter++;
  } else {
    const hiddenElements = document.querySelectorAll(".hidden-img");
    hiddenElements.forEach((el) => el.classList.add("show-img"));
  }
}

window.addEventListener("load", typeWriter);
setInterval(aboutmecontent, speed);
