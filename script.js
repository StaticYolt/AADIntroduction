const emojiButton = document.getElementById("emoji-button");
let hasPressed = false;
const emojis = ["🧑‍🍳", "🧑‍🎓", "🧑🏻‍💻", "🏃🏻‍➡️", "🐔", "🍌", "🧀", "🏀", "🎤", "🗽", "🧧", "❤️‍🔥", "🀄️"];

const toAngry = () => {
    emojiButton.style.backgroundColor = "#FF383B";
    emojiButton.innerText = "Click >:(";
}

const toCurious = () => {
    emojiButton.style.backgroundColor = "#FFBC20";
    emojiButton.innerText = "Click :o";
}

const toHappy = () => {
    hasPressed = true;
    emojiButton.style.backgroundColor = "#23DC29";
    emojiButton.innerText = "Click :D";
}


emojiButton.addEventListener("click", (event) => {
    const { clientX, clientY } = event;
    if(!hasPressed) {
        toHappy();
        for(let i = 0; i < 10; i++) {
            createEmoji(clientX, clientY);
        }
    }
    else {
        createEmoji(clientX, clientY);
    }
});
emojiButton.addEventListener("mouseover", () => {
    if(!hasPressed) toCurious();
});
emojiButton.addEventListener("mouseleave", () => {
    if(!hasPressed) toAngry();
});

function createEmoji(x, y) {
    // Create a new emoji element
    const emoji = document.createElement("div");
    emoji.classList.add("emoji");

    // Randomly pick an emoji from the array
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    // Set the initial position near the mouse cursor with random offsets
    emoji.style.left = `${x + (Math.random() * 80 - 15)}px`; // Random horizontal offset
    emoji.style.top = `${y + (Math.random() * 40 - 15)}px`; // Random vertical offset

    // Append the emoji to the body
    document.body.appendChild(emoji);

    // Remove the emoji after the animation ends
    emoji.addEventListener("animationend", () => {
      emoji.remove();
    });
}