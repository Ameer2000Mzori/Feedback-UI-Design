//selecting elements
const emojisCards = document.querySelectorAll(".emoji-Card");

// global veribales

// functions
const changeStyleFunction = (emojiEl) => {
  // removing any selected class that an element has
  emojisCards.forEach((el) => {
    el.classList.remove("selected");
  });

  // geving the selected class to clicked element
  emojiEl.classList.add("selected");
};

// eventlinsters

// emojisCards.forEach((emojiEl) => {
//   emojiEl.addEventListener("mouseover", () => {
//     changeStyleFunction(emojiEl);
//     console.log(emojiEl);
//   });
// });

// feel free to use mouseover or click,
// i prefer click

emojisCards.forEach((emojiEl) => {
  emojiEl.addEventListener("click", () => {
    changeStyleFunction(emojiEl);
    console.log(emojiEl);
  });
});
