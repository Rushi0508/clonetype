
// SPEECH TO TEXT
let stt_btn = document.querySelector(".btn2");
let input2 = document.querySelector("#textarea2");
var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
stt_btn.addEventListener('click', function () {
    recognition.start();
    input2.innerHTML = '...converting';
})    
recognition.onresult = function (e) {
    var transcript = e.results[0][0].transcript;
    input2.innerHTML = transcript;
}    


