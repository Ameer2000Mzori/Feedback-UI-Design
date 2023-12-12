//selecting elements
const emojisCards = document.querySelectorAll(".emoji-Card");

// global veribales

// functions

// eventlinsters
emojisCards.forEach((emojiEl) => {
  emojiEl.addEventListener("mouseover", (e) => {
    console.log(e);
  });
});
