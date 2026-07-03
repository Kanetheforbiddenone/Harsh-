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

            case 3:

                    title.textContent = "OUR DATE PLAN 🍣";

                        text.innerHTML = `
                            🍣 Sushi<br><br>
                                🍕 Pizza<br><br>
                                    😂 Bokachoda
                                        `;

                                            document.getElementById("catGif").style.display = "none";

                                                nextBtn.textContent = "Next ❤️";

                                                    break;

                                                    case 4:

                                                            const days = [
                                                                    "Saturday",
                                                                            "Sunday",
                                                                                    "Friday"
                                                                                        ];

                                                                                            const dates = [
                                                                                                    "12 July",
                                                                                                            "19 July",
                                                                                                                    "26 July"
                                                                                                                        ];

                                                                                                                            const times = [
                                                                                                                                    "5:00 PM",
                                                                                                                                            "6:30 PM",
                                                                                                                                                    "7:00 PM"
                                                                                                                                                        ];

                                                                                                                                                            const randomDay =
                                                                                                                                                                    days[Math.floor(Math.random()*days.length)];

                                                                                                                                                                        const randomDate =
                                                                                                                                                                                dates[Math.floor(Math.random()*dates.length)];

                                                                                                                                                                                    const randomTime =
                                                                                                                                                                                            times[Math.floor(Math.random()*times.length)];

                                                                                                                                                                                                title.textContent = "OUR DATE ❤️";

                                                                                                                                                                                                    text.innerHTML = `
                                                                                                                                                                                                            📅 ${randomDay}<br><br>
                                                                                                                                                                                                                    🗓️ ${randomDate}<br><br>
                                                                                                                                                                                                                            🕔 ${randomTime}
                                                                                                                                                                                                                                `;

                                                                                                                                                                                                                                    nextBtn.textContent = "One last thing ❤️";

                                                                                                                                                                                                                                        break;

                                                                                                                                                                                                                                        case 5:

                                                                                                                                                                                                                                                title.textContent = "THANK YOU ❤️";

                                                                                                                                                                                                                                                    text.innerHTML = `
                                                                                                                                                                                                                                                        Thank you for saying yes.<br><br>

                                                                                                                                                                                                                                                            I'm genuinely excited to spend time with you.<br><br>

                                                                                                                                                                                                                                                                I hope this is the first of many amazing memories together. 🥹❤️
                                                                                                                                                                                                                                                                    `;

                                                                                                                                                                                                                                                                        nextBtn.style.display = "none";

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