const starsContainer = document.getElementById("stars");
const exploreBtn = document.getElementById("exploreBtn");
const content = document.querySelector(".content");
const finalChapter=document.getElementById("finalChapter");

const playVoice=document.getElementById("playVoice");

const voiceAudio=document.getElementById("voiceAudio");

const showSurprise=document.getElementById("showSurprise");

const surpriseText=document.getElementById("surpriseText");
const chapterTitle = document.getElementById("chapterTitle");
const finalLetter = document.getElementById("finalLetter");
const finalPhoto = document.getElementById("finalPhoto");
const finalMessage = `Every little memory in this tiny universe reminds me how lucky I am to have you in my life.
Thank you for turning the simplest moments into the happiest ones.

I really hope this little surprise made you smile, even if it was just for a little while.

And one more thing, Never stop smiling...

Because somehow, the world feels a little brighter whenever you do. ❤️`;
function typeLetter(text, speed = 40){

    finalLetter.innerHTML = "";

    let i = 0;

    const timer = setInterval(()=>{

        finalLetter.innerHTML += text.charAt(i);

        i++;

        if(i >= text.length){

            clearInterval(timer);

            let opacity = 0;

            const fadePhoto = setInterval(() => {

                opacity += 0.05;

                finalPhoto.style.opacity = opacity;

                if (opacity >= 1) {

                    clearInterval(fadePhoto);

                    playVoice.classList.add("show");

                }

            }, 80);

        }

    },speed);

}

// Create stars
for(let i=0;i<250;i++){

    const star=document.createElement("div");

    star.classList.add("star");

    star.style.left=Math.random()*100+"%";

    star.style.top=Math.random()*100+"%";

    star.style.animationDelay=Math.random()*3+"s";

    star.style.opacity=Math.random();

    star.style.width=(Math.random()*3+1)+"px";
    star.style.height=star.style.width;

    starsContainer.appendChild(star);

}


// Typing Effect

const message =
"Every star in this universe remembers a beautiful moment of us!✨";

let index = 0;

function typeWriter(){

    if(index < message.length){

        document.getElementById("typing").innerHTML += message.charAt(index);

        index++;

        setTimeout(typeWriter,40);

    }

}

typeWriter();


// Shooting Star

function shootingStar(){

    const star=document.createElement("div");

    star.style.position="absolute";

    star.style.width="3px";
    star.style.height="3px";

    star.style.background="white";

    star.style.boxShadow="0 0 20px white";

    star.style.top=Math.random()*40+"%";

    star.style.left="-50px";

    star.style.transform="rotate(45deg)";

    document.body.appendChild(star);

    let x=-50;
    let y=parseFloat(star.style.top);

    const interval=setInterval(()=>{

        x+=12;
        y+=0.5;

        star.style.left=x+"px";
        star.style.top=y+"%";

        if(x>window.innerWidth){

            clearInterval(interval);

            star.remove();

        }

    },20);

}

setInterval(shootingStar,5000);
// --------------------
// Memory Data
// --------------------

const memories = [

{
    title:"The Smile That Feels Like Home!✨",
    text:"",
    image:"photos/memory1.jpeg",
    x:18,
    y:28
},

{
    title:"My Favorite Hand to Hold!🤍",
    text:"",
    image:"photos/memory2.jpeg",
    x:72,
    y:20
},

{
    title:"A Chapter I'll Always Revisit!🌸",
    text:"",
    image:"photos/memory3.jpeg",
    x:28,
    y:58
},

{
    title:"The Beauty I Get to See!🥹",
    text:"",
    image:"photos/memory4.jpeg",
    x:74,
    y:65
},

{
    title:"Until the Next Hug!🫂",
    text:"",
    image:"photos/memory5.jpeg",
    x:48,
    y:82
}

];

const modal = document.getElementById("memoryModal");

const modalTitle = document.getElementById("memoryTitle");

const modalText = document.getElementById("memoryText");

const modalImage = document.getElementById("memoryImage");

const closeModal = document.getElementById("closeModal");

const closeMemory = document.getElementById("closeMemory");

// const memoryCounter = document.getElementById("memoryCounter");

const planet = document.getElementById("planet");
let memoryTypingTimer = null;

let currentMemoryIndex = 0;

// Create clickable stars

function showMemory(index){

// Open popup
modal.style.display = "flex";
// If this is the last memory, start revealing the hidden planet
if (
    discoveredStars.size >= memories.length &&
    !planet.classList.contains("show")
) {

    setTimeout(() => {

        planet.classList.add("show");

    }, 500);

}

// Reset animations
modalImage.classList.remove("show");
modalTitle.classList.remove("show");

// Reset content
modalText.innerHTML = "";

closeMemory.style.display = "none";

// Set photo & title
modalImage.src = memories[index].image;
modalTitle.innerHTML = memories[index].title;

// Start animation sequence

setTimeout(() => {

    modalImage.classList.add("show");

}, 200);

setTimeout(() => {

    modalTitle.classList.add("show");

}, 700);

setTimeout(() => {

    typeMemory(memories[index].text);

}, 1200);
}

