const quote = [
  {
    quote: "The only thing we have to fear is fear itself.",
    person: "- Franklin D. Roosevelt",
  },
  {
    quote:
      "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    person: -"- Martin Luther King Jr",
  },
  {
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    person: "- Ralph Waldo Emerson",
  },
  {
    quote: "The only impossible journey is the one you never begin.",
    person: "- Tony Robbins",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    person: "- Nelson Mandela",
  },
];

let button = document.querySelector("button");
let texQuote = document.querySelector(".quote");
let author = document.querySelector("h3");

button.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quote.length);
  texQuote.innerText = quote[random].quote;
  author.innerText = quote[random].person;
});
