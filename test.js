const question = document.getElementsByClassName("content-container");

for (var i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function () {
    console.log("sdf");
    this.classList.toggle("active");
  });
}

// for (n in question) {
//   question[n].addEventListener("click", function () {
//     console.log("sdf");
//   });
// }
