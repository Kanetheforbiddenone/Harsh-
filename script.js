const title = document.getElementById("title");
const text = document.getElementById("text");
const nextBtn = document.getElementById("nextBtn");

let step = 0;

nextBtn.addEventListener("click", () => {

    step++;

    switch(step){

        case 1:
            title.textContent = "Mere pyaare Harshu ❤️";
            text.textContent = "There's something I've been wanting to ask you...";
            break;

        case 2:
            title.textContent = "Will you go out with me? 🥺";
            text.textContent = "I really hope your answer is yes.";

            nextBtn.style.display = "none";

            document.getElementById("buttons").style.display = "flex";
            break;
    }

});

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * 250 - 125;
    const y = Math.random() * 180 - 90;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {

    title.textContent = "YAYYYYYY ❤️";
    text.textContent = "I can't wait for our date 🥹";

    document.getElementById("buttons").style.display = "none";

    nextBtn.style.display = "inline-block";
    nextBtn.textContent = "Next ➜";

});