//selecting elements
var emojisCards = document.querySelectorAll(".emoji-Card");
// global veribales
// functions
var changeStyleFunction = function (emojiEl) {
    // removing any selected class that an element has
    emojisCards.forEach(function (el) {
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
emojisCards.forEach(function (emojiEl) {
    emojiEl.addEventListener("click", function () {
        changeStyleFunction(emojiEl);
        console.log(emojiEl);
    });
});