let unlockedStars = 1;
let discoveredStars = new Set();
const starElements = [];

closeModal.onclick = () => {

    modal.style.display = "none";

};
closeMemory.onclick = () => {

    modal.style.display = "none";

};

window.onclick=(e)=>{

    if(e.target===modal){

        modal.style.display="none";

    }

};
exploreBtn.addEventListener("click",()=>{

    content.classList.add("fade-out");
    memories.forEach((memory, index) => {

    const star = document.createElement("div");

    star.className = "memory-star";

    const left = 10 + Math.random() * 80;
    const top = 15 + Math.random() * 65;

    star.style.left = left + "%";
    star.style.top = top + "%";

    const size = 14 + Math.random() * 6;

    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.animationDuration =
        (3 + Math.random() * 4) + "s";

    // Hide all stars except the first one
    if (index >= unlockedStars) {
        star.style.display = "none";
    }

    star.onclick = () => {

        star.classList.add("discovered");

        // Only count this star the first time
        if (!discoveredStars.has(index)) {

            discoveredStars.add(index);
            console.log("Discovered:", discoveredStars.size);

            // Unlock the next star
            if (index + 1 < memories.length) {

                starElements[index + 1].style.display = "block";

                unlockedStars++;
            }
            // All memories discovered?

        }
        showMemory(index);

    };

    starElements.push(star);

    document.body.appendChild(star);

});

});
planet.onclick = () => {

    finalChapter.style.display = "flex";

    chapterTitle.innerHTML = "";

    finalLetter.innerHTML = "";

    finalPhoto.classList.remove("show");

    playVoice.classList.remove("show");

    showSurprise.style.display = "none";

    surpriseText.style.display = "none";

    setTimeout(()=>{

        chapterTitle.innerHTML = "✨ You found my little planet...";

    },500);

    setTimeout(()=>{

        chapterTitle.innerHTML = "So here's something I wanted to tell you...";

    },2200);

    setTimeout(()=>{

        typeLetter(finalMessage);

    },4200);

};
playVoice.onclick=()=>{

    voiceAudio.play();

};

voiceAudio.onended = () => {

    showSurprise.click();

};

showSurprise.onclick = () => {

    showSurprise.style.display = "none";
    surpriseText.style.display = "block";

    // Enable scrolling on mobile
    document.body.style.overflowY = "auto";
    document.body.style.height = "auto";

    document.documentElement.style.overflowY = "auto";
    document.documentElement.style.height = "auto";

    setTimeout(() => {

        surpriseText.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 300);

};
function startMeteorShower() {

    const meteorInterval = setInterval(() => {

        // Create 2–4 meteors in one burst
        const burst = 2 + Math.floor(Math.random() * 3);

        for (let i = 0; i < burst; i++) {

            setTimeout(() => {

                createMeteor();

            }, i * 120);

        }

    }, 400);

    // Stop shower after 7 seconds
    setTimeout(() => {

        clearInterval(meteorInterval);

        setTimeout(() => {

            showFinalEnding();

        }, 800);

    }, 7000);

}
function createMeteor(){

    const meteor = document.createElement("div");

    meteor.className = "meteor";

    // Random horizontal position
    meteor.style.left =
        Math.random() * window.innerWidth + "px";

    // Start slightly above the screen
    meteor.style.top = "-120px";

    // Random meteor length
    const length = 40 + Math.random() * 50;

    meteor.style.height = length + "px";

    // Random animation speed
    const duration = 0.8 + Math.random() * 1.2;

    meteor.style.animationDuration = duration + "s";

    document.body.appendChild(meteor);

    setTimeout(() => {

        meteor.remove();

    }, duration * 1000 + 500);

}
function showFinalEnding() {

    finalChapter.style.opacity = "0";

    setTimeout(() => {

        finalChapter.style.display = "none";

        const ending = document.getElementById("endingScreen");

        ending.classList.add("show");

        // Make sure the ending is visible on mobile
        ending.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        setTimeout(() => {

            ending.style.opacity = "0";

        }, 8000);

    }, 2000);

}
function typeMemory(text, speed = 30) {

    if (memoryTypingTimer) {
        clearInterval(memoryTypingTimer);
    }

    modalText.innerHTML = "";

    let index = 0;

    memoryTypingTimer = setInterval(() => {

        modalText.innerHTML += text.charAt(index);

        index++;

        if (index >= text.length) {

            clearInterval(memoryTypingTimer);

            closeMemory.style.display = "block";

        }

    }, speed);

}