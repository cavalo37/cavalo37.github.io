function revealProposal() {
    document.getElementById("proposal").style.display = "block";
    document.getElementById("reveal-button").style.display = "none";
    document.getElementById("yes-button").style.display = "inline-block";


}

function celebrate() {
    const image = document.getElementById("celebration-image");
    image.classList.add("show");

    setTimeout(() => {
        alert("i'm so happy you said yes :)");
    }, 3000);
}
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
  