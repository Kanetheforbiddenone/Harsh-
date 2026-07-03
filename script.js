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

            document.getElementById("catGif").style.display = "block";

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

text.textContent = "You just made me the happiest person 🥹";

document.getElementById("catGif").src =
"https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif";

nextBtn.style.display = "inline-block";
nextBtn.textContent = "See our date ➜";

document.getElementById("buttons").style.display = "none";

});

setInterval(()=>{

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="fixed";
    heart.style.left=Math.random()*100+"vw";
    heart.style.bottom="-20px";
    heart.style.fontSize=(15+Math.random()*20)+"px";
    heart.style.opacity=.8;
    heart.style.transition="5s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.style.bottom="110vh";
        heart.style.opacity="0";
    },50);

    setTimeout(()=>{
        heart.remove();
    },5000);

},500);