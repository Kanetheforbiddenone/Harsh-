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

            nextBtn.textContent = "YES ❤️";

            break;

    }

});