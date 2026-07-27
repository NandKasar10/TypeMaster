/* ===========================
   TypeMaster - Script.js
=========================== */

const paragraphDisplay = document.getElementById("paragraph");

const typingInput = document.querySelector(".typing-input");

const isTypingPage = paragraphDisplay && typingInput;

const wpmElement = document.getElementById("current-wpm");
const accuracyElement = document.getElementById("current-accuracy");
const errorElement = document.getElementById("current-errors");
const charsElement = document.getElementById("current-chars");
const timerElement = document.getElementById("time-remaining");

const restartBtn=document.querySelector(".typing-actions .btn-secondary");
const newTextBtn=document.querySelector(".typing-actions .btn-primary");

const timerButtons = document.querySelectorAll(".btn-timer");

let currentText = "";
let timer = 60;
let timeLeft = timer;
let spans = [];

let timerStarted = false;
let timerInterval;

let errors = 0;
let correctChars = 0;


function loadParagraph() {

    if (!paragraphDisplay) return;

    currentText = paragraphDisplay.innerText;
    currentText = currentText.trim();

    paragraphDisplay.innerHTML = "";

    currentText.split("").forEach((char) => {

        const span = document.createElement("span");

        span.innerText = char;

        span.classList.add("char");

        paragraphDisplay.appendChild(span);

    });

    document.querySelector(".char").classList.add("current");

    spans = document.querySelectorAll(".char");

}



timerButtons.forEach(button => {

    button.addEventListener("click", () => {

        timerButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        timer = parseInt(button.innerText);  

        timeLeft = timer;

        timerElement.innerText = timeLeft + "s";

    });

});



function startTimer() {

    timerStarted = true;

    timerInterval = setInterval(() => {

        timeLeft--;

        timerElement.innerText = timeLeft + "s";

        if(timeLeft <= 0){
            finishTest();
        }

    },1000);

}



function resetTest() {

    clearInterval(timerInterval);

    timerStarted = false;

    timeLeft = timer;

    timerElement.innerText = timeLeft + "s";

    if (isTypingPage) {
        window.location.reload();
    }

}


if (isTypingPage) {
    loadParagraph();
}


if (typingInput) {
    
    typingInput.addEventListener("input", () => {

        if (!timerStarted)
            startTimer();

        const typed = typingInput.value;

        correctChars = 0;
        errors = 0;

        spans.forEach((span, index) => {

            span.classList.remove("correct");
            span.classList.remove("incorrect");
            span.classList.remove("current");

            if (typed[index] == null) {

                span.classList.remove("correct");
                span.classList.remove("incorrect");

            }

            else if (typed[index] === currentText[index]) {

                span.classList.add("correct");
                correctChars++;

            }

            else {

                span.classList.add("incorrect");
                errors++;

            }

        });

    if (typed.length < spans.length)
        spans[typed.length].classList.add("current");

    charsElement.innerText = typed.length;

    errorElement.innerText = errors;

    const accuracy =
        typed.length == 0
            ? 0
            : Math.round((correctChars / typed.length) * 100);

    accuracyElement.innerText = accuracy + "%";

    const elapsed = timer - timeLeft;

    if (elapsed > 0) {

        const wpm = Math.round((correctChars / 5) / elapsed * 60);

        wpmElement.innerText = wpm;

    }

    if (typed.length === currentText.length)
        finishTest();

});
}




function finishTest() {

    clearInterval(timerInterval);

    const elapsed = timer - timeLeft;

    const wpm =
        elapsed > 0
            ? Math.round((correctChars / 5) / elapsed * 60)
            : 0;

    const accuracy =
        (correctChars + errors) === 0
            ? 0
            : Math.round(correctChars / (correctChars + errors) * 100);

    localStorage.setItem("wpm", wpm);
    localStorage.setItem("accuracy", accuracy);
    localStorage.setItem("correct", correctChars);
    localStorage.setItem("incorrect", errors);
    localStorage.setItem("time", elapsed);

    window.location.href = "/result";

}


if (restartBtn) {
    restartBtn.addEventListener("click", () => {

        resetTest();

    });
}

if (newTextBtn) {
    newTextBtn.addEventListener("click", () => {

        if (isTypingPage) {
            window.location.reload();
        }

    });
}


if (window.location.pathname === "/result") {

    document.getElementById("final-wpm").innerText =
        localStorage.getItem("wpm") + " WPM";

    document.getElementById("result-wpm").innerText =
        localStorage.getItem("wpm");

    document.getElementById("result-accuracy").innerText =
        localStorage.getItem("accuracy") + "%";

    document.getElementById("result-correct-chars").innerText =
        localStorage.getItem("correct");

    document.getElementById("result-incorrect-chars").innerText =
        localStorage.getItem("incorrect");

    document.getElementById("result-time-taken").innerText =
        localStorage.getItem("time") + "s";

    const total =
        Number(localStorage.getItem("correct")) +
        Number(localStorage.getItem("incorrect"));

    document.getElementById("result-total-chars").innerText = total;

}

console.log("Script reached end");

if (document.getElementById("final-wpm")) {
    console.log("Result page detected");

    document.getElementById("final-wpm").innerText =
        localStorage.getItem("wpm") + " WPM";

    document.getElementById("result-wpm").innerText =
        localStorage.getItem("wpm");

    document.getElementById("result-accuracy").innerText =
        localStorage.getItem("accuracy") + "%";

    document.getElementById("result-correct-chars").innerText =
        localStorage.getItem("correct");

    document.getElementById("result-incorrect-chars").innerText =
        localStorage.getItem("incorrect");

    document.getElementById("result-time-taken").innerText =
        localStorage.getItem("time") + "s";

    const total =
        Number(localStorage.getItem("correct")) +
        Number(localStorage.getItem("incorrect"));

    document.getElementById("result-total-chars").innerText = total;
}