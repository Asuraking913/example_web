const container = document.getElementById("container");
const button = document.getElementById("button");
const inputText = document.getElementById("text-input");
const newDiv = document.getElementsByClassName("cont3");
// const newButton1 = document.getElementsByClassName("check");
// const newButton2 = document.getElementsByClassName("delete");

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
    button1.classList.add("check");
    button2.classList.add("delete");
    let button2 = document.createElement("button");
    let icon1 = document.createElement("i");
    let icon2 = document.createElement("i");
    icon1.innerHTML = '<i class="fa-solid fa-check"></i>';
    icon2.innerHTML = '<i class="fa-solid fa-trash"></i>';
    button1.appendChild(icon1);
    button2.appendChild(icon2);
    newCont.appendChild(button1);
    newCont.appendChild(button2);

    container.appendChild(newCont);
  }
  inputText.value = "";
});

// window.addEventListener("click", function (e) {
//   if (e.target.className == "check") {
//     e.target.paren
//   }
// });
