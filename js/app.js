const message = `In this space, you can write anything you want.
Could be a thought, a presentation card, a link, whatever you want.
Aside from text, I inserted an audio (cra* audio) just
to show how you can add elements to the template.
But you can do more than that...
This template was created to be improved`;

const textEl = document.getElementById("text");
const container = document.getElementById("container");
const sound = document.getElementById("sound");
sound.load(); 

let i = 0;
let audioUnlocked = false;

//this will make fadeaway the text + img after the click
document.querySelector('.start').addEventListener('click', function() {
  this.style.display = 'none';
});

// all the audio stuff
function unlockAudio() {
    if (!audioUnlocked) {
        sound.play().then(() => {
            sound.pause();
            sound.currentTime = 0;
            audioUnlocked = true;
            console.log("unblocked audio");
        }).catch(e => console.log("ERROR:", e));
    }
}

function playKeySound() {
    sound.currentTime = 0;
    sound.play().catch(() => {});
}

function type() {
    if (i < message.length) {

        // preset before text shows up
        playKeySound();

        textEl.innerHTML += message[i];

        i++;
        setTimeout(type, 170);

    } else {
        setTimeout(() => {
            container.style.opacity = 0;
        }, 2000);
    }
}

document.body.addEventListener("click", () => {
    unlockAudio();

    // pace preset
    playKeySound();
    textEl.innerHTML += message[i];
    i++;

    setTimeout(type, 70);

}, { once: true });

// here come the stars
const starsCount = 150;

for (let i = 0; i < starsCount; i++) {
    let star = document.createElement("div");
    star.className = "star";

    let size = Math.random() * 2 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.top = Math.random() * window.innerHeight + "px";

    star.style.animationDuration = (Math.random() * 5 + 5) + "s";

    document.body.appendChild(star);
}
