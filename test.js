//Event listeners
const hiddenContent = document.querySelector(".hidden");
const revealBtn = document.querySelector(".but2");

function revealContent() {
  if (hiddenContent.classList.contains("hidden")) {
    hiddenContent.classList.remove("hidden");
  } else {
    hiddenContent.classList.add("hidden");
  }
}

revealBtn.addEventListener("click", revealContent);
