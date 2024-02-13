const textArea = document.querySelector('#inputTxt');
const btn = document.querySelector('.speak');

btn.addEventListener('click', () => {
    let utterance = new SpeechSynthesisUtterance(`${textArea.value}`);
    speechSynthesis.speak(utterance);
})