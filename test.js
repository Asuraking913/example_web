const container = document.getElementById("container");
const addBtn = document.getElementById("button");
const inputText = document.getElementById("text-input");

addBtn.addEventListener("click", function () {
  if (inputText.value === "") {
    alert("you have not inputed any value");
  } else {
    let newCont = document.createElement("div");
    let newList = document.createElement("li");
    let text = document.createElement("p");

    newCont.classList.add("cont3");
    newCont.appendChild(newList);
    text.innerText = inputText.value;
    newList.appendChild(text);

    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    button1.classList.add("check");
    button2.classList.add("delete");
    let icon1 = document.createElement("i");
    let icon2 = document.createElement("i");

    icon1.innerHTML = '<i class="fa-solid fa-check"></i>';
    icon2.innerHTML = '<i class="fa-solid fa-trash"></i>';

    button1.appendChild(icon1);
    button2.appendChild(icon2);
    newList.appendChild(button1);
    newList.appendChild(button2);

    container.appendChild(newCont);

    button1.addEventListener("click", function (e) {
      e.target.parentElement.parentElement.previousSibling.style.textDecoration =
        "line-through";
    });

    button2.addEventListener("click", function (e) {
      e.target.parentElement.parentElement.parentElement.parentElement.remove();
    });

    inputText.value = "";
  }
});
