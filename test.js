window.addEventListener(
  "click",
  function () {
    console.log("window");
  },
  false
);

document.addEventListener(
  "click",
  function () {
    console.log("document");
  },
  true
);

document.querySelector(".cont1").addEventListener("click", function () {
  console.log("cont1");
});

document.querySelector(".cont2").addEventListener(
  "click",
  function () {
    console.log("cont2");
  },
  false
);

document.querySelector("button").addEventListener(
  "click",
  function (e) {
    console.log("clicked");
    e.target.innerText = "clicked";
  },
  false
);
