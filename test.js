const container = document.getElementById("container");
const button = document.getElementById("button");
const inputText = document.getElementById("text-input");
const newDiv = document.getElementsByClassName("cont3");

button.addEventListener("click", function () {
  if (inputText.value === "") {
    alert("You did not input any value");
  } else {
    let newCont = document.createElement("div");
    newCont.classList.add("cont3");
    let newText = document.createElement("p");
    newText.innerText = inputText.value;
    newCont.appendChild(newText);
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    let icon1 = document.createElement("i");
    let icon2 = document.createElement("i");
    icon1.innerHTML = '<i class="fa-solid fa-trash"></i>';
    icon2.innerHTML = '<i class="fa-solid fa-check"></i>';
    button1.appendChild(icon1);
    button2.appendChild(icon2);
    newCont.appendChild(button1);
    newCont.appendChild(button2);

    container.appendChild(newCont);
  }
  inputText.value = "";
});

// newDiv.addEventListener("click", function(e) {
//     if
// })kjh
