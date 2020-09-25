// selct element from the DOM
const container = document.querySelector(".container");
const text = document.querySelector("#text");

// calculate the total time spent
const totalTime = 8000;
const BreathingTime = (8000 / 5) * 2;
const constant = totalTime / 5;

// create a function
function breathAnimation() {
  text.innerText = "Deep Breath";
  if (container.classList.contains("shrink")) {
    container.classList.remove("shrink");
  }

  container.classList.add("grow");

  setTimeout(() => {
    text.textContent = "Hold";

    setTimeout(() => {
      text.textContent = "Breathe Out";
      if (container.classList.contains("grow")) {
        container.classList.remove("grow");
      }
      container.classList.add("shrink");
    }, constant);
  }, BreathingTime);
}

// call the function
breathAnimation();

// set the total time
setInterval(breathAnimation, totalTime);
