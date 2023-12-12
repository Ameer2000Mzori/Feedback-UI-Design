//selecting elements
const emojisCards = document.querySelectorAll(".emoji-Card");
const SendBtn: any = document.getElementsByClassName("Send-Btn")[0];
const headerEl: any = document.getElementsByClassName("header")[0];
const thankWrapperEl: any = document.getElementsByClassName("thank-Wrapper")[0];

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

SendBtn.addEventListener("click", () => {
  console.log("hallo world");
});
