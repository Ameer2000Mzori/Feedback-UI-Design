//selecting elements
var emojisCards = document.querySelectorAll(".emoji-Card");
var SendBtn = document.getElementsByClassName("Send-Btn")[0];
var headerEl = document.getElementsByClassName("header")[0];
var thankWrapperEl = document.getElementsByClassName("thank-Wrapper")[0];
var secondP = document.getElementsByClassName("second-P")[0];
// global veribales
var reactText = "Neutral";
// functions
var changeStyleFunction = function (emojiEl) {
    // removing any selected class that an element has
    emojisCards.forEach(function (el) {
        el.classList.remove("selected");
    });
    // geving the selected class to clicked element
    emojiEl.classList.add("selected");
};
// our hideHeader Function
var hideHeaderFunction = function () {
    headerEl.hidden = true;
    thankWrapperEl.hidden = false;
    thankWrapperEl.style.display = "flex";
    secondP.textContent += " ".concat(reactText);
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
    emojiEl.addEventListener("click", function (e) {
        var _a;
        console.log(e);
        changeStyleFunction(emojiEl);
        reactText = (_a = emojiEl.lastElementChild) === null || _a === void 0 ? void 0 : _a.textContent;
    });
});
SendBtn.addEventListener("click", hideHeaderFunction);
