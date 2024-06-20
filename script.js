// Countdown Timer
var countDownDate = new Date("July 21, 2024 00:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);

// Array of Messages
var messages = [
    "You are my sunshine!",
    "I love you more every day!",
    "Our journey is just beginning!",
    "You make my heart skip a beat!",
    "I can't wait to see what the future holds!"
];

var messageIndex = 0;
function changeMessage() {
    document.getElementById("message").innerHTML = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
}

// Change message every 5 seconds
changeMessage();
setInterval(changeMessage, 5000);

// Function to generate hearts dynamically
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

document.addEventListener("DOMContentLoaded", function() {
    const style = document.createElement("style");
    style.innerHTML = `
        .heart {
            position: absolute;
            top: -50px;
            font-size: 2rem;
            animation: fall linear;
        }

        @keyframes fall {
            to {
                transform: translateY(100vh);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});
