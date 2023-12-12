//selecting elements
var emojisCards = document.querySelectorAll(".emoji-Card");
// global veribales
// functions
// eventlinsters
emojisCards.forEach(function (emojiEl) {
    emojiEl.addEventListener("mouseover", function (e) {
        console.log(e);
    });
});
