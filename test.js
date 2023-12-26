const button = document.getElementById("open-btn");
const closeBtn = document.querySelector(".close-btn");
const modalCont = document.getElementById("modal-container");

button.addEventListener("click", function () {
  modalCont.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  modalCont.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === modalCont) {
    modalCont.style.display = "none";
  }
});
