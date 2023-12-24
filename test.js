//Event listeners

const button3 = document.getElementsByClassName("but3")[0];
function alertButton() {
  alert("This is what happens in the hood");
}

button3.addEventListener("click", alertButton);

const box3 = document.querySelector(".but3");

function boxCont3() {
  box3.style.backgroundColor = "rgb(39, 61, 94, 0.521)";
}

button3.addEventListener("mouseover", boxCont3);
