const playBtn = document.getElementById("play");
const stopBtn = document.getElementById("stop");
const timer = document.getElementById("timer");

let seconds = 0;
let minutes = 0;
let hours = 0;

let seconds1 = 0;
let minutes1 = 0;
let hours1 = 0;

function startInterval() {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes = 1;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours = 1;
    }
  }

  if (seconds < 10) {
    seconds1 = "0" + seconds.toString();
  } else {
    seconds1 = seconds.toString();
  }

  if (minutes < 10) {
    minutes1 = "0" + minutes.toString();
  } else {
    minutes1 = minutes.toString();
  }

  if (hours < 10) {
    hours1 = "0" + hours.toString();
  } else {
    hours1 = hours.toString();
  }

  timer.innerText = hours + ":" + minutes + ":" + seconds;
}

playBtn.addEventListener("click", function () {
  window.setInterval(startInterval, 10);
});
