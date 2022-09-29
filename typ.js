const text = document.querySelector(".para-type p");
const inpField = document.querySelector(".container .input-field");
const mistakeTag = document.querySelector(".mistake span");
let wpmTag = document.querySelector(".wpm span");
let tryagain = document.querySelector(".tryagain");
const wpm2 = document.querySelector(".wpm2 span");
const acc = document.querySelector(".ac span");


let timer,time=0,
charIndex = mistakes = isTyping = 0;


function getpara(){
    const r_index = Math.floor(Math.random() * paragraphs.length);
    text.innerHTML="";
    paragraphs[r_index].split("").forEach(char=> {
        let span = `<span>${char}</span>`;
        text.innerHTML += span;
    });
    text.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    text.addEventListener("click", () => inpField.focus());
}

function starttype(){
    if(!isTyping) {
        timer = setInterval(initTimer, 1000);
        isTyping = true;
    }
    const characters = text.querySelectorAll("span");
    let userchar = inpField.value.split("")[charIndex];
    if(userchar == null){
        charIndex--;
        if(characters[charIndex].classList.contains("incorrect")) {
            mistakes--;
        }
        characters[charIndex].classList.remove("correct", "incorrect");
    }else{
        if(characters[charIndex].innerText === userchar){
            characters[charIndex].classList.add("correct");
        }else{
            characters[charIndex].classList.add("incorrect");
            mistakes++;
        }
        charIndex++;
    }
    characters.forEach(span => span.classList.remove("active"));
    characters[charIndex].classList.add("active");
    mistakeTag.innerText = mistakes;
    let accuracy = Math.round(((charIndex-mistakes)/charIndex)*100);
    let wpm = Math.round(((charIndex - mistakes)  / 5) / (time) * 60);
    wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
    wpmTag.innerText = wpm;
    wpm2.innerText = wpm;
    acc.innerText = accuracy;
}
function initTimer() {
        time++;
        let wpm = Math.round(((charIndex - mistakes)  / 5) / (time) * 60);
        let accuracy = Math.round(((charIndex-mistakes)/charIndex)*100);
        wpmTag.innerText = wpm;
        wpm2.innerText = wpm;
        acc.innerText = accuracy;
}
function resettest() {
    getpara();
    charIndex = mistakes = isTyping = 0;
    time=0;
    clearInterval(timer);
    inpField.value = "";
    wpmTag.innerText = 0;
    wpm2.innerText = 0;
    mistakeTag.innerText = 0;
    acc.innerText = 0;
}

getpara();
inpField.addEventListener("input", starttype);
tryagain.addEventListener("click", resettest);



const wrap = document.querySelector(".content-wrapper");
const stoptest = document.querySelector(".stoptest");
const afterresult = document.querySelector(".after-results");
const tryagain2 = document.querySelector(".tryagain2");
stoptest.addEventListener("click", stopfunc);
tryagain2.addEventListener("click", stopfunc2);
function stopfunc2(){
    wrap.classList.toggle("v-class");
    afterresult.classList.toggle("v-class");   
    resettest();
}
function stopfunc(){
    clearInterval(timer);
    wrap.classList.toggle("v-class");
    afterresult.classList.toggle("v-class");   
}